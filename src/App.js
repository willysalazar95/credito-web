import './App.css';
import Menu from './Menu';
import Slider from './Slider.js';
import './Slider.css';
import AboutUs from './AboutUs.js';
import './AboutUs.css';
import Trabajos from './Trabajos.js';
import './Trabajos.js';
import Footer from './Footer';
import './Footer.js';
import Contactos from './Contacto.js';
import './Contacto.css';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <div className="slider-container">
        <Slider />
      </div>
      <div className="about-us-container">
        <AboutUs />
      </div>
      <div className="services-container">
        <Trabajos />
      </div>
      <div className="contact-container">
        <Contactos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
