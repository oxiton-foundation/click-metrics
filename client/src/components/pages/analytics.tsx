import LineChart from "../charts/line_chart";
import PieChart from "../charts/pie_chart";
import DateFilter from "../charts/date_filter";
import CountCard from "../charts/count_card";
import BarChart from "../charts/bar_chart";
import GeoChart from "../charts/geo_chart";
import { Button } from "../ui";
import LocationCard from "../charts/location_card";
const Analytics = () => {
  return (
    <>
      <div className="flex relative">
        <h1 className="text-3xl font-bold p-2">Analytics</h1>
        <Button className="absolute right-0 m-2">Add Modules</Button>
      </div>
      <p className="p-2 text-blue-500 bg-[#f4f6fa]">
        This is an example of our new Analytics dashboard using sample
        Data.Upgrade to dispplay your data in real time and make this report
        actionable.
      </p>

      <DateFilter
        className={"rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-0"}
      >
        <div className="bg-[#f4f6fa] w-full h-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 items-start ">
            <div className="grid grid-flow-row gap-0">
              <CountCard
                className={
                  "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                }
              />
              <LineChart
                className={
                  "rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                }
              />
              <GeoChart
                className={
                  "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1 p-1"
                }
              />
            </div>

            <div className="grid grid-flow-row gap-0">
              <PieChart
                className={
                  "rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                }
              />
              <BarChart
                className={
                  "rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                }
              />
              <LocationCard
                className={
                  "bg-[#ffffff] rounded-lg overflow-hidden shadow-lg hover:shadow-xl m-1"
                }
              />
            </div>
          </div>
          {/* <ClicksCount start_date={new Date("2024-03-09")}/> */}
        </div>
      </DateFilter>
    </>
  );
};

export default Analytics;
