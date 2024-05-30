import FilteredDataContext from "./Filter_context";
import { useContext } from "react";

interface CountCardProps {
  className: string;
}

const CountCard: React.FC<CountCardProps> = ({ className }) => {
  const filteredData = useContext(FilteredDataContext);
  const sum = filteredData.reduce((acc, item) => acc + item.total_count, 0);

  return (
    <div className={className}>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2">Clicks+scans over time</div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl mb-2">
            {filteredData.length > 0
              ? new Date(String(filteredData[0].date)).toLocaleString(
                  "default",
                  { month: "long", day: "numeric", year: "numeric" }
                )
              : "No data"}
          </h1>

          <h1 className="text-md mb-2">{sum} clicks + scans</h1>
          <h1>
            {filteredData.length > 0
              ? new Date(String(filteredData[0].date)).toLocaleString(
                  "default",
                  { month: "long", day: "numeric" }
                )
              : "No data"}
            -
            {filteredData.length > 0
              ? new Date(
                  String(filteredData[filteredData.length - 1].date)
                ).toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "No data"}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default CountCard;
