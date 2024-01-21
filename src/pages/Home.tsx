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
      <h1 className="mt-20 text-3xl text-center">Dice Visualizer</h1>
      <div className="flex gap-2">
        {diceDisplay.map((roll, idx) => (
          <Die number={roll} key={idx} />
        ))}
      </div>
      <button onClick={reRoll} className="h-10 px-4 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-800/90">
        Roll Dice
      </button>
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-md">Config</h2>
        <div>
          <label className="mb-2 text-sm text-center">Dice Amount</label>
          <div>
            <button onClick={decreaseDie}>-</button>
            {/* TODO: Let user type in die amount: 1 <= N <= 100 */}
            <input className="text-center" value={diceDisplay.length} />
            <button onClick={increaseDie}>+</button>
          </div>
        </div>
        <div>
          <label className="mb-2 text-sm">Roll Amount</label>
          <div>
            <button onClick={decreaseRoll}>-</button>
            <input className="text-center" value={rollAmount} />
            <button onClick={increaseRoll}>+</button>
          </div>
        </div>
      </div>
    </main>
  );
}
