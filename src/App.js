import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const inputChangeHandler = (inputData) => {
    setIsHeaderExpanded(!inputData);
    setSuggestedNames(inputData ? name(inputData) : []);
  };

  return (
    <div className="App">
      <Navbar />
      <Header headerExpanded={isHeaderExpanded} />
      <SearchBox onInputChange={inputChangeHandler} />
      <ResultsContainer suggestedNames={suggestedNames} />
      <Footer />
    </div>
  );
}

export default App;
