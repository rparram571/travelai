import { CATEGORY_META } from '../../data';

export default function ActivitySheet({ activity, editDraft, onEditTimeChange, onEditCostChange, onEditNotesChange, saveActivityEdit, deleteActivity, deleteDisabled, stop }) {
  const meta = CATEGORY_META[activity.category];
  const inputStyle = {
    width: '100%',
    border: '1.5px solid #EAE1CF',
    background: '#fff',
    borderRadius: 12,
    padding: '11px 13px',
    fontSize: 14,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    marginBottom: 14,
  };
  const fieldLabel = { fontSize: 11, fontWeight: 700, color: '#8A8072', textTransform: 'uppercase', marginBottom: 6 };

  return (
    <div
      onClick={stop}
      style={{
        background: '#FAF5EC',
        borderRadius: 20,
        padding: 26,
        width: 420,
        maxHeight: '80%',
        overflow: 'auto',
        animation: 'modalUp 0.22s ease both',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: meta.color,
          background: `${meta.color}1A`,
          padding: '4px 10px',
          borderRadius: 8,
          display: 'inline-block',
          marginBottom: 10,
        }}
      >
        {meta.label}
      </div>
      <div style={{ fontFamily: "'Newsreader',serif", fontSize: 20, fontWeight: 600, color: '#1E2C38', marginBottom: 16 }}>{activity.name}</div>

      <div style={fieldLabel}>Time</div>
      <input value={editDraft.time || ''} onChange={onEditTimeChange} style={inputStyle} />

      <div style={fieldLabel}>Estimated cost (USD)</div>
      <input value={editDraft.cost ?? ''} onChange={onEditCostChange} type="number" style={inputStyle} />

      <div style={fieldLabel}>Notes</div>
      <textarea
        value={editDraft.notes || ''}
        onChange={onEditNotesChange}
        rows={2}
        style={{ ...inputStyle, resize: 'none', marginBottom: 6 }}
      ></textarea>

      {activity.showAddedBy && <div style={{ fontSize: 11.5, color: '#A79E8F', marginBottom: 18 }}>Added by {activity.addedByName}</div>}

      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <button
          onClick={saveActivityEdit}
          style={{ flex: 1, border: 'none', background: '#E0663F', color: '#fff', fontWeight: 700, fontSize: 14, padding: 13, borderRadius: 14, cursor: 'pointer' }}
        >
          Save
        </button>
        <button
          onClick={deleteActivity}
          disabled={deleteDisabled}
          style={{
            flex: 1,
            border: '1.5px solid #EAE1CF',
            background: '#fff',
            color: deleteDisabled ? '#C9C0AE' : '#B4432A',
            fontWeight: 700,
            fontSize: 14,
            padding: 13,
            borderRadius: 14,
            cursor: deleteDisabled ? 'not-allowed' : 'pointer',
          }}
        >
          Delete
        </button>
      </div>
      {deleteDisabled && (
        <div style={{ fontSize: 11.5, color: '#A79E8F', marginTop: 10, textAlign: 'center' }}>
          Only {activity.addedByName} can delete this activity.
        </div>
      )}
    </div>
  );
}
