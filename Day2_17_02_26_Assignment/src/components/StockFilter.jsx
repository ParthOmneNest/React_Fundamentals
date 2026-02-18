import Papa from "papaparse";
import stock_data from "../utils/stock_data.csv?raw";
import { Filter } from "./Sort&Filter/Filter";
import { Logic } from "./Sort&Filter/Logic";
import { StockCard } from "./StockCard";

export const StockFilter = () => {
  const { data } = Papa.parse(stock_data, {
    header: true,
    dynamicTyping: true,
  });

  // take all thw values from the logic written
  const [
    dateRange,
    setDateRange,
    priceRange,
    setPriceRange,
    minVolumeRange,
    setMinVolumeRange,
    filteredData,
  ] = Logic(data);

  return (
    <>
      <h1 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "24px" }}>
        Stock Filter
      </h1>

      <Filter
        dateRange={dateRange}
        setDateRange={setDateRange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minVolumeRange={minVolumeRange}
        setMinVolumeRange={setMinVolumeRange}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredData.map((item) => (
          <StockCard key={item.Date} data={item} />
        ))}
      </div>
    </>
  );
};