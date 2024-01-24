import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { generateNumber } from "../utils";

type contextProps = {
  children: ReactNode;
};

type contextDefaultValues = {
  isLoading: boolean;
  rawData: Array<Roll>;
  rollAmount: number;
  diceAmount: number;
  setRawData: Dispatch<SetStateAction<Array<Roll>>>;
  setRollAmount: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setDiceAmount: Dispatch<SetStateAction<number>>;
  updateRawData: () => void;
  resetRawData: () => void;
};

export type Roll = {
  id: number;
  roll: number;
  dice: Array<number>;
};

export const DashboardContext = createContext<contextDefaultValues | null>(null);
export default function DashboardContextProvider({ children }: contextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [rawData, setRawData] = useState<Array<Roll>>([]);
  const [diceAmount, setDiceAmount] = useState(1);
  const [rollAmount, setRollAmount] = useState(1);

  /*
    TODO: ID generation has a bug where it will reuse the same ID
    While this is fine now since we're not using the ID property, 
    Any computation based on ID will break until this is fixed
  */
  const updateRawData = () => {
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

  const resetRawData = () => {
    setRawData([]);
  };

  const globalFunctions = {
    isLoading,
    rawData,
    rollAmount,
    diceAmount,
    setRawData,
    setDiceAmount,
    setIsLoading,
    setRollAmount,
    updateRawData,
    resetRawData,
  };

  return <DashboardContext.Provider value={globalFunctions}>{children}</DashboardContext.Provider>;
}
