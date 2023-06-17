import Navbar from "./scenes/Navbar"
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <div className="App">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
  );
}

export default App;
