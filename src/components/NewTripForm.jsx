const STYLE_OPTIONS = ['luxury', 'budget', 'adventure', 'cultural'];
const INTEREST_OPTIONS = ['art', 'food', 'nature', 'nightlife', 'history', 'sports', 'shopping'];

const label = { fontSize: 12, fontWeight: 700, color: '#8A8072', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 8 };
const cap = (s) => s[0].toUpperCase() + s.slice(1);

export default function NewTripForm({ form, backFromForm, onDestinationChange, onDaysChange, onBudgetChange, setStyle, toggleInterest, startGenerate }) {
  const generateDisabled = !form.destination.trim();

  return (
    <div style={{ padding: '36px 44px', animation: 'riseIn 0.3s ease both', maxWidth: 560 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
        <button
          onClick={backFromForm}
          style={{ border: 'none', background: '#F1E8D8', width: 34, height: 34, borderRadius: 11, fontSize: 16, color: '#33404A', cursor: 'pointer' }}
        >
          ‹
        </button>
        <div style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 600, color: '#1E2C38' }}>Generate an itinerary</div>
      </div>

      <div style={label}>Destination</div>
      <input
        value={form.destination}
        onChange={onDestinationChange}
        placeholder="Where do you want to go?"
        style={{
          width: '100%',
          border: '1.5px solid #EAE1CF',
          background: '#fff',
          borderRadius: 14,
          padding: '13px 14px',
          fontSize: 15,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          color: '#1E2C38',
          marginBottom: 20,
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={label}>Trip length</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#E0663F' }}>{form.days} days</div>
      </div>
      <input type="range" min={2} max={15} step={1} value={form.days} onChange={onDaysChange} style={{ width: '100%', marginBottom: 20 }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={label}>Budget</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#E0663F' }}>${form.budget}</div>
      </div>
      <input type="range" min={200} max={10000} step={100} value={form.budget} onChange={onBudgetChange} style={{ width: '100%', marginBottom: 22 }} />

      <div style={label}>Travel style</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
        {STYLE_OPTIONS.map((name) => {
          const active = form.style === name;
          return (
            <div
              key={name}
              onClick={() => setStyle(name)}
              style={{
                padding: '9px 14px',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                ...(active ? { background: '#1E2C38', color: '#fff' } : { background: '#fff', color: '#33404A', border: '1.5px solid #EAE1CF' }),
              }}
            >
              {cap(name)}
            </div>
          );
        })}
      </div>

      <div style={label}>Interests</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 30 }}>
        {INTEREST_OPTIONS.map((name) => {
          const active = form.interests.includes(name);
          return (
            <div
              key={name}
              onClick={() => toggleInterest(name)}
              style={{
                padding: '9px 14px',
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                ...(active ? { background: '#E0663F', color: '#fff' } : { background: '#fff', color: '#33404A', border: '1.5px solid #EAE1CF' }),
              }}
            >
              {cap(name)}
            </div>
          );
        })}
      </div>

      <button
        onClick={startGenerate}
        disabled={generateDisabled}
        style={{
          width: '100%',
          border: 'none',
          color: '#fff',
          fontWeight: 700,
          fontSize: 15,
          padding: 15,
          borderRadius: 16,
          cursor: generateDisabled ? 'not-allowed' : 'pointer',
          background: generateDisabled ? '#E7C9BA' : '#E0663F',
          boxShadow: generateDisabled ? 'none' : '0 8px 18px rgba(224,102,63,0.3)',
        }}
      >
        Generate Itinerary
      </button>
    </div>
  );
}
