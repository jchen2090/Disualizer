import { formattedData } from "../utils";

type tableProps = {
  data: formattedData;
};

export default function DiceStatsTable({ data }: tableProps) {
  return (
    <table className="border">
      <thead>
        <tr>
          <th className="p-2 font-bold border-b" colSpan={2}>
            General Stats
          </th>
        </tr>
        <tr>
          <th className="p-2 font-bold border-b">Name</th>
          <th className="p-2 font-bold border-b">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="p-2 border-b">Minimum</th>
          <td className="p-2 text-center border-b">{data.min}</td>
        </tr>
        <tr>
          <th className="p-2 border-b">Mean</th>
          <td className="p-2 text-center border-b">{data.mean}</td>
        </tr>
        <tr>
          <th className="p-2 border-b">Median</th>
          <td className="p-2 text-center border-b">{data.median}</td>
        </tr>
        <tr>
          <th className="p-2 border-b">Mode</th>
          <td className="p-2 text-center border-b">{data.mode}</td>
        </tr> 
        <tr>
          <th className="p-2 border-b">Maximum</th>
          <td className="p-2 text-center border-b">{data.max}</td>
        </tr>
      </tbody>
    </table>
  );
}
