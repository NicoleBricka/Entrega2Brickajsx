import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <h3 className="navbar-title">Delicias Mayoristas</h3>
            <div className="navbar-buttons">
            <Link to="/" className="navbar-button">Inicio</Link>
                <Link to="/category/frutas" className="navbar-button">Frutas</Link>
                <Link to="/category/verduras" className="navbar-button">Verduras</Link>
                <Link to="/category/bebidas" className="navbar-button">Bebidas</Link>
                <Link to="/category/snacks" className="navbar-button">Snacks</Link>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;