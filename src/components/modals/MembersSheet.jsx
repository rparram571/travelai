export default function MembersSheet({ trip, inviteEmail, onInviteEmailChange, sendInvite, stop }) {
  return (
    <div
      onClick={stop}
      style={{
        background: '#FAF5EC',
        borderRadius: 20,
        padding: 26,
        width: 'min(400px, calc(100vw - 48px))',
        maxHeight: '70%',
        overflow: 'auto',
        animation: 'modalUp 0.22s ease both',
      }}
    >
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 600, color: '#1E2C38', marginBottom: 16 }}>Group</div>
      {trip.members.map((m) => (
        <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0' }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: m.color,
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {m.initials}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E2C38' }}>{m.name}</div>
            <div style={{ fontSize: 11.5, color: '#A79E8F' }}>{m.role === 'organizer' ? 'Organizer' : 'Collaborator'}</div>
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 9px',
              borderRadius: 8,
              ...(m.status === 'pending' ? { background: '#F1E8D8', color: '#8A8072' } : { background: '#E7F2F0', color: '#2F8F82' }),
            }}
          >
            {m.status === 'pending' ? 'Pending' : 'Joined'}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
        <input
          value={inviteEmail}
          onChange={onInviteEmailChange}
          placeholder="friend@email.com"
          style={{
            flex: 1,
            border: '1.5px solid #EAE1CF',
            background: '#fff',
            borderRadius: 12,
            padding: '11px 13px',
            fontSize: 14,
            fontFamily: "'Plus Jakarta Sans',sans-serif",
          }}
        />
        <button
          onClick={sendInvite}
          style={{ border: 'none', background: '#E0663F', color: '#fff', fontWeight: 700, fontSize: 13, padding: '0 16px', borderRadius: 12, cursor: 'pointer' }}
        >
          Invite
        </button>
      </div>
    </div>
  );
}
