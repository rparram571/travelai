export default function Sidebar({ tab, goToTrips, goToFlights, goToGuide, openForm }) {
  const navBase = { background: 'transparent' };
  const tripsNavStyle = { ...navBase, ...(tab === 'trips' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };
  const flightsNavStyle = { ...navBase, ...(tab === 'flights' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };
  const guideNavStyle = { ...navBase, ...(tab === 'guide' ? { background: '#fff', color: '#1E2C38' } : { color: '#8A8072' }) };

  return (
    <div className="app-sidebar" style={{ background: '#F1E8D8', borderRight: '1px solid #E7DBC2' }}>
      <div className="app-brand">TravelAI</div>
      <div className="app-nav-item" onClick={goToTrips} style={tripsNavStyle}>
        Trips
      </div>
      <div className="app-nav-item" onClick={goToFlights} style={flightsNavStyle}>
        Flights
      </div>
      <div className="app-nav-item" onClick={goToGuide} style={guideNavStyle}>
        Guide
      </div>
      <button
        className="app-new-trip-btn"
        onClick={openForm}
        style={{
          border: 'none',
          background: '#E0663F',
          color: '#fff',
          fontWeight: 700,
          borderRadius: 12,
          boxShadow: '0 6px 14px rgba(224,102,63,0.3)',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        + New Trip
      </button>
      <div className="app-sidebar-footer">
        <div style={{ fontSize: 11.5, color: '#A79E8F', padding: '0 8px' }}>Signed in as You</div>
      </div>
    </div>
  );
}
