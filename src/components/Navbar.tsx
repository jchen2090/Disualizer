import { RxSun, RxMoon } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { useThemeContext } from "../hooks/useThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex justify-between px-6 py-4">
      <Link to="/" className="text-xl font-medium dark:text-white">
        Disualizer
      </Link>
      <div className="flex gap-6">
        <button onClick={toggleTheme}>
          {theme === "dark" ? <RxSun size={24} color="white" /> : <RxMoon size={24} />}
        </button>
        <a href="https://github.com/jchen2090/dice-visualization">
          <FaGithub size={24} color={theme === "dark" ? "white" : undefined} />
        </a>
      </div>
    </div>
  );
}
