import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type contextProps = {
  children: ReactNode;
};

type contextDefaultValues = {
  isLoading: boolean;
  data: Array<number>;
  rollAmount: number;
  diceAmount: number;
  setData: Dispatch<SetStateAction<Array<number>>>;
  setRollAmount: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setDiceAmount: Dispatch<SetStateAction<number>>;
};

export const DashboardContext = createContext<contextDefaultValues | null>(null);
export default function DashboardContextProvider({ children }: contextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<number>>([]);
  const [diceAmount, setDiceAmount] = useState(1);
  const [rollAmount, setRollAmount] = useState(1);

  const globalFunctions = {
    isLoading,
    data,
    rollAmount,
    diceAmount,
    setData,
    setDiceAmount,
    setIsLoading,
    setRollAmount,
  };

  return <DashboardContext.Provider value={globalFunctions}>{children}</DashboardContext.Provider>;
}
