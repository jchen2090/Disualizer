import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be placed inside Context Provider");
  }
  return context;
};
