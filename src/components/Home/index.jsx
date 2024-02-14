import React from "react";
import "../../assets/Home.css"
import img from "../../assets/HomeFond.png"

function Home(){
    return(
        <div>
            <div class="Home-titre">
                <img src={img} alt="côte rocheuse"></img>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div></div>
        </div>
    )
}

export default Home;