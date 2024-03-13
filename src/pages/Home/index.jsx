import React from "react";
import img from "../../assets/HomeFond.png";
import Conteneur from "../../components/container/index.jsx";

function Home(){
    return(
        <div className="Home">
            <div className="Home-titre">
                <img src={img} alt="côte rocheuse"></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
           <Conteneur/>
        </div>
    )
}

export default Home;