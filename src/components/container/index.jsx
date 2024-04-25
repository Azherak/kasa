import React from "react";
import data from "../../assets/data.json";
import Square from "../Square/index.jsx";


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