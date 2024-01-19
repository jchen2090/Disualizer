import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";

export default function FrequencyTable() {
  const { diceAmount, rawData } = useDashboardContext();
  const { getFrequencies } = useStats();
  const frequencyData = getFrequencies(rawData);
  const smallestRoll = diceAmount;
  const largestRoll = diceAmount * 6;
  const allRolls = Array.from({ length: largestRoll - smallestRoll + 1 }, (_, i) => i + smallestRoll);

  return (
    <table className="border w-72">
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
        {allRolls.map((roll, idx) => (
          <tr key={idx}>
            <th className="p-2 font-bold border-b border-r">{roll}</th>
            <td className="p-2 text-center border-b">{frequencyData[roll] || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
