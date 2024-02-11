import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light"); // Define and initialize theme state

  return (
    <div className='bg-white dark:bg-black dark:text-white text-black overflow-x-hidden'>
      <Router>
        {/* Pass theme and setTheme as props to Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />
      </Router>
    </div>
  );
}

export default App;
