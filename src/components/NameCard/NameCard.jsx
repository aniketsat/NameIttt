import React from "react";
import "./NameCard.css";

const NameCard = (props) => {
  const nameURL = `https://www.namecheap.com/domains/registration/results/?domain=`;

  return (
    <a
      className="card-link"
      href={`${nameURL}${props.suggestedName}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="result-name-card">
        <p className="result-name">{props.suggestedName}</p>
      </div>
    </a>
  );
};

export default NameCard;
