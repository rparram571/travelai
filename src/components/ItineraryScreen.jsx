import { CATEGORY_META } from '../data';
import HotelsPanel from './HotelsPanel';
import MapView from './MapView';
import { hasGoogleMapsKey } from '../googleMapsLoader';

export default function ItineraryScreen({
  trip, activeDay, selectDay, goHome, openMembers, openActivity, focusMapOn, mapFocusId, showAddedByTags,
  tripSection, setTripSection, openHotelImport, addSuggestedHotel,
}) {
  const soloTrip = trip.members.length <= 1;
  const avatarStack = trip.members
    .filter((m) => m.status === 'joined')
    .slice(0, 3);

  const dayTabs = Array.from({ length: trip.dayCount }, (_, i) => i + 1);
  const rawDayActs = trip.activities.filter((a) => a.day === activeDay);
  const memberMap = {};
  trip.members.forEach((m) => (memberMap[m.id] = m.name));

  const focusedActivity = mapFocusId ? rawDayActs.find((a) => a.id === mapFocusId) : null;
  const mapHint = focusedActivity ? `Showing: ${focusedActivity.name}` : 'Showing city overview — tap a numbered pin to locate a stop';
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(trip.destination)}&z=13&output=embed`;

  return (
    <div className="screen-pad" style={{ animation: 'riseIn 0.3s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <button
          onClick={goHome}
          style={{ border: 'none', background: '#F1E8D8', width: 34, height: 34, borderRadius: 11, fontSize: 16, color: '#33404A', cursor: 'pointer', flexShrink: 0 }}
        >
          ‹
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 600, color: '#1E2C38' }}>{trip.title}</div>
          <div style={{ fontSize: 12.5, color: '#8A8072' }}>{trip.dateLabel}</div>
        </div>
        <div onClick={openMembers} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexShrink: 0 }}>
          {soloTrip ? (
            <div style={{ background: '#F1E8D8', color: '#1E2C38', fontSize: 12.5, fontWeight: 700, padding: '9px 14px', borderRadius: 12 }}>Invite</div>
          ) : (
            <div style={{ display: 'flex' }}>
              {avatarStack.map((m, i) => (
                <div
                  key={m.id}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: m.color,
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: i === 0 ? 0 : -8,
                    border: '2px solid #fff',
                  }}
                >
                  {m.initials}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', background: '#F1E8D8', borderRadius: 12, padding: 4, marginBottom: 20, width: '100%', maxWidth: 240 }}>
        {[{ id: 'itinerary', label: 'Itinerary' }, { id: 'hotels', label: 'Hotels' }].map((tab) => {
          const active = tripSection === tab.id;
          return (
            <div
              key={tab.id}
              onClick={() => setTripSection(tab.id)}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '8px',
                borderRadius: 9,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                ...(active ? { background: '#fff', color: '#1E2C38', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' } : { color: '#8A8072' }),
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>

      {tripSection === 'hotels' && <HotelsPanel trip={trip} openHotelImport={openHotelImport} addSuggestedHotel={addSuggestedHotel} />}

      {tripSection === 'itinerary' && (
        <>
      <div style={{ display: 'flex', gap: 6, marginBottom: 20, overflowX: 'auto', paddingBottom: 2 }}>
        {dayTabs.map((n) => {
          const active = activeDay === n;
          return (
            <div
              key={n}
              onClick={() => selectDay(n)}
              style={{
                padding: '8px 16px',
                borderRadius: 11,
                fontSize: 13,
                fontWeight: 700,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                flexShrink: 0,
                ...(active ? { background: '#1E2C38', color: '#fff' } : { background: '#F1E8D8', color: '#8A8072' }),
              }}
            >
              Day {n}
            </div>
          );
        })}
      </div>

      <div className="itinerary-columns">
        <div className="itinerary-activity-col">
          {rawDayActs.map((a, i) => {
            const meta = CATEGORY_META[a.category];
            const showAddedBy = showAddedByTags && trip.members.length > 1;
            return (
              <div
                key={a.id}
                onClick={() => openActivity(trip.id, a.id)}
                style={{ background: '#fff', borderRadius: 16, padding: '14px 15px', marginBottom: 10, border: '1px solid #F0E9DC', cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 70, flexShrink: 0 }}>
                    <div
                      onClick={(e) => focusMapOn(a.id, e)}
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        color: '#fff',
                        fontSize: 11,
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        cursor: 'pointer',
                        boxShadow: mapFocusId === a.id ? `0 0 0 3px ${meta.color}55` : 'none',
                        background: meta.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#8A8072', textAlign: 'center' }}>{a.time}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1E2C38', lineHeight: 1.35 }}>{a.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 700, color: meta.color, background: `${meta.color}1A`, padding: '3px 8px', borderRadius: 7 }}>
                        {meta.label}
                      </div>
                      {a.cost > 0 && <div style={{ fontSize: 12, color: '#8A8072' }}>${a.cost}</div>}
                    </div>
                    {showAddedBy && (
                      <div style={{ fontSize: 11, color: '#A79E8F', marginTop: 5 }}>Added by {memberMap[a.addedBy] || 'You'}</div>
                    )}
                    {a.bookingUrl && (
                      <a
                        href={a.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#E0663F', textDecoration: 'none', marginTop: 6 }}
                      >
                        View on Booking.com ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {rawDayActs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 10px', color: '#A79E8F', fontSize: 13 }}>No activities yet for this day.</div>
          )}
        </div>

        <div style={{ flex: 1, position: 'sticky', top: 0 }}>
          <div style={{ position: 'relative', height: 460, borderRadius: 20, overflow: 'hidden', border: '1px solid #F0E9DC', background: '#EFF6F3' }}>
            {hasGoogleMapsKey() ? (
              <MapView activities={rawDayActs} destination={trip.destination} focusedActivityId={mapFocusId} onMarkerClick={(id) => focusMapOn(id)} />
            ) : (
              <iframe src={mapEmbedUrl} style={{ width: '100%', height: '100%', border: 0 }} loading="lazy" title="Trip map"></iframe>
            )}
          </div>
          <div style={{ fontSize: 12, color: '#A79E8F', marginTop: 10 }}>{mapHint}</div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}
