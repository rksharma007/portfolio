import { useForm, ValidationError } from '@formspree/react';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from 'react-parallax-tilt';
import logo from '../../assets/contact-01.svg';
import StarBg from '../layout/StarBg';

const Contact = () => {
    const [state, handleSubmit] = useForm("xzbwnqwg");
    // if (state.succeeded) {
    //     return <p>Thanks! Will get back to you soon!</p>;
    // }
  return (
    <Container>
        <StarBg />

        <Container className='contact-content'>

            <Row>
                <h1 style={{ fontSize: "2.4rem" }}>
                Get In <span className="highlight">Touch </span>
                </h1>
            </Row>

            <Row>
                <Col md={5} align="center">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <Row>
                            <input id="email" type="email" name="email" placeholder="Email"/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </Row>
                        <Row>
                            <textarea id="message" name="message" placeholder='Hello RK! How are you?' style={{marginTop: "30px"}}/>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </Row>
                        <Row>
                            <Col md={8}>
                            {state.succeeded && <b className='highlight'>Thanks! Will get back to you soon!</b>}
                            </Col>
                            <Col md={4}>
                                <input type="submit" disabled={state.submitting} className="btn btn-outline-info" value="Submit"  style={{marginTop: "30px"}}/>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <Col md={7} className="contact-description"> 
                    {/* <Row>
                        <Col md={9}>
                            <Row></Row>
                            <div className="about-body">
                                I'm a passionate programmer, who is always looking for new challenges to improve myself,
                                also a team player, who is always ready to learn new things and help others.
                                <br /><br />
                                My field of interest is building new&nbsp;
                                <b className="highlight"><i>Web Technologies and Products </i></b> and also in areas related to{" "}
                                <b className="highlight"><i>Deep Learning and Natural Launguage Processing.</i></b>
                                <br /><br />
                            </div>
                        </Col>
                    </Row> */}
                    <Tilt><img src={logo} alt="logo" className="contact-logo" style={{maxHeight: "400px"}} /></Tilt>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Contact;