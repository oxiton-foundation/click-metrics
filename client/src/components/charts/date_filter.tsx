import React, { useState, useEffect, ReactNode } from "react";
import data from "../charts/chart_data.json";
import FilteredDataContext from "./Filter_context";
import { Button } from "@/components/ui/button";

interface OverTime {
  date: string;
  total_count: number;
  locationCounts: { id: number; count: number }[];
  deviceCounts: { id: number; count: number }[];
  referrerCounts: { id: number; count: number }[];
}
interface DateFilterProps {
  children: ReactNode;
  className: string;
}

const DateFilter: React.FC<DateFilterProps> = ({ children, className }) => {
  const [start_date, set_start_date] = useState(
    new Date(data.overTime[0].date)
  );
  const [end_date, set_end_date] = useState(
    new Date(data.overTime[data.overTime.length - 1].date)
  );

  const [filteredData, setFilteredData] = useState<OverTime[]>(data.overTime);

  useEffect(() => {
    const filteredData = data.overTime.filter((item) => {
      const date = new Date(item.date);
      return date >= start_date && date <= end_date;
    });
    setFilteredData(filteredData);
  }, [start_date, end_date]);

  // console.log(filteredData)

  return (
    <FilteredDataContext.Provider value={filteredData}>
      <div className={className}>
        <input
          type="date"
          min={data.overTime[0].date}
          max={data.overTime[data.overTime.length - 1].date}
          value={start_date.toISOString().split("T")[0]}
          onChange={(e) => set_start_date(new Date(e.target.value))}
          className="bg-[#262d3f] bg-opacity-10 px-3 py-2"
        />

        <input
          type="date"
          min={data.overTime[0].date}
          max={data.overTime[data.overTime.length - 1].date}
          value={end_date.toISOString().split("T")[0]}
          onChange={(e) => set_end_date(new Date(e.target.value))}
          className="bg-[#262d3f] bg-opacity-10 px-3 py-2"
        />

        <Button className="bg-transparent hover:bg-transparent text-[#636466]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          Add filters
        </Button>
        <p className="text-[#007c8c] text-sm ml-5">
          Showing Data for all links and QR Codes
        </p>
      </div>
      {children}
    </FilteredDataContext.Provider>
  );
};

export default DateFilter;
