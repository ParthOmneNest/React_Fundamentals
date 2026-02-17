export const StockCard = ({ data }) => {

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "12px",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontSize: "14px",
        margin: "8px",
      }}
    >
      <div style={{ fontWeight: "bold" }}>{data.Date}</div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Open: {data.Open}</span>
        <span>Close: {data.Close}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Low: {data.Low}</span>
        <span>High: {data.High}</span>
      </div>

      <div>Adj Close: {data.Adj_Close}</div>

      <div>Volume: {data.Volume}</div>
    </div>
  );
};
