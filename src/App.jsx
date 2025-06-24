import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import TextBox from "./components/TextBox/textbox";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#243861";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#8994ab";
    }
  };
  return (
    <>
      <header>
        <Navbar mode={mode} toggleMode={toggleMode} />
      </header>
      <div className="container">
        <TextBox />
      </div>
    </>
  );
}

export default App;
