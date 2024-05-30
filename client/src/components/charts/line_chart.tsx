import FilteredDataContext from "./Filter_context";
import { useContext } from "react";
import { Chart } from "react-google-charts";

interface LineChartProps {
  className: string;
}

const LineChart: React.FC<LineChartProps> = ({ className }) => {
  const filtered_Data = useContext(FilteredDataContext);

  const options = {
    title: "Clicks+scans over time",
    titleTextStyle: {
      fontSize: 15,
    },
    pointSize: 10,
    pointsVisible: true,
    legend: { position: "none" },
    chartArea: { width: "80%", height: "60%" },
    hAxis: { slantedText: true, slantedTextAngle: 10 },
  };

  const data = filtered_Data.map((item) => [
    new Date(item.date).toLocaleString("default", {
      month: "2-digit",
      day: "2-digit",
    }),
    item.total_count,
  ]);

  data.unshift(["", ""]);

  return (
    <div className={className}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="300px"
        data={data}
        options={options}
      />
    </div>
  );
};
export default LineChart;
