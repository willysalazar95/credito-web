import React from 'react';
import './Slider.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logoImg  from './fondo4.png'
import logoImg1  from './fondo2.png'
import logoImg2  from './fondo3.png'

function Sliders() {
  const settings = {
    dots: false, // aquí deshabilitamos la visualización de los botones de navegación
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider__container">
      <Slider {...settings}>
        <div className="slider__item">
        <div className="logo">
          <img src={logoImg} alt="Logo de mi sitio web" />
        </div>
          <div className="slider__caption">
            <h2>Designing awesome brands & experiences </h2>
            <p>We are an agency located in New York. We think strategy, craft design,develop digital and create motion. To forward your brand and business.</p>
            <button class="slider__button"><span>Ver más</span></button>
          </div>
        </div>
        <div className="slider__item">
        <div className="logo">
          <img src={logoImg1} alt="Logo de mi sitio web" />
        </div>
          <div className="slider__caption">
          <h2>Designing awesome brands & experiences </h2>
            <p>We are an agency located in New York. We think strategy, craft design,develop digital and create motion. To forward your brand and business.</p>
            <button class="slider__button"><span>Ver más</span></button>
          </div>
        </div>
        <div className="slider__item">
        <div className="logo">
          <img src={logoImg2} alt="Logo de mi sitio web" />
        </div>
          <div className="slider__caption">
          <h2>Designing awesome brands & experiences </h2>
            <p>We are an agency located in New York. We think strategy, craft design,develop digital and create motion. To forward your brand and business.</p>
            <button class="slider__button"><span>Ver más</span></button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
    

export default Sliders;