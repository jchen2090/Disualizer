import { ReactNode, createContext, useEffect, useState } from "react";

type contextProps = {
  children: ReactNode;
};

type contextDefaultValues = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<contextDefaultValues | null>(null);
export default function ThemeContextProvider({ children }: contextProps) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.setAttribute("class", "dark");
    } else {
      document.documentElement.removeAttribute("class");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const globalFunctions = { theme, toggleTheme };

  return <ThemeContext.Provider value={globalFunctions}>{children}</ThemeContext.Provider>;
}
