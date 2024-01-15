import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { generateNumber } from "../utils";

type contextProps = {
  children: ReactNode;
};

type contextDefaultValues = {
  isLoading: boolean;
  data: Array<number>;
  rollAmount: number;
  diceAmount: number;
  setRollAmount: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setDiceAmount: Dispatch<SetStateAction<number>>;
  rollDice: () => void;
};

export const DashboardContext = createContext<contextDefaultValues | null>(null);
export default function DashboardContextProvider({ children }: contextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<number[]>([]);
  const [diceAmount, setDiceAmount] = useState(1);
  const [rollAmount, setRollAmount] = useState(1);

  const rollDice = () => {
    for (let i = 0; i < diceAmount * rollAmount; i++) {
      setData((prev) => [...prev, generateNumber()]);
    }
  };

  const globalFunctions = {
    isLoading,
    data,
    rollAmount,
    diceAmount,
    setDiceAmount,
    setIsLoading,
    rollDice,
    setRollAmount,
  };

  return <DashboardContext.Provider value={globalFunctions}>{children}</DashboardContext.Provider>;
}
