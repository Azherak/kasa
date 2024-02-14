import React from "react";
import logo from "../../assets/LOGO.png";
import "./Header.css";

function Header(){
    return(
        <header className="header">
            <nav>
                <img src={logo} alt="logo du site"></img>
                <ul>
                    <li>Accueil</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;