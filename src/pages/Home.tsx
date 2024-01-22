import { ChangeEvent, useEffect, useState } from "react";
import Die from "../components/Die";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { generateNumber } from "../utils";
import { Roll } from "../context/DashboardContext";

type formSchema = {
  dice: number | string;
  rolls: number | string;
};

export default function Home() {
  const [diceDisplay, setDiceDisplay] = useState([generateNumber()]);
  const [forms, setForms] = useState<formSchema>({ dice: 1, rolls: 1 });
  const navigate = useNavigate();
  const { setIsLoading, setDiceAmount, setRollAmount, setRawData, rollAmount, diceAmount } = useDashboardContext();

  /**
   * Changes the amount of dice shown depending on the config
   */
  useEffect(() => {
    if (typeof forms.dice === "string") {
      return;
    }

    if (diceDisplay.length < forms.dice) {
      for (let i = diceDisplay.length; i < forms.dice; i++) {
        setDiceDisplay([...diceDisplay, generateNumber()]);
      }
    } else if (diceDisplay.length > forms.dice) {
      for (let i = diceDisplay.length; i > forms.dice; i--) {
        setDiceDisplay(diceDisplay.slice(0, -1));
      }
    }
  }, [forms.dice, diceDisplay]);

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
    if (typeof forms.dice === "string" || forms.dice >= 10) {
      return;
    }
    setForms({ ...forms, dice: ++forms.dice });
    setDiceAmount((prev) => ++prev);
  };

  const decreaseDie = () => {
    if (typeof forms.dice === "string" || forms.dice <= 1) {
      return;
    }
    setForms({ ...forms, dice: --forms.dice });
    setDiceAmount((prev) => --prev);
  };

  const increaseRoll = () => {
    if (typeof forms.rolls === "string" || forms.rolls >= 200) {
      return;
    }
    setForms({ ...forms, rolls: ++forms.rolls });
    setRollAmount((prev) => ++prev);
  };

  const decreaseRoll = () => {
    if (typeof forms.rolls === "string" || forms.rolls <= 1) {
      return;
    }
    setForms({ ...forms, rolls: --forms.rolls });
    setRollAmount((prev) => --prev);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formName = e.target.name;
    const value = e.target.value;
    const numberValue = parseInt(value);

    if (value === "" || isNaN(numberValue)) {
      setForms({ ...forms, [formName]: "" });
      return;
    }

    switch (formName) {
      case "dice":
        if (numberValue > 0 && numberValue <= 10) {
          setForms({ ...forms, dice: numberValue });
          setDiceAmount(numberValue);
        }
        break;
      case "rolls":
        if (numberValue > 0 && numberValue <= 200) {
          setForms({ ...forms, rolls: numberValue });
          setRollAmount(numberValue);
        }
        break;
      default:
        throw new Error("Form handler does not exist");
    }
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
          <label className="mb-2 text-sm text-center dark:text-white">Dice Amount (1-10)</label>
          <div>
            <button className="px-2 dark:text-white" onClick={decreaseDie}>
              -
            </button>
            {/* TODO: Let user type in die amount: 1 <= N <= 100 */}
            <input
              name="dice"
              className="h-8 px-3 py-2 text-sm text-center border-2 border-gray-100 rounded-md dark:bg-neutral-800/80 dark:border-0 dark:text-white"
              value={forms.dice}
              onChange={handleOnChange}
            />
            <button className="px-2 dark:text-white" onClick={increaseDie}>
              +
            </button>
          </div>
        </div>
        <div>
          <label className="mb-2 text-sm dark:text-white">Roll Amount (1-200)</label>
          <div>
            <button className="px-2 dark:text-white" onClick={decreaseRoll}>
              -
            </button>
            <input
              name="rolls"
              className="h-8 px-3 py-2 text-sm text-center border-2 border-gray-100 rounded-md dark:bg-neutral-800/80 dark:border-0 dark:text-white"
              value={forms.rolls}
              onChange={handleOnChange}
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
