import React from "react";
import "../../../data.json";
import "../../../style/index.css";
import { Link } from "react-router-dom";

function Square(props) {
    return (
      <div className="square">
        <Link to={`/Logements/${props.item.id}`}><h3>{props.item.title}</h3></Link>
      </div>
    );
  }

export default Square;
