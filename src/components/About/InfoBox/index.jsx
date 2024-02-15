import React, { useState } from "react";
import "./InfoBox.css";

// L'image du chevron
import Chevron from "../../../assets/Vector.png";

function InfoBox({ word, explanation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <div className="box-content" onClick={() => setIsOpen(!isOpen)}>
        {word}
        <img
          src={Chevron}
          alt="Chevron"
          className="chevron"
          style={{
            transform: isOpen ? "rotate(-180deg)" : "none",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {isOpen && <div className="explanation">{explanation}</div>}
    </div>
  );
}

export default InfoBox;
