import React from "react";
import 'bulma/css/bulma.css'
import './../../App.css'
import Logo from "./../../images/cropped-orogold-logo-dgold.png"
const NavBar = () =>{
    return(
        <div className="nav">
            <nav className=" has-background-black navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                        <img src={Logo} alt=" orogold-icon" width="112" height="28"/>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <p className="has-text-warning">orogoldspa@orogold.com</p>
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <button>Reserva ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;