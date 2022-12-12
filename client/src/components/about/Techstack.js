import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillHtml5 } from "react-icons/ai";
import { DiGit, DiJavascript, DiPython, DiReact } from "react-icons/di";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiCplusplus, SiExpress, SiIfttt, SiMongodb, SiMysql, SiOpencv, SiRedux } from "react-icons/si";
import { TbWebhook } from "react-icons/tb";

const Techstack = () => {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={2} className="tech-icons"><SiCplusplus /></Col>
        <Col xs={1} md={2} className="tech-icons"><DiPython /></Col>
        <Col xs={1} md={2} className="tech-icons"><AiFillHtml5 /></Col>
        <Col xs={1} md={2} className="tech-icons"><IoLogoCss3 /></Col>
        <Col xs={1} md={2} className="tech-icons"><DiJavascript /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiMongodb /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiExpress /></Col>
        <Col xs={1} md={2} className="tech-icons"><DiReact /></Col>
        <Col xs={1} md={2} className="tech-icons"><IoLogoNodejs /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiRedux /></Col>
        <Col xs={1} md={2} className="tech-icons"><DiGit /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiMysql /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiIfttt /></Col>
        <Col xs={1} md={2} className="tech-icons"><TbWebhook /></Col>
        <Col xs={1} md={2} className="tech-icons"><SiOpencv /></Col>
    </Row>
)};
    
export default Techstack;
