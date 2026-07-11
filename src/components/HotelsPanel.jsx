import { suggestHotels } from '../hotelData';

export default function HotelsPanel({ trip, openHotelImport, addSuggestedHotel }) {
  const suggestions = suggestHotels(trip);

  return (
    <div>
      <div onClick={openHotelImport} style={{ background: '#F1E8D8', borderRadius: 16, padding: '16px 18px', marginBottom: 20, cursor: 'pointer' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1E2C38', marginBottom: 3 }}>Import a reservation</div>
        <div style={{ fontSize: 12.5, color: '#7C7264', lineHeight: 1.4 }}>
          Forward a confirmation email or paste one to import your hotel booking automatically.
        </div>
      </div>

      {trip.hotels.length > 0 && (
        <div style={{ marginBottom: 26 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8072', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 10 }}>
            Your hotels
          </div>
          {trip.hotels.map((h) => (
            <div key={h.id} style={{ background: '#fff', borderRadius: 18, padding: 18, marginBottom: 12, border: '1px solid #F0E9DC' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#1E2C38', marginBottom: 3 }}>{h.name}</div>
              <div style={{ fontSize: 12.5, color: '#8A8072', marginBottom: 10 }}>{h.area}</div>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 12, color: '#A79E8F' }}>${h.pricePerNight}/night</div>
                <div style={{ fontSize: 12, color: '#A79E8F' }}>{h.nights} nights</div>
                {h.confirmation && <div style={{ fontSize: 12, color: '#A79E8F' }}>Conf. {h.confirmation}</div>}
                {h.url && (
                  <a href={h.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#E0663F', fontWeight: 700, textDecoration: 'none' }}>
                    View on Booking.com ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8072', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
        Suggested for your budget
      </div>
      <div style={{ fontSize: 12.5, color: '#7C7264', marginBottom: 14 }}>
        Real Booking.com listings &middot; based on roughly 40% of your trip budget going toward lodging.
      </div>

      {suggestions.map((s) =>
        s.isSearchLink ? (
          <div key={s.id} style={{ background: '#fff', borderRadius: 18, padding: 18, marginBottom: 12, border: '1px solid #F0E9DC' }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#1E2C38', marginBottom: 6 }}>No pre-verified listings for {s.city} yet</div>
            <div style={{ fontSize: 12.5, color: '#7C7264', lineHeight: 1.5, marginBottom: 14 }}>
              Rather than guess, search real current availability and prices on Booking.com.
            </div>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                border: 'none',
                background: '#E0663F',
                color: '#fff',
                fontWeight: 700,
                fontSize: 12.5,
                padding: '9px 14px',
                borderRadius: 11,
                textDecoration: 'none',
              }}
            >
              Search hotels in {s.city} on Booking.com ↗
            </a>
          </div>
        ) : (
          <div
            key={s.id}
            style={{
              background: '#fff',
              borderRadius: 18,
              padding: 18,
              marginBottom: 12,
              border: s.recommended ? '1.5px solid #2F8F82' : '1px solid #F0E9DC',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#1E2C38' }}>{s.name}</div>
                  {s.recommended && (
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: '#2F8F82', background: '#E7F2F0', padding: '3px 8px', borderRadius: 7 }}>
                      Matches your budget
                    </div>
                  )}
                </div>
                <div style={{ fontSize: 12.5, color: '#8A8072' }}>
                  {s.tierLabel} &middot; {s.area} &middot; {s.rating}/10
                </div>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#1E2C38', whiteSpace: 'nowrap' }}>${s.pricePerNight}<span style={{ fontSize: 11, fontWeight: 600, color: '#8A8072' }}>/night</span></div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button
                onClick={() => addSuggestedHotel(s)}
                style={{
                  border: 'none',
                  background: '#F1E8D8',
                  color: '#1E2C38',
                  fontWeight: 700,
                  fontSize: 12.5,
                  padding: '9px 14px',
                  borderRadius: 11,
                  cursor: 'pointer',
                }}
              >
                Add to trip
              </button>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: '#33404A',
                  textDecoration: 'none',
                  padding: '9px 4px',
                }}
              >
                View on Booking.com ↗
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}
