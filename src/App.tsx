import { useRef, useState } from "react";
import Die from "./components/Die";

const generateNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

function App() {
  const [roll, setRoll] = useState(generateNumber());
  const [dieAmount, setDieAmount] = useState(1);
  const previousNumber = useRef(0);

  const handleClick = () => {
    setInterval(() => {
      let num;
      /**
       * This is so the same dice face cannot be rendered again
       * This will be used for a loading screen however shouldn't be used
       * when sampling data to ensure accuracy
       */
      do {
        num = generateNumber();
        setRoll(num);

        //TODO: delete this, only used for local testing
        console.log(num);
      } while (num === previousNumber.current);
      previousNumber.current = num;
    }, 250);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="mt-20 text-3xl text-center">Dice Visualizer</h1>
      <div className="flex gap-3">
        <Die number={roll} />
        <Die number={roll} />
        <Die number={roll} />
        <Die number={roll} />
      </div>
      <button onClick={handleClick} className="h-10 px-4 py-2 text-white rounded-md bg-slate-800 hover:bg-slate-800/90">Roll Dice</button>
    </main>
  );
}

export default App;
