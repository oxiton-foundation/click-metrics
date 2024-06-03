import FilteredDataContext from "./Filter_context";
import { useContext } from "react";
import { Chart } from "react-google-charts";
import overTime from "./chart_data.json";

interface GeoChartProps {
  className: string;
}

const GeoChart: React.FC<GeoChartProps> = ({ className }) => {
  const filtered_Data = useContext(FilteredDataContext);
  const id1 = filtered_Data
    .map((item) => item.locationCounts[0].count)
    .reduce((a, b) => a + b, 0);
  const id2 = filtered_Data
    .map((item) => item.locationCounts[1].count)
    .reduce((a, b) => a + b, 0);
  const id3 = filtered_Data
    .map((item) => item.locationCounts[2].count)
    .reduce((a, b) => a + b, 0);
  const id4 = filtered_Data
    .map((item) => item.locationCounts[3].count)
    .reduce((a, b) => a + b, 0);
  const id5 = filtered_Data
    .map((item) => item.locationCounts[4].count)
    .reduce((a, b) => a + b, 0);
  const id6 = filtered_Data
    .map((item) => item.locationCounts[5].count)
    .reduce((a, b) => a + b, 0);
  const id7 = filtered_Data
    .map((item) => item.locationCounts[6].count)
    .reduce((a, b) => a + b, 0);
  const id8 = filtered_Data
    .map((item) => item.locationCounts[7].count)
    .reduce((a, b) => a + b, 0);
  const id9 = filtered_Data
    .map((item) => item.locationCounts[8].count)
    .reduce((a, b) => a + b, 0);
  const id10 = filtered_Data
    .map((item) => item.locationCounts[9].count)
    .reduce((a, b) => a + b, 0);

  let data;

  if (filtered_Data.length > 0) {
    data = [
      ["Country", "Clicks"],
      [overTime.locations[0].name, id1],
      [overTime.locations[1].name, id2],
      [overTime.locations[2].name, id3],
      [overTime.locations[3].name, id4],
      [overTime.locations[4].name, id5],
      [overTime.locations[5].name, id6],
      [overTime.locations[6].name, id7],
      [overTime.locations[7].name, id8],
      [overTime.locations[8].name, id9],
      [overTime.locations[9].name, id10],
    ];
  } else {
    data = [
      ["Country", "Clicks"],
      [overTime.locations[0].name, 0],
      [overTime.locations[1].name, 0],
      [overTime.locations[2].name, 0],
      [overTime.locations[3].name, 0],
      [overTime.locations[4].name, 0],
      [overTime.locations[5].name, 0],
      [overTime.locations[6].name, 0],
      [overTime.locations[7].name, 0],
      [overTime.locations[8].name, 0],
      [overTime.locations[9].name, 0],
    ];
  }
  const sum = id1 + id2 + id3 + id4 + id5 + id6 + id7 + id8 + id9 + id10;

  const options = {
    title: "Total Clicks + Scans by Location-" + sum.toString(),
  };

  return (
    <div className={className}>
      <h4 className="text-center text-xl font-bold">
        Total Clicks + Scans by Location
      </h4>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};
export default GeoChart;
