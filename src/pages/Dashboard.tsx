import DiceStatsTable from "../components/dashboard/GeneralStatsTable";
import FrequencyChart from "../components/dashboard/FrequencyChart";
import FrequencyTable from "../components/dashboard/FrequencyTable";
import { useDashboardContext } from "../hooks/useDashboardContext";
import Loading from "./Loading";
import GeneralStatsChart from "../components/dashboard/GeneralStatsChart";

export default function Dashboard() {
  const { isLoading, setIsLoading } = useDashboardContext();

  setTimeout(() => {
    /**
     * This is to simulate loading when it's actually instantaneous
     */
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-16 p-6">
      <div className="flex flex-row items-center w-full justify-evenly">
        <div className="w-3/5 h-96">
          <GeneralStatsChart />
        </div>
        <div className="flex overflow-y-auto h-96">
          <DiceStatsTable />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-6 px-32">
        <div className="w-full h-96">
          <FrequencyChart />
        </div>
        <div className="w-full px-12 overflow-x-auto">
          <FrequencyTable />
        </div>
      </div>
    </div>
  );
}
