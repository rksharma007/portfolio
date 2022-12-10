import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import homeLogo from '../../assets/home-logo.svg';
import '../../CSS/glitch.css';
import '../../CSS/stars.css';
import Home2 from './Home2';
import TypeWriter from './Typewriter';

const Home = () => {
  return (
    <section className="container" >
      <div id="home">

        <div class="bg"></div>
          <div class="star-field">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
        </div>
        
        <div className="container home-content">
          <Row className='home-row'>

            <Col className='home-col'>
              <div className="home-header">
                <h1>
                  <div className="glitch-wrapper">
                    <div className="glitch" data-glitch="R K SHARMA">R K SHARMA</div>
                  </div>
                </h1>
                <div className="typewriter">
                  <TypeWriter />
                </div>
              </div>
            </Col>

            <Col className='home-col'>
              <img src={homeLogo} alt="logo" className="home-logo" style={{maxHeight: "500px"}} />
            </Col>
            
          </Row>
        </div>
      </div>
      <Home2 />
    </section>
  )
};

export default Home;