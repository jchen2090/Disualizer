import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("UseDashboardContext must be placed inside Context Provider");
  }
  return context;
};
