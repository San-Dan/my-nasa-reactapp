import React from "react";
import logo from "../../nasa-logo.png";
import { Link } from "@reach/router";
import "./menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <img src={logo} className="logo" alt="Nasa Logo" />
            <Link to="/">Start</Link>
        </div>
    );
};

export default Menu;
