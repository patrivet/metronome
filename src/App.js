import { useState, createContext, useContext } from "react";
import "./App.css";

// Import custom components
import { Header } from "./components/Header/Header";
import { Metronome } from "./components/Metronome/Metronome";
import { Selector } from "./components/Selector/Selector";
import { Songs } from "./components/Songs/Songs";

// Get default bpms from env file or use defaults if missing.
const BPMS = process.env.REACT_APP_BPMS?.split(',') || [72, 74, 82, 84, 128, 138];
const INITAL_BPM = process.env.REACT_APP_INIT_BPM || BPMS[0];

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

function App() {
  const [activeBpm, setActiveBpm] = useState(INITAL_BPM);

  // All info on bpms set in context.
  const context = {
    bpms: BPMS,
    activeBpm,
    setActiveBpm,
  };

  return (
    <AppContext.Provider value={context}>
      <div className='App'>
        <Header />
        <Metronome />
        <Selector />
        <Songs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
