import React from "react";
import data from "../../../data.json";
import Square from "../Square";
import "./Container.css";

function Conteneur(){
    return(
        <div className="container">
        {data.slice(0, 6).map((item, index) => (
          <Square key={index} item={item} />
        ))}
      </div>
    )
}

export default Conteneur;
  