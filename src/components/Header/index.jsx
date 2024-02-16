import React from "react";
import logo from "../../assets/LOGO.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <nav>
                <img src={logo} alt="logo du site"></img>
                <ul>
                    <li>
                        <Link to="/" className="liens-header">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/About" className="liens-header">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;