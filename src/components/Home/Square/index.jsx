import React from "react";
import "../../../data.json";
import "./Square.css";

function Square(props) {
    return (
      <div className="square">
        <h3>{props.item.title}</h3>
      </div>
    );
  }

export default Square