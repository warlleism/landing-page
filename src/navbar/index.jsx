import React from "react";
import './style.css'

const Navebar = () => {
    return (
        <div className="nav-bar">
            <h1>Lorem University</h1>
            <ul>
                <li>Início</li>
                <li>Bacharelado</li>
                <li>Mestrado</li>
                <li>Sobre</li>
            </ul>
            <div className="botao">Contato</div>
        </div>
    )
}

export default Navebar;