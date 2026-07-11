import { useEffect, useRef, useState } from 'react';
import { loadGoogleMaps } from '../googleMapsLoader';
import { CATEGORY_META } from '../data';

// Geocoding results are cached across the whole session so switching day
// tabs back and forth never re-hits the Geocoding API for the same query.
const geocodeCache = new Map();

function geocode(geocoder, query) {
  if (geocodeCache.has(query)) return Promise.resolve(geocodeCache.get(query));
  return new Promise((resolve) => {
    geocoder.geocode({ address: query }, (results, status) => {
      const pos = status === 'OK' && results[0] ? { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() } : null;
      geocodeCache.set(query, pos);
      resolve(pos);
    });
  });
}

function numberedMarkerIcon(maps, color, number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
    <circle cx="15" cy="15" r="13" fill="${color}" stroke="white" stroke-width="2.5"/>
    <text x="15" y="19.5" font-size="12.5" font-weight="700" text-anchor="middle" fill="white" font-family="Arial, sans-serif">${number}</text>
  </svg>`;
  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new maps.Size(30, 30),
    anchor: new maps.Point(15, 15),
  };
}

// Standard Web Mercator projection — the same math Google's own Static Maps
// renderer uses internally. Lets us place a precisely-positioned pin overlay
// on top of the static fallback image when interactive tiles aren't
// available, using the real geocoded coordinates we already have.
const TILE_SIZE = 256;

function worldPoint(lat, lng) {
  const siny = Math.min(Math.max(Math.sin((lat * Math.PI) / 180), -0.9999), 0.9999);
  return {
    x: TILE_SIZE * (0.5 + lng / 360),
    y: TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)),
  };
}

function latLngToContainerPixel(lat, lng, center, zoom, width, height) {
  const scale = 2 ** zoom;
  const world = worldPoint(lat, lng);
  const centerWorld = worldPoint(center.lat, center.lng);
  return {
    x: (world.x - centerWorld.x) * scale + width / 2,
    y: (world.y - centerWorld.y) * scale + height / 2,
  };
}

// google.maps.Map#fitBounds() never resolves when the map is rendering the
// "for development purposes" static fallback (its center/zoom just stay at
// whatever they were initialized to), so we compute the fit ourselves with
// the same math fitBounds uses internally, and set center/zoom directly.
function latRad(lat) {
  const sin = Math.sin((lat * Math.PI) / 180);
  const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
  return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
}

function zoomForPixels(mapPx, worldPx, fraction) {
  return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
}

function fitPositions(positions, width, height, padding = 60) {
  let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity;
  positions.forEach(({ lat, lng }) => {
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
  });
  const center = { lat: (minLat + maxLat) / 2, lng: (minLng + maxLng) / 2 };

  const latFraction = (latRad(maxLat) - latRad(minLat)) / Math.PI || 0.0001;
  const lngDiffRaw = maxLng - minLng;
  const lngFraction = (lngDiffRaw < 0 ? lngDiffRaw + 360 : lngDiffRaw) / 360 || 0.0001;

  const usableWidth = Math.max(width - padding * 2, 50);
  const usableHeight = Math.max(height - padding * 2, 50);

  const latZoom = zoomForPixels(usableHeight, TILE_SIZE, latFraction);
  const lngZoom = zoomForPixels(usableWidth, TILE_SIZE, lngFraction);

  let zoom = Math.min(latZoom, lngZoom, 18);
  if (!Number.isFinite(zoom) || zoom < 1) zoom = 12;
  return { center, zoom };
}

export default function MapView({ activities, destination, focusedActivityId, onMarkerClick }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const positionsRef = useRef({});
  const [status, setStatus] = useState('loading');
  const [isFallback, setIsFallback] = useState(false);
  const [overlayPins, setOverlayPins] = useState([]);

  function checkFallbackMode() {
    if (!containerRef.current) return;
    setIsFallback(containerRef.current.innerHTML.includes('StaticMapService'));
  }

  function recomputeOverlay() {
    if (!mapRef.current || !containerRef.current) return;
    const center = mapRef.current.getCenter();
    const zoom = mapRef.current.getZoom();
    if (!center || zoom == null) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerObj = { lat: center.lat(), lng: center.lng() };
    const pins = activities
      .map((act, i) => {
        const pos = positionsRef.current[act.id];
        if (!pos) return null;
        const { x, y } = latLngToContainerPixel(pos.lat, pos.lng, centerObj, zoom, rect.width, rect.height);
        return { id: act.id, number: i + 1, x, y, color: CATEGORY_META[act.category].color, name: act.name };
      })
      .filter(Boolean);
    setOverlayPins(pins);
  }

  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then((maps) => {
        if (cancelled || !containerRef.current) return;
        mapRef.current = new maps.Map(containerRef.current, {
          center: { lat: 20, lng: 0 },
          zoom: 2,
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: false,
        });
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
    const onResize = () => recomputeOverlay();
    window.addEventListener('resize', onResize);
    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status !== 'ready' || !mapRef.current || !window.google) return;
    const maps = window.google.maps;
    const geocoder = new maps.Geocoder();
    let cancelled = false;

    Object.values(markersRef.current).forEach((m) => m.setMap(null));
    markersRef.current = {};
    positionsRef.current = {};

    async function placeMarkers() {
      const bounds = new maps.LatLngBounds();
      let placed = 0;
      for (let i = 0; i < activities.length; i++) {
        const act = activities[i];
        const pos = await geocode(geocoder, `${act.name}, ${destination}`);
        if (cancelled || !pos) continue;
        positionsRef.current[act.id] = pos;
        const meta = CATEGORY_META[act.category];
        const marker = new maps.Marker({
          position: pos,
          map: mapRef.current,
          icon: numberedMarkerIcon(maps, meta.color, i + 1),
          title: act.name,
        });
        marker.addListener('click', () => onMarkerClick(act.id));
        markersRef.current[act.id] = marker;
        bounds.extend(pos);
        placed++;
      }
      if (cancelled) return;
      if (placed > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const positions = Object.values(positionsRef.current);
        if (placed === 1) {
          mapRef.current.setCenter(positions[0]);
          mapRef.current.setZoom(14);
        } else {
          const { center, zoom } = fitPositions(positions, rect.width, rect.height);
          mapRef.current.setCenter(center);
          mapRef.current.setZoom(zoom);
        }
      } else {
        const destPos = await geocode(geocoder, destination);
        if (!cancelled && destPos) {
          mapRef.current.setCenter(destPos);
          mapRef.current.setZoom(12);
        }
      }
      setTimeout(() => {
        if (cancelled) return;
        checkFallbackMode();
        recomputeOverlay();
      }, 400);
    }
    placeMarkers();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, activities, destination, onMarkerClick]);

  useEffect(() => {
    if (!focusedActivityId || !markersRef.current[focusedActivityId] || !mapRef.current || !window.google) return;
    // setCenter (not panTo) — panTo animates and, like fitBounds, never
    // actually completes when rendering the static fallback.
    mapRef.current.setCenter(markersRef.current[focusedActivityId].getPosition());
    mapRef.current.setZoom(16);
    setTimeout(() => recomputeOverlay(), 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedActivityId]);

  if (status === 'error') {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A8072', fontSize: 13, textAlign: 'center', padding: 24 }}>
        Map unavailable — check that the Google Maps API key is set and has the Maps JavaScript API and Geocoding API enabled.
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      {isFallback &&
        overlayPins.map((pin) => (
          <div
            key={pin.id}
            onClick={() => onMarkerClick(pin.id)}
            title={pin.name}
            style={{
              position: 'absolute',
              left: pin.x - 13,
              top: pin.y - 13,
              width: 26,
              height: 26,
              borderRadius: '50%',
              background: pin.color,
              color: '#fff',
              fontSize: 11.5,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2.5px solid #fff',
              boxShadow: pin.id === focusedActivityId ? `0 0 0 3px ${pin.color}66` : '0 1px 4px rgba(0,0,0,0.3)',
              cursor: 'pointer',
            }}
          >
            {pin.number}
          </div>
        ))}
    </div>
  );
}
