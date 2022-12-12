import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SiAdobeillustrator, SiAdobexd, SiGithub, SiHeroku, SiLinux, SiNetlify, SiPostman, SiVercel, SiVisualstudiocode } from "react-icons/si";

const Toolstack = () => {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={2} className="tech-icons"><SiGithub/></Col>
        <Col xs={1} md={2} className="tech-icons"><SiLinux/></Col>
        <Col xs={1} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiAdobeillustrator /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiAdobexd /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiPostman /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiHeroku /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiNetlify /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiVercel /></Col>
        
    </Row>
)};
    
export default Toolstack;