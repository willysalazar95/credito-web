import React from 'react';
import './Personas.css';
import imagen1 from './imagesteam-1.png';
import imagen2 from './imagesteam-2.png';
import imagen3 from './imagesteam-3.png';
import imagen4 from './imagesteam-4.png';

const Personas = () => {
  return (
    <div>
      <div className="container-texto">
      <h2>Nuestro equipo más calificado</h2>
      <p>Obtenga la dirección correcta para su empresa con nuestros mejores profesionales.</p>
      </div>
      <div className="persona-container">
        <div className="persona-card">
          <img src={imagen1} alt="App" className="card-img-top" />
          <div className="card-text">
            <h4>Kasahara May</h4>
            <p>Project manager</p>
          </div>
        </div>
        <div className="persona-card">
          <img src={imagen2} alt="App" className="card-img-top" />
          <div className="card-text">
            <h4>Dollie Horton</h4>
            <p>Marketing</p>
          </div>
        </div>
        <div className="persona-card">
          <img src={imagen3} alt="App" className="card-img-top" />
          <div className="card-text">
            <h4>Maggie Strickland</h4>
            <p>Financial Services</p>
          </div>
        </div>
        <div className="persona-card">
          <img src={imagen4} alt="App" className="card-img-top" />
          <div className="card-text">
            <h4>Monica Blews</h4>
            <p>Project manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personas;