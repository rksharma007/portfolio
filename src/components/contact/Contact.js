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
                            <Col md={8} xs={8} style={{marginTop: "30px", fontSize: "1.7rem"}} align="left">
                                <a href="https://facebook.com/ravikantsharma07" target="_blank" rel="noreferrer"  >
                                    <i className="fa-brands fa-facebook" />
                                </a>&nbsp;&nbsp;
                                <a href="https://www.instagram.com/rksharma3837" target="_blank" rel="noreferrer" >
                                    <i className="fa-brands fa-instagram" />
                                </a>&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/ravi-kant-sharma-a37924200/" target="_blank" rel="noreferrer"  >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                            </Col>
                            <Col md={4} xs={4} align="right">
                                <input type="submit" disabled={state.submitting} className="btn btn-outline-info" value="Submit" style={{marginTop: "30px"}}/>
                            </Col>
                        </Row>
                        <Row>
                            {state.succeeded && <><b className='highlight' style={{fontWeight: "400"}}>Thanks! Will get back to you soon!</b></>}
                        </Row>
                    </form>
                </Col>
                <Col md={7} className="contact-description"> 
                    <Tilt><img src={logo} alt="logo" className="contact-logo" style={{maxHeight: "400px"}} /></Tilt>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Contact;