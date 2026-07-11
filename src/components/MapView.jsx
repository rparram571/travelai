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

export default function MapView({ activities, destination, focusedActivityId, onMarkerClick }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const [status, setStatus] = useState('loading');

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
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (status !== 'ready' || !mapRef.current || !window.google) return;
    const maps = window.google.maps;
    const geocoder = new maps.Geocoder();
    let cancelled = false;

    Object.values(markersRef.current).forEach((m) => m.setMap(null));
    markersRef.current = {};

    async function placeMarkers() {
      const bounds = new maps.LatLngBounds();
      let placed = 0;
      for (let i = 0; i < activities.length; i++) {
        const act = activities[i];
        const pos = await geocode(geocoder, `${act.name}, ${destination}`);
        if (cancelled || !pos) continue;
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
        mapRef.current.fitBounds(bounds, 60);
        if (placed === 1) mapRef.current.setZoom(14);
      } else {
        const destPos = await geocode(geocoder, destination);
        if (!cancelled && destPos) {
          mapRef.current.setCenter(destPos);
          mapRef.current.setZoom(12);
        }
      }
    }
    placeMarkers();
    return () => {
      cancelled = true;
    };
  }, [status, activities, destination, onMarkerClick]);

  useEffect(() => {
    if (!focusedActivityId || !markersRef.current[focusedActivityId] || !mapRef.current) return;
    mapRef.current.panTo(markersRef.current[focusedActivityId].getPosition());
    mapRef.current.setZoom(16);
  }, [focusedActivityId]);

  if (status === 'error') {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8A8072', fontSize: 13, textAlign: 'center', padding: 24 }}>
        Map unavailable — check that the Google Maps API key is set and has the Maps JavaScript API and Geocoding API enabled.
      </div>
    );
  }

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
