import FilteredDataContext from "./Filter_context";
import { useContext } from "react";
import overTime from "./chart_data.json";

interface LocationCardProps {
  className: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ className }) => {
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

  const countries_data = [
    id1,
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    id9,
    id10,
  ].map((value, index) => ({ id: index, value: value }));

  const top_three = [...countries_data]
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);

  return (
    <div className={className}>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2">Clicks+scans by location</div>
        <div >
          {top_three.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-xl mb-2">
                {overTime.locations[item.id].name}
              </h1>
              <h1 className="text-md mb-2 font-bold">
                {item.value} clicks + scans
              </h1>
              <hr className="border-1 border-grey-100 w-full " />
            </div>
          ))}
          <h1 className="text-gray-600">
            {filtered_Data.length > 0
              ? new Date(String(filtered_Data[0].date)).toLocaleString(
                  "default",
                  { month: "long", day: "numeric" }
                )
              : "No data"}
            -
            {filtered_Data.length > 0
              ? new Date(
                  String(filtered_Data[filtered_Data.length - 1].date)
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
export default LocationCard;
