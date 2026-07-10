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
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 12, color: '#A79E8F' }}>${h.pricePerNight}/night</div>
                <div style={{ fontSize: 12, color: '#A79E8F' }}>{h.nights} nights</div>
                {h.confirmation && <div style={{ fontSize: 12, color: '#A79E8F' }}>Conf. {h.confirmation}</div>}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ fontSize: 12, fontWeight: 700, color: '#8A8072', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
        Suggested for your budget
      </div>
      <div style={{ fontSize: 12.5, color: '#7C7264', marginBottom: 14 }}>
        Based on roughly 40% of your trip budget going toward lodging.
      </div>

      {suggestions.map((s) => (
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
                {s.tierLabel} &middot; {s.area} &middot; {s.rating}★
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1E2C38', whiteSpace: 'nowrap' }}>${s.pricePerNight}<span style={{ fontSize: 11, fontWeight: 600, color: '#8A8072' }}>/night</span></div>
          </div>
          <button
            onClick={() => addSuggestedHotel(s)}
            style={{
              marginTop: 12,
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
        </div>
      ))}
    </div>
  );
}
