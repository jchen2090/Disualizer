import { useState, useRef } from "react";
import Die from "../components/Die";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { generateNumber } from "../utils";

export default function Home() {
  const [diceDisplay, setDiceDisplay] = useState([generateNumber()]);
  const previousNumber = useRef(0);
  const navigate = useNavigate();
  const { setIsLoading, setDiceAmount, rollDice, rollAmount, setRollAmount } = useDashboardContext();

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

  // const handleClick = () => {
  //   setInterval(() => {
  //     let num;
  //     /**
  //      * This is so the same dice face cannot be rendered again
  //      * This will be used for a loading screen however shouldn't be used
  //      * when sampling data to ensure accuracy
  //      */
  //     do {
  //       num = generateNumber();
  //       setRoll(num);

  //       //TODO: delete this, only used for local testing
  //       console.log(num);
  //     } while (num === previousNumber.current);
  //     previousNumber.current = num;
  //   }, 250);
  // };

  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="mt-20 text-3xl text-center">Dice Visualizer</h1>
      <div className="flex gap-3">
        {diceDisplay.map((roll) => (
          <Die number={roll} />
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
