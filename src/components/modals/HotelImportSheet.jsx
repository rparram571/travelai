export default function HotelImportSheet({ importState, importText, onImportTextChange, parseImport, extractedHotel, confirmImport, stop }) {
  return (
    <div
      onClick={stop}
      style={{
        background: '#FAF5EC',
        borderRadius: 20,
        padding: 26,
        width: 'min(440px, calc(100vw - 48px))',
        maxHeight: '80%',
        overflow: 'auto',
        animation: 'modalUp 0.22s ease both',
      }}
    >
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 600, color: '#1E2C38', marginBottom: 16 }}>Import hotel reservation</div>

      {importState === 'idle' && (
        <>
          <textarea
            value={importText}
            onChange={onImportTextChange}
            placeholder="Paste your booking confirmation email here…"
            rows={5}
            style={{
              width: '100%',
              border: '1.5px solid #EAE1CF',
              background: '#fff',
              borderRadius: 14,
              padding: '13px 14px',
              fontSize: 13.5,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              marginBottom: 16,
              resize: 'none',
            }}
          ></textarea>
          <button
            onClick={parseImport}
            style={{ width: '100%', border: 'none', background: '#E0663F', color: '#fff', fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 14, cursor: 'pointer' }}
          >
            Parse email
          </button>
        </>
      )}

      {importState === 'parsing' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 0' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '3px solid #F1E8D8',
              borderTopColor: '#E0663F',
              animation: 'spin 0.9s linear infinite',
              marginBottom: 16,
            }}
          ></div>
          <div style={{ fontSize: 13, color: '#8A8072' }}>Extracting reservation details…</div>
        </div>
      )}

      {importState === 'done' && extractedHotel && (
        <>
          <div style={{ background: '#fff', borderRadius: 16, padding: 16, marginBottom: 16, border: '1px solid #F0E9DC' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#2F8F82', marginBottom: 10 }}>✓ Reservation found</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1E2C38', marginBottom: 4 }}>{extractedHotel.name}</div>
            <div style={{ fontSize: 13, color: '#33404A' }}>
              {extractedHotel.area} &middot; {extractedHotel.nights} nights &middot; ${extractedHotel.pricePerNight}/night
            </div>
            <div style={{ fontSize: 12, color: '#8A8072', marginTop: 6 }}>Conf. {extractedHotel.confirmation}</div>
          </div>
          <button
            onClick={confirmImport}
            style={{ width: '100%', border: 'none', background: '#E0663F', color: '#fff', fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 14, cursor: 'pointer' }}
          >
            Add to trip
          </button>
        </>
      )}
    </div>
  );
}
