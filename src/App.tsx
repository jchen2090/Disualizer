import Routes from "./Routes";
import DashboardContextProvider from "./context/DashboardContext";

function App() {
  return (
    <DashboardContextProvider>
      <Routes />
    </DashboardContextProvider>
  );
}

export default App;
