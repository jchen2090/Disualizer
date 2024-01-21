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
    <table className="border dark:border-neutral-600 w-72">
      <thead>
        <tr>
          <th className="p-2 font-bold border-b dark:border-neutral-600 dark:text-white" colSpan={2}>
            Frequencies
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="p-2 font-bold border-b border-r dark:border-neutral-600 dark:text-white">Number</th>
          <th className="p-2 font-bold border-b dark:border-neutral-600 dark:text-white">Frequency</th>
        </tr>
        {allRolls.map((roll, idx) => (
          <tr key={idx}>
            <th className="p-2 font-bold border-b border-r dark:border-neutral-600 dark:text-white">{roll}</th>
            <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">
              {frequencyData[roll] || 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
