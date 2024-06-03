import FilteredDataContext from "./Filter_context";
import { useContext } from "react";
import { Chart } from "react-google-charts";
import overTime from "./chart_data.json";

interface PieChartProps {
  className: string;
}

const PieChart: React.FC<PieChartProps> = ({ className }) => {
  const filtered_Data = useContext(FilteredDataContext);
  const id1 = filtered_Data
    .map((item) => item.deviceCounts[0].count)
    .reduce((a, b) => a + b, 0);
  const id2 = filtered_Data
    .map((item) => item.deviceCounts[1].count)
    .reduce((a, b) => a + b, 0);
  const id3 = filtered_Data
    .map((item) => item.deviceCounts[2].count)
    .reduce((a, b) => a + b, 0);
  const id4 = filtered_Data
    .map((item) => item.deviceCounts[3].count)
    .reduce((a, b) => a + b, 0);
  const id5 = filtered_Data
    .map((item) => item.deviceCounts[4].count)
    .reduce((a, b) => a + b, 0);

  let data;

  if (filtered_Data.length > 0) {
    data = [
      ["Device", "Clicks"],
      [overTime.devices[0].name, id1],
      [overTime.devices[1].name, id2],
      [overTime.devices[2].name, id3],
      [overTime.devices[3].name, id4],
      [overTime.devices[4].name, id5],
      // [overTime.devices[5].name, id5]
    ];
  } else {
    data = [
      ["Device", "Clicks"],
      [overTime.devices[0].name, 0],
      [overTime.devices[1].name, 0],
      [overTime.devices[2].name, 0],
      [overTime.devices[3].name, 0],
      [overTime.devices[4].name, 0],
      // [overTime.devices[5].name, id5]
    ];
  }
  const sum = id1 + id2 + id3 + id4 + id5;

  const options = {
    title: "Total Clicks + Scans by Device-" + sum.toString(),
    pieHole: 0.4,
    is3D: false,
    titleTextStyle: {
      fontSize: 15,
    },
    pieSliceText: "value",
  };

  return (
    <div className={className}>
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};
export default PieChart;
