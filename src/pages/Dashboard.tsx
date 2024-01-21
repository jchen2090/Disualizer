import DiceStatsTable from "../components/dashboard/GeneralStatsTable";
import FrequencyChart from "../components/dashboard/FrequencyChart";
import FrequencyTable from "../components/dashboard/FrequencyTable";
import { useDashboardContext } from "../hooks/useDashboardContext";
import Loading from "./Loading";
import GeneralStatsChart from "../components/dashboard/GeneralStatsChart";

export default function Dashboard() {
  const { isLoading, setIsLoading } = useDashboardContext();

  setTimeout(() => {
    //TODO: Unsure when to make it load
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col max-h-screen p-6 max-w-screen">
      <div className="flex mt-8 justify-evenly">
        <div className="flex flex-col w-3/5 gap-6 h-96">
          <GeneralStatsChart />
          <FrequencyChart />
        </div>
        <div className="flex flex-col gap-6">
          <DiceStatsTable />
          <FrequencyTable />
        </div>
      </div>
    </div>
  );
}
