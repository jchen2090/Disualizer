import { tableProps } from "./types";

export default function DiceStatsTable({ data }: tableProps) {
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
          <td className="p-2 text-center border-b">{data.min}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Mean</th>
          <td className="p-2 text-center border-b">{data.mean}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Median</th>
          <td className="p-2 text-center border-b">{data.median}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Mode</th>
          <td className="p-2 text-center border-b">{data.mode.join(", ")}</td>
        </tr>
        <tr>
          <th className="p-2 border-b border-r">Maximum</th>
          <td className="p-2 text-center border-b">{data.max}</td>
        </tr>
      </tbody>
    </table>
  );
}
