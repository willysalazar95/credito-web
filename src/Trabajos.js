import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Trabajos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPalette, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div>
          <div id="serv" className="service-titulo_sub">
          <h2>En estas tecnologías te podemos ayudar</h2>
          <p>Las innovaciones tecnológicas más prometedoras para el futuro: de la realidad aumentada al internet de las cosas</p>
          </div>
          <div className="services-container">
            <Card className="service-card">
              <Card.Body>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faDesktop} size="2x" style={{ color: '#1292EE' }} />
                </div>
                <Card.Title>Apps</Card.Title>
                <Card.Text>
                  First impressions count! Make sure your brand works for you. We offer digital marketing.
                </Card.Text>
                <Button variant="primary" className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="service-card">
              <Card.Body>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faPalette} size="2x" style={{ color: '#1292EE' }} />
                </div>
                <Card.Title>UX Design</Card.Title>
                <Card.Text>
                  First impressions count! Make sure your brand works for you. We offer digital marketing.
                </Card.Text>
                <Button variant="primary" className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="service-card">
              <Card.Body>
                <div className="icon-container">
                  <FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: '#1292EE' }} />
                </div>
                <Card.Title>Sistema web</Card.Title>
                <Card.Text>
                  First impressions count! Make sure your brand works for you. We offer digital marketing.
                </Card.Text>
                <Button variant="primary" className="learn-more-btn">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
export default Services;