import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tilt from 'react-parallax-tilt';
import myImg from '../../assets/export2.png';
import '../../CSS/stars.css';
import StarBg from '../layout/StarBg';
import Github from './Github';
import Stats from './Stats';
import Techstack from './Techstack';
import Toolstack from './Toolstack';

const About = () => {
  return (
    <Container id="about" className='about'>
        <StarBg/>
        
        <Container className='about-content'>
          <Row>
            <h1 style={{ fontSize: "2.4rem" }}>
              Know Who <span className="highlight"> I'm </span>
            </h1>
          </Row>
          <Row>
            <Col md={5} className="myAvtar">
              <Tilt><img src={myImg} className="img-fluid" alt="avatar" style={{maxHeight:"350px"}}/></Tilt>
            </Col>
            <Col md={7} className="about-description">
              
              <Row>
                <Col md={9}>
                <Row className='about-tagline'><h5 >EAT <b className="highlight"> {"<CODE/>"}</b> SLEEP REPEAT</h5></Row>
                  <p className="about-body">
                    I'm a passionate programmer, who is always looking for new challenges to improve myself,
                    also a team player, who is always ready to learn new things and help others.
                    <br /><br />
                    My field of interest is building new&nbsp;
                    <b className="highlight"><i>Web Technologies and Products </i></b> and also in areas related to{" "}
                    <b className="highlight"><i>Deep Learning and Natural Launguage Processing.</i></b>
                    <br /><br />
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className='project-heading'>
          <Row><h1>Professional <b className='highlight'> Skillset</b></h1></Row>
          <Techstack/>
        </Container>

        <Container className='project-heading'>
          <Row><h1><b className='highlight'>Tools</b> I Use</h1></Row>
          <Toolstack/>
        </Container>

        <Container className='project-heading'>
          <Row><h1>Days I<b className='highlight'> Code</b></h1></Row>
          <Stats />
        </Container>

        <Container className='project-heading'>
          <Row><h1>Days I<b className='highlight'> Commit</b></h1></Row>
          <Github />
        </Container>
    </Container>
  )
};

export default About;