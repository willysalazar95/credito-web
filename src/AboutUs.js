import React from "react";
import "./AboutUs.css";
import imgAboutUs from "./aboutus.jpg";
import imgTeam from "./aboutus2.jpg";

function AboutUs() {
  return (
    <div className="aboutus">
      <div className="aboutus__header">
        <h2>Somos una agencia creativa de servicio completo.</h2>
        <p>Nuestro equipo de diseñadores, desarrolladores y creativos son perfeccionistas que aman lo que hacen y aman</p>
      </div>
      <div className="aboutus__content">
        <div className="aboutus__img-container">
          <img src={imgAboutUs} alt="Imagen de About Us" />
        </div>
        <div className="aboutus__img-container">
          <img src={imgTeam} alt="Imagen de About Us" />
        </div>
        <div className="aboutus__text">
          <p>Cada día trae nuevos desafíos</p>
          <p>Agencia creativa enfocada en visión, producto y personas</p>
          <p>Somos audazmente individuales, siempre originales y refrescantemente tranquilos. Nuestra visión, pasión e ideas se combinan con el enfoque, la experiencia y el estilo.</p>
        </div>
        
      </div>
    </div>
  );

}
export default AboutUs;