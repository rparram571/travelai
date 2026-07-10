export default function TripsHome({ trips, openTrip }) {
  return (
    <div className="screen-pad" style={{ animation: 'riseIn 0.3s ease both' }}>
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 600, color: '#1E2C38', marginBottom: 4 }}>Your Trips</div>
      <div style={{ fontSize: 14, color: '#8A8072', marginBottom: 28 }}>Plans, alerts &amp; group chats, all in one place</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
        {trips.map((t) => {
          const joined = t.members.filter((m) => m.status === 'joined');
          const stack = joined.slice(0, 3);
          const extraCount = Math.max(0, joined.length - 3);
          return (
            <div
              key={t.id}
              onClick={() => openTrip(t.id)}
              style={{
                background: '#FFFFFF',
                borderRadius: 20,
                padding: 20,
                boxShadow: '0 2px 10px rgba(30,44,56,0.06)',
                cursor: 'pointer',
                border: '1px solid #F0E9DC',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 600, color: '#1E2C38' }}>{t.title}</div>
                  <div style={{ fontSize: 13, color: '#8A8072', marginTop: 3 }}>
                    {t.destination} &middot; {t.dateLabel}
                  </div>
                </div>
                <div style={{ background: '#F1E8D8', color: '#33404A', fontSize: 11, fontWeight: 700, padding: '5px 9px', borderRadius: 8 }}>{t.dayCount}d</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 18 }}>
                <div style={{ display: 'flex' }}>
                  {stack.map((m, i) => (
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
                {extraCount > 0 && <div style={{ fontSize: 12, color: '#8A8072', marginLeft: 8 }}>+{extraCount} more</div>}
                {t.generated && (
                  <div style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: '#2F8F82', background: '#E7F2F0', padding: '4px 9px', borderRadius: 8 }}>
                    AI-generated
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div style={{ background: '#F1E8D8', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1E2C38', marginBottom: 6 }}>Plan your next trip in seconds</div>
          <div style={{ fontSize: 13, color: '#7C7264', lineHeight: 1.5 }}>
            Tell the AI where you're headed, your budget and vibe — get a full day-by-day itinerary, optimized for less backtracking.
          </div>
        </div>
      </div>
    </div>
  );
}
