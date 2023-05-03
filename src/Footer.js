import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <h3>Exomac</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footer-center">
        <h3>Address</h3>
        <div>
          <i className="fa fa-map-marker"></i>
          <p>1234 Street Name, City Name</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+1 1234 5678</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:info@exomac.com">info@exomac.com</a></p>
        </div>
      </div>
      <div className="footer-right">
        <h3>Follow us</h3>
        <div className="footer-icons">
          <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
          <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Exomac. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;