import { Line } from "react-chartjs-2";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";
import "chart.js/auto";

export default function GeneralStatsChart() {
  const { rawData } = useDashboardContext();
  const { getMedian } = useStats();
  const median = getMedian(rawData);

  return (
    <Line
      data={{
        labels: rawData.map((data) => data.id + 1),
        datasets: [
          {
            label: "Roll",
            data: rawData.map((data) => data.roll),
          },
          {
            label: "Median",
            data: rawData.map(() => median),
          },
        ],
      }}
      options={{
        scales: {
          y: {
            ticks: {
              precision: 0,
            },
            title: {
              display: true,
              text: "Result",
              color: "black",
              font: {
                size: 14,
              },
            },
          },
          x: {
            title: {
              display: true,
              text: "Roll",
              color: "black",
              font: {
                size: 14,
              },
            },
          },
        },
        plugins: {
          title: {
            font: {
              size: 20,
            },
            color: "black",
            display: true,
            text: "General Stats Chart",
            padding: {
              bottom: 4,
            },
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}