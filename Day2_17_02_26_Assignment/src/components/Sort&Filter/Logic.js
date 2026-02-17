import { useState } from "react";

export const Logic = (data) => {
  //   sort by date range(from/to)
  const minDate = data.reduce(
    (min, item) => (item.Date < min ? item.Date : min),
    data[0].Date,
  );
  const maxDate = data.reduce(
    (max, item) => (item.Date > max ? item.Date : max),
    data[0].Date,
  );
  const [dateRange, setDateRange] = useState({
    from: minDate,
    to: maxDate,
  });
  //   price (low/high)
  const minPrice = data.reduce(
    (min, item) => (item.Low < min ? item.Low : min),
    data[0].Low,
  );
  const maxPrice = data.reduce(
    (max, item) => (item.High > max ? item.High : max),
    data[0].High,
  );
  const [priceRange, setPriceRange] = useState({
    low: minPrice,
    high: maxPrice,
  });

  //   minVolume
  const minVol = data.reduce(
    (min, item) => (item.Volume < min ? item.Volume : min),
    data[0].Volume,
  );

  const [minVolumeRange, setMinVolumeRange] = useState(minVol);

  const getFilteredData = (items) => {
    let copy = [...items];

    // Filter by Date
    copy = copy.filter(
      (item) => item.Date >= dateRange.from && item.Date <= dateRange.to,
    );

    // Filter by Price
    copy = copy.filter(
      (item) => item.Low >= priceRange.low && item.High <= priceRange.high,
    );

    // Filter by Volume
    copy = copy.filter((item) => item.Volume >= minVolumeRange);

    return copy;
  };

  const filteredData = getFilteredData(data);
  return [
    dateRange,
    setDateRange,
    priceRange,
    setPriceRange,
    minVolumeRange,
    setMinVolumeRange,
    filteredData,
  ];
};
