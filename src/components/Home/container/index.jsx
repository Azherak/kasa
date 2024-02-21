import React from "react";
import data from "../../../data.json";
import Square from "../Square";
import "../../../style/index.css";

function Conteneur(){
    return(
        <div className="container">
        {data.map((item, index) => (
          <Square key={index} item={item} />
        ))}
      </div>
    )
}

export default Conteneur;
  