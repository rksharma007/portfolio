import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../CSS/stars.css';
import rag from '../../assets/certificates/rag.jpg';
import python from '../../assets/certificates/python.jpg';
import jenkins from '../../assets/certificates/jenkins.jpg';
import mern from '../../assets/certificates/mern.jpg';
import javascript from '../../assets/certificates/javascript.jpg';
import kafka_springboot from '../../assets/certificates/kafka_springboot.jpg';
import StarBg from '../layout/StarBg';
import CertificateCard from './CertificateCard';

const Certificate = () => {
  return (
    <Container className="project">
        <StarBg />
        <Container className='project-content'>
            <h1 style={{ fontSize: "2.4rem" }}>
                Courses, Competitions. Hence,<b className="highlight"> Certificates </b>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={rag}
                    isBlog={false}
                    title="Retreival-Augmented Generation (RAG)"
                    skills="RAG, Vector Databases, LangChain"
                    url="https://www.udemy.com/certificate/UC-d8a3bf8f-5fd3-4e41-9f16-ff62fa31bb57"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={jenkins}
                    isBlog={false}
                    title="Jenkins"
                    skills="Jenkins, CI/CD"
                    url="https://www.udemy.com/certificate/UC-23d7659c-3772-4d65-994f-97aa8f894741/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={kafka_springboot}
                    isBlog={false}
                    title="Apache Kafka with SpringBoot"
                    skills="Kafka, SpringBoot, Microservices"
                    url="https://udemy.com/certificate/UC-ae468373-4b0a-4963-87bb-e3445389655d"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={mern}
                    isBlog={false}
                    title="MERN Stack: Fullstack with Redux"
                    skills="MongoDB, ExpressJS, ReactJS, NodeJS, ReduxJS"
                    url="https://www.udemy.com/certificate/UC-c7700e77-718e-453b-81fe-440d0bfed8fc/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={python}
                    isBlog={false}
                    title="Python"
                    skills="Python Programming, Scripting"
                    url="https://www.coursera.org/account/accomplishments/certificate/ZL34YXNN96EW"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <CertificateCard
                    imgPath={javascript}
                    isBlog={false}
                    title="Server-side JavaScript with Node.js"
                    skills="JavaScript, Node.js, File Systems, Mocha, Chai"
                    url="https://www.coursera.org/account/accomplishments/certificate/K3PP47M246HD"
                    />
                </Col>

            </Row>
        </Container>
    </Container>
  )
};

export default Certificate;
