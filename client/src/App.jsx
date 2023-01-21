import Home from "./components/Home";
import { EthProvider } from "./contexts/EthContext";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <Home/>
      </div>
    </EthProvider>
  );
}

export default App;
