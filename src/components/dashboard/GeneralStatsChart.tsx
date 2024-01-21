import { Line } from "react-chartjs-2";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";
import "chart.js/auto";

export default function GeneralStatsChart() {
  const { rawData } = useDashboardContext();
  const { getMedian, getFirstQuartile, getThirdQuartile, getMinMax } = useStats();
  const { max } = getMinMax(rawData);
  const median = getMedian(rawData);
  const firstQuartile = getFirstQuartile(rawData);
  const thirdQuartile = getThirdQuartile(rawData);

  return (
    <Line
      data={{
        labels: rawData.map((data) => data.id + 1),
        datasets: [
          {
            type: "line",
            label: "Roll",
            data: rawData.map((data) => data.roll),
          },
          {
            label: "Median",
            data: rawData.map(() => median),
            borderDash: [5, 5],
            pointRadius: 0,
          },
          {
            label: "1st Quartile",
            data: rawData.map(() => firstQuartile),
            borderDash: [5, 5],
            pointRadius: 0,
          },
          {
            label: "3rd Quartile",
            data: rawData.map(() => thirdQuartile),
            borderDash: [5, 5],
            pointRadius: 0,
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
            max: max + 1,
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
            position: "bottom",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
}
