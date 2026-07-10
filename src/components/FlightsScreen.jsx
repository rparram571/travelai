export default function FlightsScreen({ flights, activeAlert, dismissAlert, snoozeAlert, openFlightImport, toggleFlightAlerts }) {
  return (
    <div style={{ padding: '36px 44px', animation: 'riseIn 0.3s ease both', maxWidth: 640 }}>
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 30, fontWeight: 600, color: '#1E2C38', marginBottom: 4 }}>Flights</div>
      <div style={{ fontSize: 14, color: '#8A8072', marginBottom: 22 }}>Tokyo Adventure &middot; real-time alerts on</div>

      {activeAlert && (
        <div style={{ background: '#3B5166', borderRadius: 16, padding: '16px 18px', marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#F5C87A', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>
                Flight Alert &middot; {activeAlert.time}
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>
                {activeAlert.flightNumber}: {activeAlert.message}
              </div>
            </div>
            <div onClick={dismissAlert} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, cursor: 'pointer', padding: '2px 4px' }}>
              ×
            </div>
          </div>
          <div
            onClick={snoozeAlert}
            style={{
              display: 'inline-block',
              marginTop: 10,
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              background: 'rgba(255,255,255,0.15)',
              padding: '6px 12px',
              borderRadius: 9,
              cursor: 'pointer',
            }}
          >
            Snooze 30 min
          </div>
        </div>
      )}

      <div onClick={openFlightImport} style={{ background: '#F1E8D8', borderRadius: 16, padding: '16px 18px', marginBottom: 20, cursor: 'pointer' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#1E2C38', marginBottom: 3 }}>Auto-detect a flight</div>
        <div style={{ fontSize: 12.5, color: '#7C7264', lineHeight: 1.4 }}>
          Forward a confirmation email or paste one to import flight details automatically.
        </div>
      </div>

      {flights.map((fl) => (
        <div key={fl.id} style={{ background: '#fff', borderRadius: 18, padding: 18, marginBottom: 14, border: '1px solid #F0E9DC' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: '#1E2C38' }}>
              {fl.flightNumber} &middot; {fl.airline}
            </div>
            <div
              onClick={() => toggleFlightAlerts(fl.id)}
              style={{
                width: 40,
                height: 24,
                borderRadius: 12,
                padding: 2,
                cursor: 'pointer',
                background: fl.alertsEnabled ? '#2F8F82' : '#EAE1CF',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'transform 0.15s',
                  transform: `translateX(${fl.alertsEnabled ? '16px' : '0'})`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              ></div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: '#1E2C38' }}>{fl.from}</div>
              <div style={{ fontSize: 12, color: '#8A8072' }}>{fl.departTime}</div>
            </div>
            <div style={{ flex: 1, height: 1, background: '#EAE1CF', position: 'relative', top: -8 }}></div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: '#1E2C38' }}>{fl.to}</div>
              <div style={{ fontSize: 12, color: '#8A8072' }}>{fl.arriveTime}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 14 }}>
            <div style={{ fontSize: 12, color: '#A79E8F' }}>Seat {fl.seat}</div>
            <div style={{ fontSize: 12, color: '#A79E8F' }}>Conf. {fl.confirmation}</div>
            <div style={{ fontSize: 12, color: '#A79E8F' }}>{fl.departDate}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
