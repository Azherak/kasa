import React from "react";
import logo from "../../assets/Logo-footer.png";
import "../../style/index.css";

function Footer() {
    return(
        <footer>
            <img src={logo} alt="logo du site"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;