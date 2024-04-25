import React from "react";
import logo from "../../assets/Logo-footer.png";


function Footer() {
    return(
        <footer>
            <div className="footer">
                <img src={logo} alt="logo du site"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;