import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";

export default function DiceStatsTable() {
  const { rawData } = useDashboardContext();
  const { getMinMax, getMean, getMedian, getMode } = useStats();

  const formattedData = {
    min: getMinMax(rawData)[0],
    mean: getMean(rawData),
    median: getMedian(rawData),
    mode: getMode(rawData),
    max: getMinMax(rawData)[1],
  };

  return (
    <table className="border table-fixed w-72">
      <thead>
        <tr>
          <th className="p-2 font-bold border-b" colSpan={2}>
            General Stats
          </th>
        </tr>
        <tr>
          <th className="p-2 font-bold border-b border-r">Name</th>
          <th className="p-2 font-bold border-b">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="p-2 border-b border-r">Minimum</th>
          <td className="p-2 text-center border-b">{formattedData.min}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Mean</th>
          <td className="p-2 text-center border-b">{formattedData.mean}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Median</th>
          <td className="p-2 text-center border-b">{formattedData.median}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Mode</th>
          <td className="p-2 text-center border-b">{formattedData.mode.join(", ")}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Maximum</th>
          <td className="p-2 text-center border-b">{formattedData.max}</td>
        </tr>
      </tbody>
    </table>
  );
}
