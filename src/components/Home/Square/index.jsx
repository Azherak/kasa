import React from "react";
import "../../../data.json";
import "../../../style/index.css";
import { Link } from "react-router-dom";

const Square = ({ item }) => {
  return (
    <div className="square" style={{ backgroundImage: `url(${item.cover})` }}>
      <Link to={`/Logements/${item.id}`}>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};

export default Square;
