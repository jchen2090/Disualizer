import Die from "../components/Die";
import { useDashboardContext } from "../hooks/useDashboardContext";
import Loading from "./Loading";

export default function Dashboard() {
  const { isLoading, data, setIsLoading } = useDashboardContext();

  console.log(data);
  setTimeout(() => {
    //TODO: Unsure when to make it load
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data.map((roll) => (
        <Die number={roll} />
      ))}
    </div>
  );
}
