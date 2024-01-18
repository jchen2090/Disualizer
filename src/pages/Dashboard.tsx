import DiceStatsTable from "../components/dashboard/GeneralStatsTable";
import FrequencyChart from "../components/dashboard/FrequencyChart";
import FrequencyTable from "../components/dashboard/FrequencyTable";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { formatData } from "../utils";
import Loading from "./Loading";

export default function Dashboard() {
  const { isLoading, data, setIsLoading } = useDashboardContext();
  const formattedData = formatData(data);

  setTimeout(() => {
    //TODO: Unsure when to make it load
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen p-12 max-w-screen">
      <div className="flex mt-12 justify-evenly">
        <div className="w-3/5 h-96">
          <FrequencyChart data={formattedData} />
        </div>
        <div className="flex flex-col gap-6">
          <DiceStatsTable data={formattedData} />
          <FrequencyTable data={formattedData} />
        </div>
      </div>
    </div>
  );
}
