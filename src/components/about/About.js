import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../CSS/stars.css';
import StarBg from '../layout/StarBg';
import Github from './Github';
import Skills from './Skills';
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
            <Col md={5} align="center">
              <Skills />
            </Col>
            <Col md={7} className="about-description">
              
              <Row>
                <Col md={9}>
                <Row className='about-tagline'><h5 >EAT <b className="highlight"> {"<CODE/>"}</b> SLEEP REPEAT</h5></Row>
                  <div className="about-body">
                    I'm a passionate programmer, who is always looking for new challenges to improve myself,
                    also a team player, who is always ready to learn new things and help others.
                    <br /><br />
                    Currently pursuing Bachelor of Technology - B.Tech focused in Software Engineering from Delhi Technological University (Formerly DCE).&nbsp;
                    <br /><br />
                    Completed two<b className="highlight"><i> Web Development Internships </i></b>
                    and worked on several{" "}
                    <b className="highlight"><i>Freelancing Projects.</i></b>
                  </div>
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