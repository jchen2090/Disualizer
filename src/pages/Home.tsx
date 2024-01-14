import { useState, useRef } from "react";
import Die from "../components/Die";

const generateNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

export default function Home() {
  const [rolls, setRolls] = useState([generateNumber()]);
  const previousNumber = useRef(0);

  const reRoll = () => {
    const newRolls: number[] = [];

    rolls.forEach(() => {
      newRolls.push(generateNumber());
    });
    console.log(newRolls);

    setRolls(newRolls);
  };

  const increaseDie = () => {
    setRolls((prev) => [...prev, generateNumber()]);
  };

  const decreaseDie = () => {
    setRolls((prev) => prev.slice(0, -1));
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
        {rolls.map((roll) => (
          <Die number={roll} />
        ))}
      </div>
      <button onClick={reRoll} className="h-10 px-4 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-800/90">
        Roll Dice
      </button>
      <p>Config</p>
      <div>
        <button onClick={decreaseDie}>-</button>
        {/* TODO: Let user type in die amount: 1 <= N <= 100 */}
        <input className="text-center" value={rolls.length} />
        <button onClick={increaseDie}>+</button>
      </div>
    </main>
  );
}
