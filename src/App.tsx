import Home from "./pages/home";
import { DataProvider } from "./context/DataProvider";
import Maintenance from "./pages/maintenance";

export default function App() {

  // This flag should come from AWS parameters, not hardcoded
  const isMaintenance = false;

  return (
    <div className="App">
      <DataProvider>
        {isMaintenance ? <Maintenance /> : <Home />}
      </DataProvider>
    </div>
  );
}