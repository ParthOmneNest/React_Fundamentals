export const InOutStockFilter = ({ inStockOnly, setInStockOnly }) => {
  return (
    <div style={{
      marginBottom: '20px',
      padding: '15px',
      background: '#f5f5f5',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    }}>
      <span style={{ fontWeight: 'bold' }}>Availability:</span>
      
      <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => setInStockOnly(e.target.checked)}
          style={{ width: '18px', height: '18px' }}
        />
        Show In-Stock Only
      </label>

      <span style={{ fontSize: '0.9rem', color: '#666' }}>
        {inStockOnly ? "(Filtering Out-of-Stock)" : "(Showing All)"}
      </span>
    </div>
  );
};
