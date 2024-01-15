import Die from "../components/Die";
import { useDashboardContext } from "../hooks/useDashboardContext";

export default function Dashboard() {
  const { isLoading, data, setIsLoading } = useDashboardContext();

  console.log(data);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {data.map((roll) => (
        <Die number={roll} />
      ))}
    </div>
  );
}
