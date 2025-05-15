import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { SiArduino, SiRaspberrypi, SiKubernetes, SiPycharm, SiDbeaver, SiDocker, SiIntellijidea, SiAdobeillustrator, SiGithub, SiHeroku, SiLinux, SiNetlify, SiPostman, SiVercel } from "react-icons/si";
import { DiOpenshift } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

const Toolstack = () => {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={2} className="tech-icons" title="GitHub"><SiGithub /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Linux"><SiLinux /></Col>
        <Col xs={1} md={2} className="tech-icons" title="VS Code"><BiLogoVisualStudio /></Col>
        <Col xs={1} md={2} className="tech-icons" title="IntelliJ IDEA"><SiIntellijidea /></Col>
        <Col xs={1} md={2} className="tech-icons" title="PyCharm"><SiPycharm /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Docker"><SiDocker /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Kubernetes"><SiKubernetes /></Col>
        <Col xs={1} md={2} className="tech-icons" title="OpenShift"><DiOpenshift /></Col>
        <Col xs={1} md={2} className="tech-icons" title="DBeaver"><SiDbeaver /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Adobe Illustrator"><SiAdobeillustrator /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Raspberry Pi"><SiRaspberrypi /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Arduino"><SiArduino /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Postman"><SiPostman /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Heroku"><SiHeroku /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Netlify"><SiNetlify /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Vercel"><SiVercel /></Col>
    </Row>
)};
    
export default Toolstack;