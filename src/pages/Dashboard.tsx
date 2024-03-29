import DiceStatsTable from "../components/dashboard/GeneralStatsTable";
import FrequencyChart from "../components/dashboard/FrequencyChart";
import FrequencyTable from "../components/dashboard/FrequencyTable";
import { useDashboardContext } from "../hooks/useDashboardContext";
import Loading from "./Loading";
import GeneralStatsChart from "../components/dashboard/GeneralStatsChart";
import { RxReload } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../hooks/useThemeContext";

export default function Dashboard() {
  const { isLoading, setIsLoading } = useDashboardContext();
  const { theme } = useThemeContext();
  const navigate = useNavigate();

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
      <div className="self-center">
        <button className="flex items-center gap-2 px-24 btn-primary" onClick={() => navigate("/")}>
          Reroll
          <span>
            <RxReload size={12} color={theme === "dark" ? "black" : "white"} />
          </span>
        </button>
      </div>
      <div className="flex flex-row items-center w-full mt-6 justify-evenly">
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
