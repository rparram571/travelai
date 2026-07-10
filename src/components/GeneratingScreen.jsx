import { GEN_STEPS } from '../data';

export default function GeneratingScreen({ destination, genStep }) {
  return (
    <div style={{ padding: '80px 44px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: '3.5px solid #F1E8D8',
          borderTopColor: '#E0663F',
          animation: 'spin 0.9s linear infinite',
          marginBottom: 26,
        }}
      ></div>
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 24, fontWeight: 600, color: '#1E2C38', marginBottom: 6 }}>
        Crafting your trip to {destination}
      </div>
      <div style={{ fontSize: 13, color: '#8A8072', marginBottom: 30 }}>This usually takes a few seconds</div>
      <div style={{ width: '100%', maxWidth: 360 }}>
        {GEN_STEPS.map((label, i) => {
          const stepNum = i + 1;
          const done = genStep >= stepNum;
          const current = genStep === stepNum - 1;
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px' }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: '#fff',
                  fontWeight: 700,
                  background: done ? '#2F8F82' : '#EAE1CF',
                }}
              >
                {done ? '✓' : ''}
              </div>
              <div style={{ fontSize: 14, color: done || current ? '#1E2C38' : '#B7AD9C', fontWeight: done ? 600 : 500 }}>{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
