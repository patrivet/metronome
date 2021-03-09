import { createContext } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Metronome } from "./components/Metronome/Metronome";
import { Selector } from "./components/Selector/Selector";
import { Songs } from "./components/Songs/Songs";

export const AppContext = createContext();
const context = {
  selectedBPM: null,
};

function App() {
  return (
    <AppContext.Provider value={context}>
      <Header />
      <Metronome />
      <Selector />
      <Songs />
    </AppContext.Provider>
  );
}

export default App;
