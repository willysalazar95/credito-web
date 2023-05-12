import React from 'react';
import './Contacto.css';

function Header() {
  return (
    <div className="section-titlee">
      <h2>Somos una empresa creativa de servicio completo.</h2>
      <p>Nuestro equipo de diseñadores, desarrolladores y creativos son perfeccionistas que aman lo que hacen y aman el lugar donde trabajan.</p>
    </div>
  );
}

function Contactos() {
  return (
    <div>
      <Header />
      
      <div id="contac" className="contact-container">
        <div className="contact-card">
          <h3 className="card-title">Nuestras Ubicaciones</h3>
          <p>110 W 34th St, NYC.</p>
          <p>67 Madison Avenue.</p>
        </div>
        <div className="contact-card">
          <h3 className="card-title">Llámanos</h3>
          <p>(+1) 212-946-2701</p>
          <p>(+1) 212-946-2702</p>
        </div>
        <div className="contact-card">
          <h3 className="card-title">Help Desk</h3>
          <p>hello@hasthemes.com</p>
          <p>sales@hasthemes.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contactos;