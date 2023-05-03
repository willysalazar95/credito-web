import React from 'react';
import './Contacto.css';

function Header() {
  return (
    <div className="section-title">
      <h2>Somos una empresa creativa de servicio completo.</h2>
      <h3>Nuestro equipo de diseñadores, desarrolladores y creativos son perfeccionistas que aman lo que hacen y aman el lugar donde trabajan.</h3>
    </div>
  );
}

function Contactos() {
  return (
    <div>
      <Header />
      <div className="contact-container">
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