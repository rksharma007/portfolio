import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeLogo from '../../assets/phoenix-laptop.png';
import '../../CSS/glitch.css';
import '../../CSS/stars.css';
import Home2 from './Home2';
import TypeWriter from './Typewriter';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}

        <div class="bg"></div>
        <div class="star-field">
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>

        <Container className=" home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15}} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1> */}

              <h1 className="heading-name">
                <div className="glitch-wrapper">
                  <div className="glitch" data-glitch="R K SHARMA">R K SHARMA</div>
                </div>
              </h1>

              <div style={{paddingLeft: '50px', textAlign: "left" }}>
                <TypeWriter />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid homelogo"
                style={{maxHeight: "550px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
};

export default Home;