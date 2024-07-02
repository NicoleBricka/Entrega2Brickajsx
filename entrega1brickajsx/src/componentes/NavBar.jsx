import React from "react";
import './NavBar.css'; 
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <h3 className="navbar-title">Delicias Mayoristas</h3>
            <div className="navbar-buttons">
                <button className="navbar-button">Inicio</button>
                <button className="navbar-button">Productos</button>
                <button className="navbar-button">Contacto</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;