import { useDashboardContext } from "../hooks/useDashboardContext";
import { formattedData } from "../utils";

type tableProps = {
  data: formattedData;
};

export default function FrequencyTable({ data }: tableProps) {
  const { diceAmount } = useDashboardContext();
  const smallestRoll = diceAmount;
  const largestRoll = diceAmount * 6;
  const allRolls = Array.from({ length: largestRoll - smallestRoll + 1 }, (_, i) => i + smallestRoll);

  return (
    <table className="border w-96">
      <thead>
        <tr>
          <th className="p-2 font-bold border-b" colSpan={2}>
            Frequencies
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="p-2 font-bold border-b border-r">Number</th>
          <th className="p-2 font-bold border-b">Frequency</th>
        </tr>
        {allRolls.map((roll) => (
          <tr>
            <th className="p-2 font-bold border-b border-r">{roll}</th>
            <td className="p-2 text-center border-b">{data.frequencies[roll] || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
