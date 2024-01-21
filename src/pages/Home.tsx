import { useState } from "react";
import Die from "../components/Die";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { generateNumber } from "../utils";
import { Roll } from "../context/DashboardContext";

export default function Home() {
  const [diceDisplay, setDiceDisplay] = useState([generateNumber()]);
  const navigate = useNavigate();
  const { setIsLoading, setDiceAmount, setRollAmount, setRawData, rollAmount, diceAmount } = useDashboardContext();

  const rollDice = () => {
    for (let i = 0; i < rollAmount; i++) {
      const temp: Array<number> = [];
      for (let j = 0; j < diceAmount; j++) {
        temp.push(generateNumber());
      }
      const sum = temp.reduce((acc, current) => acc + current);
      const payload: Roll = {
        id: i,
        roll: sum,
        dice: temp,
      };
      setRawData((prev) => [...prev, payload]);
    }
  };

  const reRoll = () => {
    setIsLoading(true);
    rollDice();
    navigate("/dashboard");
  };

  const increaseDie = () => {
    setDiceDisplay((prev) => [...prev, generateNumber()]);
    setDiceAmount((prev) => ++prev);
  };

  const decreaseDie = () => {
    setDiceDisplay((prev) => prev.slice(0, -1));
    setDiceAmount((prev) => --prev);
  };

  const increaseRoll = () => {
    setRollAmount((prev) => ++prev);
  };

  const decreaseRoll = () => {
    setRollAmount((prev) => --prev);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="mt-20 text-3xl text-center dark:text-white">Dice Visualizer</h1>
      <div className="flex gap-2">
        {diceDisplay.map((roll, idx) => (
          <Die number={roll} key={idx} />
        ))}
      </div>
      <button
        onClick={reRoll}
        className="h-10 px-4 py-2 text-white rounded-md bg-neutral-900 hover:bg-neutral-900/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        Roll Dice
      </button>
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-md dark:text-white">Config</h2>
        <div>
          <label className="mb-2 text-sm text-center dark:text-white">Dice Amount</label>
          <div>
            <button className="px-2 dark:text-white" onClick={decreaseDie}>
              -
            </button>
            {/* TODO: Let user type in die amount: 1 <= N <= 100 */}
            <input
              className="h-8 px-3 py-2 text-sm text-center border-2 border-gray-100 rounded-md dark:bg-neutral-800/80 dark:border-0 dark:text-white"
              value={diceDisplay.length}
            />
            <button className="px-2 dark:text-white" onClick={increaseDie}>
              +
            </button>
          </div>
        </div>
        <div>
          <label className="mb-2 text-sm dark:text-white">Roll Amount</label>
          <div>
            <button className="px-2 dark:text-white" onClick={decreaseRoll}>
              -
            </button>
            <input
              className="h-8 px-3 py-2 text-sm text-center border-2 border-gray-100 rounded-md dark:bg-neutral-800/80 dark:border-0 dark:text-white"
              value={rollAmount}
            />
            <button className="px-2 dark:text-white" onClick={increaseRoll}>
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
