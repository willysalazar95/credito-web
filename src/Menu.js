import React, { useState } from 'react';
import './Menu.css';
import logoImg  from './logo.png'

function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className={isOpen ? 'menu--open' : ''}>
          <div className="logo">
            <img src={logoImg} alt="Logo de mi sitio web" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#Nosot">Nosotros</a></li>
            <li><a href="#Equi">Equipo</a></li>
            <li><a href="#serv">Servicio</a></li>
            <li><a href="#contac">Contacto</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Menu;