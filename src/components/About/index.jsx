import React from "react";
import img from "../../assets/AboutFond.png";
import "./About.css";

function About(){
    return(
        <div>
            <div class="about-visuel">
                <img src={img} alt="montagnes et lac"></img>
            </div>
        </div>
    )
}

export default About;