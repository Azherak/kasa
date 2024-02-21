import React from "react";
import "../../style/index.css";
import img from "../../assets/HomeFond.png";
import Conteneur from "./container";

function Home(){
    return(
        <>
            <div className="Home-titre">
                <img src={img} alt="côte rocheuse"></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
           <Conteneur/>
        </>
    )
}

export default Home;