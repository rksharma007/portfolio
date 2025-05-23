import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillHtml5 } from "react-icons/ai";
import { DiJava, DiGit, DiJavascript, DiPython, DiReact } from "react-icons/di";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiApachecassandra, SiPostgresql, SiCouchbase, SiApachekafka, SiSpring, SiCplusplus, SiExpress, SiIfttt, SiMongodb, SiMysql, SiOpencv, SiRedux } from "react-icons/si";
import { TbWebhook, TbBrandNextjs } from "react-icons/tb";

const Techstack = () => {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={1} md={2} className="tech-icons" title="C++"><SiCplusplus /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Python"><DiPython /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Java"><DiJava /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Spring"><SiSpring /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Apache Kafka"><SiApachekafka /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Couchbase"><SiCouchbase /></Col>
        <Col xs={1} md={2} className="tech-icons" title="PostgreSQL"><SiPostgresql /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Apache Cassandra"><SiApachecassandra /></Col>
        <Col xs={1} md={2} className="tech-icons" title="HTML5"><AiFillHtml5 /></Col>
        <Col xs={1} md={2} className="tech-icons" title="CSS3"><IoLogoCss3 /></Col>
        <Col xs={1} md={2} className="tech-icons" title="JavaScript"><DiJavascript /></Col>
        <Col xs={1} md={2} className="tech-icons" title="MongoDB"><SiMongodb /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Express.js"><SiExpress /></Col>
        <Col xs={1} md={2} className="tech-icons" title="React"><DiReact /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Node.js"><IoLogoNodejs /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Next.js"><TbBrandNextjs /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Redux"><SiRedux /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Git"><DiGit /></Col>
        <Col xs={1} md={2} className="tech-icons" title="MySQL"><SiMysql /></Col>
        <Col xs={1} md={2} className="tech-icons" title="IFTTT"><SiIfttt /></Col>
        <Col xs={1} md={2} className="tech-icons" title="Webhooks"><TbWebhook /></Col>
        <Col xs={1} md={2} className="tech-icons" title="OpenCV"><SiOpencv /></Col>
    </Row>
)};
    
export default Techstack;
