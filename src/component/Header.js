import React from "react";
import "../css/header.css"
function Header() {
    return (


        <div id="headerContainer">
            <h1 id="title">Vuelta al mundo</h1>
            <nav id="navContainer">
                <a className="navButton" href="#">primero</a>
                <a className="navButton" href="#">segundo</a>
                <a className="navButton" href="#">tercero</a>
            </nav>
        </div>


    );
}

export default Header;

