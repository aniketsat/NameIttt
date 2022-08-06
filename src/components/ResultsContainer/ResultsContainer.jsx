import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = (props) => {
  const suggestedNameJSX = props.suggestedNames.map((suggestedName, idx) => {
    return <NameCard key={idx} suggestedName={suggestedName} />;
  });

  return <div className="results-container">{suggestedNameJSX}</div>;
};

export default ResultsContainer;
