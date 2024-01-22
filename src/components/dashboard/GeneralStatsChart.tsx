import { Line } from "react-chartjs-2";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";
import "chart.js/auto";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function GeneralStatsChart() {
  const { rawData } = useDashboardContext();
  const { theme } = useThemeContext();
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
            borderColor: theme === "light" ? "#2563eb" : "#3b82f6",
            backgroundColor: theme === "light" ? "#2563eb" : "#3b82f6",
          },
          {
            label: "Median",
            data: rawData.map(() => median),
            borderDash: [5, 5],
            pointRadius: 0,
            borderColor: "#46d460",
            backgroundColor: "#6be882",
          },
          {
            label: "1st Quartile",
            data: rawData.map(() => firstQuartile),
            borderDash: [5, 5],
            pointRadius: 0,
            borderColor: "#e89510",
            backgroundColor: "#f7be63",
          },
          {
            label: "3rd Quartile",
            data: rawData.map(() => thirdQuartile),
            borderDash: [5, 5],
            pointRadius: 0,
            borderColor: "#e89510",
            backgroundColor: "#f7be63",
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
              color: theme === "light" ? "black" : "white",
              font: {
                size: 14,
              },
            },
            max: max + 1,
            grid: {
              color: theme === "light" ? "#E5E5E5" : "#282828",
            },
            beginAtZero: true,
          },
          x: {
            title: {
              display: true,
              text: "Roll",
              color: theme === "light" ? "black" : "white",
              font: {
                size: 14,
              },
            },
            grid: {
              color: theme === "light" ? "#E5E5E5" : "#282828",
            },
          },
        },
        plugins: {
          title: {
            font: {
              size: 20,
            },
            color: theme === "light" ? "black" : "white",
            display: true,
            text: "General Stats Chart",
            padding: {
              bottom: 4,
            },
          },
          legend: {
            position: "bottom",
            labels: {
              color: theme === "light" ? "black" : "white",
            },
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
}
