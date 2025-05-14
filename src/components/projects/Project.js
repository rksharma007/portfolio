import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../CSS/stars.css';
import astrovajra from '../../assets/projects/astrovajra.png';
import dtuhostel from '../../assets/projects/dtuhostel.png';
import exceltoppt from '../../assets/projects/exceltoppt.png';
import facemask from '../../assets/projects/facemask.png';
import fanfinity from '../../assets/projects/fanfinity.png';
import gharbar from '../../assets/projects/gharbar.png';
import iqac from '../../assets/projects/iqac.png';
import portfolio from '../../assets/projects/portfolio.png';
import quickreel from '../../assets/projects/quickreel.png';
import taskifier from '../../assets/projects/taskifier.png';
import esp32home from '../../assets/projects/esp32home.png';
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
                    imgPath={fanfinity}
                    isBlog={false}
                    title="FanFinity"
                    stack="Python, OpenCV, MobileNet SSD"
                    description= "Multi-matrix fan automation system based on human detection in marked areas. Just mark the areas covered by different fans and let the app handle the rest."
                    ghLink="https://github.com/rksharma007/FanFinity"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={exceltoppt}
                    isBlog={false}
                    title="Excel to PPT"
                    stack="Flask, Python, Matplotlib, Pandas"
                    description= "Upload an excel, get a PPT with tables and charts within few seconds. Excellent for visualising online Forms response excel sheets."
                    demoLink="https://excel-to-ppt.onrender.com/"
                    ghLink="https://github.com/rksharma007/Excel-to-PPT"
                    />
                </Col>
                      
                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={astrovajra}
                    isBlog={false}
                    title="AstroVajra"
                    stack="MERN, Hooks, GraphQL, MUI"
                    description= "A space shooter game utilizing its scenes from 1979 Atari game Asteroids; incorporated with different difficulty levels and global leaderboard for competitive advantage."
                    demoLink="https://astrovajra.onrender.com/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={quickreel}
                    isBlog={false}
                    title="Quickreel"
                    stack="MERN, Redux, Framer, Stripe, AWS"
                    description= "An AI-powered platform for creators to transform their podcasts into logical short clips automatically. Create engaging and high quality clips from your podcast with one click."
                    demoLink="https://quickreel.io/"
                    />
                </Col>

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
                    imgPath={esp32home}
                    isBlog={false}
                    title="ESP32 Home Automation"
                    stack="ESP32, IFTTT, Webhooks, Blynk"
                    description="Control appliances wirelessly using custom voice commands from anywhere in the world; using ESP32 microcontroller, Blynk, Webhooks, IFTTT and Voice Assistant."
                    ghLink="https://github.com/rksharma007/ESP32_Based_Google_Home_Assistant"
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
