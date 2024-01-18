import DiceStatsTable from "../components/DiceStatsTable";
import FrequencyTable from "../components/FrequencyTable";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { formatData } from "../utils";
import Loading from "./Loading";

export default function Dashboard() {
  const { isLoading, data, setIsLoading } = useDashboardContext();
  const formattedData = formatData(data);

  //TODO: Remove later
  console.log(data);
  setTimeout(() => {
    //TODO: Unsure when to make it load
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col gap-6 mt-12">
        <DiceStatsTable data={formattedData} />
        <FrequencyTable data={formattedData} />
      </div>
    </div>
  );
}
