import FilteredDataContext from "./Filter_context";
import { useContext } from "react";
import { Chart } from "react-google-charts";
import overTime from "./chart_data.json";

interface BarChartProps {
  className: string;
}

const BarChart: React.FC<BarChartProps> = ({ className }) => {
  const filtered_Data = useContext(FilteredDataContext);
  const id1 = filtered_Data
    .map((item) => item.referrerCounts[0].count)
    .reduce((a, b) => a + b, 0);
  const id2 = filtered_Data
    .map((item) => item.referrerCounts[1].count)
    .reduce((a, b) => a + b, 0);
  const id3 = filtered_Data
    .map((item) => item.referrerCounts[2].count)
    .reduce((a, b) => a + b, 0);
  const id4 = filtered_Data
    .map((item) => item.referrerCounts[3].count)
    .reduce((a, b) => a + b, 0);
  const id5 = filtered_Data
    .map((item) => item.referrerCounts[4].count)
    .reduce((a, b) => a + b, 0);
  const id6 = filtered_Data
    .map((item) => item.referrerCounts[5].count)
    .reduce((a, b) => a + b, 0);
  const id7 = filtered_Data
    .map((item) => item.referrerCounts[6].count)
    .reduce((a, b) => a + b, 0);

  let data;

  if (filtered_Data.length > 0) {
    data = [
      ["Device", "Clicks"],
      [overTime.referrers[0].name, id1],
      [overTime.referrers[1].name, id2],
      [overTime.referrers[2].name, id3],
      [overTime.referrers[3].name, id4],
      [overTime.referrers[4].name, id5],
      [overTime.referrers[5].name, id6],
      [overTime.referrers[6].name, id7],
    ];
  } else {
    data = [
      ["Device", "Clicks"],
      [overTime.referrers[0].name, 0],
      [overTime.referrers[1].name, 0],
      [overTime.referrers[2].name, 0],
      [overTime.referrers[3].name, 0],
      [overTime.referrers[4].name, 0],
      [overTime.referrers[5].name, 0],
      [overTime.referrers[6].name, 0],
    ];
  }
  const sum = id1 + id2 + id3 + id4 + id5 + id6 + id7;


  const options = {
    title: "Clicks + Scans by refferer-" + sum.toString(),
    bar: { groupWidth: "90%" },
    chartArea: { width: "80%", height: "60%" },
    legend: { position: "none" },
    hAxis: { slantedText: true, slantedTextAngle: 45 },
    titleTextStyle: {
      fontSize: 15,
    },
  };


  return (
    <div className={className}>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};
export default BarChart;
