export default function Sidebar({ tab, goToTrips, goToFlights, goToGuide, openForm }) {
  const navBase = {
    padding: '10px 12px',
    borderRadius: 11,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    marginBottom: 4,
  };
  const tripsNavStyle = { ...navBase, ...(tab === 'trips' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };
  const flightsNavStyle = { ...navBase, ...(tab === 'flights' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };
  const guideNavStyle = { ...navBase, ...(tab === 'guide' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };

  return (
    <div
      style={{
        width: 220,
        flexShrink: 0,
        background: '#F1E8D8',
        padding: '22px 16px',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #E7DBC2',
      }}
    >
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 600, color: '#1E2C38', padding: '0 8px 26px' }}>TravelAI</div>
      <div onClick={goToTrips} style={tripsNavStyle}>
        Trips
      </div>
      <div onClick={goToFlights} style={flightsNavStyle}>
        Flights
      </div>
      <div onClick={goToGuide} style={guideNavStyle}>
        Guide
      </div>
      <button
        onClick={openForm}
        style={{
          marginTop: 20,
          border: 'none',
          background: '#E0663F',
          color: '#fff',
          fontWeight: 700,
          fontSize: 13.5,
          padding: '11px 14px',
          borderRadius: 12,
          boxShadow: '0 6px 14px rgba(224,102,63,0.3)',
          cursor: 'pointer',
        }}
      >
        + New Trip
      </button>
      <div style={{ flex: 1 }}></div>
      <div style={{ fontSize: 11.5, color: '#A79E8F', padding: '0 8px' }}>Signed in as You</div>
    </div>
  );
}
