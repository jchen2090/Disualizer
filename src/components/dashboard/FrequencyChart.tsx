import { Bar } from "react-chartjs-2";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import { useStats } from "../../hooks/useStats";
import "chart.js/auto";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function FrequencyChart() {
  const { diceAmount, rawData } = useDashboardContext();
  const { theme } = useThemeContext();
  const { getFrequencies } = useStats();
  const frequencies = getFrequencies(rawData);
  const smallestRoll = diceAmount;
  const largestRoll = diceAmount * 6;
  const allRolls = Array.from({ length: largestRoll - smallestRoll + 1 }, (_, i) => i + smallestRoll);

  return (
    <Bar
      data={{
        labels: allRolls,
        datasets: [
          {
            label: "Amount Rolled",
            data: allRolls.map((roll) => frequencies[roll] || 0),
            backgroundColor: theme === "light" ? "#2563eb" : "#3b82f6",
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
              text: "Frequency",
              color: theme === "light" ? "black" : "white",
              font: {
                size: 14,
              },
            },
            //TODO: Make this more scalable
            suggestedMax: 10,
            beginAtZero: true,
            grid: {
              color: theme === "light" ? "#E5E5E5" : "#282828",
            },
          },
          x: {
            title: {
              display: true,
              text: "Roll Result",
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
            text: "Frequency Chart",
            padding: {
              bottom: 4,
            },
          },
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
}
