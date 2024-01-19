import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

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

  const globalFunctions = {
    isLoading,
    rawData,
    rollAmount,
    diceAmount,
    setRawData,
    setDiceAmount,
    setIsLoading,
    setRollAmount,
  };

  return <DashboardContext.Provider value={globalFunctions}>{children}</DashboardContext.Provider>;
}
