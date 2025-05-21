import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../CSS/stars.css';
import rag from '../../assets/certificates/rag.jpg'
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

            </Row>
        </Container>
    </Container>
  )
};

export default Certificate;
