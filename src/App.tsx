import Home from "./pages/home";
import { DataProvider } from "./context/DataProvider";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}