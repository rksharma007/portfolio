import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import dtuhostel from '../../assets/projects/dtuhostel.png';
import facemask from '../../assets/projects/facemask.png';
import gharbar from '../../assets/projects/gharbar.png';
import iqac from '../../assets/projects/iqac.png';
import portfolio from '../../assets/projects/portfolio.png';
import taskifier from '../../assets/projects/taskifier.png';
import '../../CSS/stars.css';
import StarBg from '../layout/StarBg';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <Container className="project">
        <StarBg />
        <Container className='project-content'>
            <h1 style={{ fontSize: "2.4rem" }}>
                My Recent <b className="highlight"> Works </b>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={portfolio}
                    isBlog={false}
                    title="Portfolio"
                    stack="React, Bootstrap"
                    description= "My portfolio. Built using ReactJs, CSS3, Bootstrap5 and lots of ❤️ love."
                    ghLink="https://github.com/rksharma007/portfolio"
                    demoLink="https://rksharma.tech/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={gharbar}
                    isBlog={false}
                    title="GharBar"
                    stack="MERN, Redux, Razorpay"
                    description="Ghar-Bar is an authenticated, user-friendly hotel & bar booking website based on the MERN Stack and uses Redux for state management. The website is integrated with Razorpay API for payments."
                    demoLink="https://gharbar.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={dtuhostel}
                    isBlog={false}
                    title="DTU Hostels"
                    stack="MERN, Redux, Razorpay"
                    description="DTU-Hostels is an authenticated, user-friendly hostel management website based on the MERN Stack and Redux.
                    Students and Admins can manage all their hostel activities like applications, complaints, mess, payments and notices."
                    demoLink="https://dtuhostel.netlify.app/"           
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={taskifier}
                    isBlog={false}
                    title="Taskifier"
                    stack="MERN, Redux, MUI"
                    description="Taskifier is a web-based authenticated task manager based on the MERN Stack, powered with Redux and deployed using Render and Netlify. Multiple users can log in simultaneously to the user-friendly UI and manage their daily tasks."
                    ghLink="https://github.com/rksharma007/taskifier-mern-stack"
                    demoLink="https://taskifier.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={facemask}
                    isBlog={false}
                    title="Face Mask Door Lock"
                    stack="Python, OpenCV, Raspberry, ML"
                    description="Using Computer Vision for the face mask detection to facilitate automatic door opening and closing system that can be implemented over Raspberry PI and Stepper Motor."
                    ghLink="https://github.com/rksharma007/Face_Mask_Detection_Based_Door_Lock"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={iqac}
                    isBlog={false}
                    title="IQAC DTU"
                    stack="HTML, CSS, JavaScript, Bootstrap"
                    description="IQAC DTU is a website based on HTML5, CSS3, JavaScript and Bootstrap5 for my University's Internal Quality Assurance Cell. It is facilitated using AOS library for smooth scrolling animations."
                    // ghLink="https://github.com/rksharma007/rk-iqac-website"
                    demoLink="https://dtuiqacdemo.netlify.app/"
                    />
                </Col>
            </Row>
        </Container>
    </Container>
  )
};

export default Project;