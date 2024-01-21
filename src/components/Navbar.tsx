import { RxSun, RxMoon } from "react-icons/rx";
import { useThemeContext } from "../hooks/useThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex justify-end px-6 py-4">
      <button onClick={toggleTheme}>
        {theme === "dark" ? <RxSun size={24} color="white" /> : <RxMoon size={24} />}
      </button>
    </div>
  );
}
