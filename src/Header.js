import React, { Component } from 'react';
import LMDA from './Images/LaMaisonDesArtistes.png';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="Header">

                <div className="divLMDA">
                    <NavLink to="/Accueil"><img src={LMDA} alt="logo" className="LMDA" /></NavLink>
                </div>
                <div className="divLiens">
                    <NavLink to="/Accueil" className="Liens">HOME</NavLink>
                    <NavLink to="/Presentation" className="Liens">PREZ</NavLink>
                    <NavLink to="/Produits" className="Liens">PRODUITS</NavLink>
                    <NavLink to="/Createurs" className="Liens">CREATEURS</NavLink>
                    <NavLink to="/Contact" className="Liens">CONTACT</NavLink>


                </div>
            </div>

        )
    }
};

export default Header;