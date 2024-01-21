import { useEffect, useState } from "react";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { generateNumber } from "../utils";
import Die from "../components/Die";

const generateDiceDisplay = (diceAmount: number) => {
  const temp = [];

  for (let i = 0; i < diceAmount; i++) {
    temp.push(generateNumber());
  }
  return temp;
};

const generateLoadingMsg = (message: string) => {
  const pattern = /\./g;
  const dotLength = message.match(pattern)?.length;

  //TODO: Refactor this later(?)
  if (dotLength === 3) {
    return "Rolling";
  } else if (dotLength === 2) {
    return "Rolling...";
  } else if (dotLength === 1) {
    return "Rolling..";
  } else {
    return "Rolling.";
  }
};

export default function Loading() {
  const { diceAmount } = useDashboardContext();
  const [diceDisplay, setDiceDisplay] = useState<number[]>(generateDiceDisplay(diceAmount));
  const [loadingMsg, setLoadingMsg] = useState("Rolling...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDiceDisplay(generateDiceDisplay(diceAmount));
      setLoadingMsg(generateLoadingMsg(loadingMsg));
    }, 250);

    return () => {
      clearInterval(intervalId);
    };
  }, [diceAmount, loadingMsg]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center mt-52">
        <div className="flex gap-2">
          {diceDisplay.map((die, idx) => (
            <Die number={die} key={idx} />
          ))}
        </div>
        <p className="mt-6 text-xl">{loadingMsg}</p>
      </div>
    </div>
  );
}
