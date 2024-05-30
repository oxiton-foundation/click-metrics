import React, { useState, useEffect, ReactNode } from 'react';
import data from "../charts/chart_data.json"
import FilteredDataContext from './Filter_context';

interface OverTime {
  date: string;
  total_count: number;
  locationCounts: { id: number; count: number; }[];
  deviceCounts: { id: number; count: number; }[];
  referrerCounts: { id: number; count: number; }[];
}
interface DateFilterProps {
  children: ReactNode;
  className: string;
}

const DateFilter: React.FC<DateFilterProps>=({children,className}) => {
  const [start_date, set_start_date] = useState(new Date(data.overTime[0].date));
  const [end_date, set_end_date] = useState(new Date(data.overTime[data.overTime.length - 1].date));

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
            value={start_date.toISOString().split('T')[0]}
            onChange={(e) => set_start_date(new Date(e.target.value))}></input>
        
        <input
                type="date"
                min={data.overTime[0].date}
                max={data.overTime[data.overTime.length - 1].date}
                value={end_date.toISOString().split('T')[0]}
                onChange={(e) => set_end_date(new Date(e.target.value))}></input>
    </div>
    {children}
   </FilteredDataContext.Provider>
  );
};

export default DateFilter; 
// Hi Jyayasi this side, Janhavi Slept
// No problem i know this is looking pretty messy ill explain this later to her