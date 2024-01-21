import Routes from "./Routes";
import Navbar from "./components/Navbar";
import DashboardContextProvider from "./context/DashboardContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <DashboardContextProvider>
        <Navbar />
        <Routes />
      </DashboardContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
