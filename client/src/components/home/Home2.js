import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tilt from 'react-parallax-tilt';
import myImg from '../../assets/export2.png';

const Home2 = () => {
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1 style={{ fontSize: "2.4rem" }}>
            LET ME <span className="highlight"> INTRODUCE </span> MYSELF
          </h1>
        </Row>
        <Row>
        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{maxHeight:"350px"}}/>
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I fell in love with programming, and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="highlight"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of interest is building new &nbsp;
              
                <b className="highlight"><i>Web Technologies and Products </i></b> and
                also in areas related to{" "}
                <b className="highlight">
                  <i>Deep Learning and Natural Launguage Processing.</i>
                </b>
              <br />
              <br />
              I also apply my passion for developing products with
              <b className="highlight"> <i>Node.js</i></b> and
              <i>
                <b className="highlight">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              
                <b className="highlight"> <i>React.js</i></b>  and <b className='highlight'><i> Next.js</i></b>
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{fontSize:"2.4rem"}}>FIND ME ON</h1>
            <p>Feel free to <span className="highlight">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/rksharma007" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/ravi-kant-sharma-a37924200/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://facebook.com/ravikantsharma07" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/rksharma3837" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" >
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
};

export default Home2;