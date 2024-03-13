import React from "react";
import { Link } from "react-router-dom";

const Square = ({ item }) => {
  return (
    <>
     <Link to={`/Logements/${item.id}`}>
        <div className="square" style={{ backgroundImage: `url(${item.cover})` }}>
        <h3>{item.title}</h3>
        </div>
      </Link>
    </>
  );
};

export default Square;