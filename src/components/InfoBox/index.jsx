import React, { useState } from "react";
import Chevron from "../../assets/Vector.png";

function InfoBox({ word, explanation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <div className="box-content" onClick={() => setIsOpen(!isOpen)}>
        {word}
        <img
          src={Chevron}
          alt="Chevron"
          className={`chevron ${isOpen ? "chevron-open" : ""}`}
        />
      </div>
      <div className={`explanation ${isOpen ? 'open' : ''}`}>
        {Array.isArray(explanation) ? 
          <ul>
            {explanation.map((item, index) => <li key={index}>{item}</li>)} 
          </ul>
          : explanation}
      </div>
    </div>
  );
}

export default InfoBox;