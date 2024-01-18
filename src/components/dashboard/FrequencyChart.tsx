import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { chartProps } from "./types";
import { useDashboardContext } from "../../hooks/useDashboardContext";

export default function FrequencyChart({ data }: chartProps) {
  const { diceAmount } = useDashboardContext();
  const { frequencies } = data;
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
            backgroundColor: "#3b82f6",
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
              color: "black",
              font: {
                size: 14,
              },
            },
            beginAtZero: true,
          },
          x: {
            title: {
              display: true,
              text: "Roll Result",
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
