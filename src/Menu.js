import React, { useState } from 'react';
import './Menu.css';
import logoImg  from './logo.png'

function Menu() {

  return (
    <header>
  <div class="container">
    <nav>
    <div className="logo">
          <img src={logoImg} alt="Logo de mi sitio web" />
        </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="menu-icon">
        <div class="menu-icon__line"></div>
        <div class="menu-icon__line"></div>
        <div class="menu-icon__line"></div>
      </div>
    </nav>
  </div>
</header>
  );
}

export default Menu;