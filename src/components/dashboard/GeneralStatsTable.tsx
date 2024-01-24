import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";
import { roundToMillionths } from "../../utils";

export default function DiceStatsTable() {
  const { rawData } = useDashboardContext();
  const { getMinMax, getMean, getMedian, getMode, getFirstQuartile, getThirdQuartile } = useStats();
  const { min, max } = getMinMax(rawData);

  const formattedData = {
    min: min,
    mean: roundToMillionths(getMean(rawData)),
    median: getMedian(rawData),
    mode: getMode(rawData),
    max: max,
    firstQuartile: getFirstQuartile(rawData),
    thirdQuartile: getThirdQuartile(rawData),
    range: max - min,
  };

  return (
    <table className="border table-fixed dark:border-neutral-600 w-72">
      <thead>
        <tr>
          <th className="p-2 font-bold border-b dark:border-neutral-600 dark:text-white" colSpan={2}>
            General Stats
          </th>
        </tr>
        <tr>
          <th className="p-2 font-bold border-b border-r dark:border-neutral-600 dark:text-white">Name</th>
          <th className="p-2 font-bold border-b dark:border-neutral-600 dark:text-white">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Minimum</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">{formattedData.min}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Mean</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">{formattedData.mean}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">1st Quartile</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">
            {formattedData.firstQuartile}
          </td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Median</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">{formattedData.median}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">3rd Quartile</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">
            {formattedData.thirdQuartile}
          </td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Mode</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">
            {formattedData.mode.join(", ")}
          </td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Maximum</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">{formattedData.max}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r dark:border-neutral-600 dark:text-white">Range</th>
          <td className="p-2 text-center border-b dark:border-neutral-600 dark:text-white">{formattedData.range}</td>
        </tr>
      </tbody>
    </table>
  );
}
