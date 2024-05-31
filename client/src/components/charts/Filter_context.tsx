import React from "react";

interface OverTime {
  date: string;
  total_count: number;
  locationCounts: { id: number; count: number }[];
  deviceCounts: { id: number; count: number }[];
  referrerCounts: { id: number; count: number }[];
}
const FilteredDataContext = React.createContext<OverTime[]>([]);

export default FilteredDataContext;
