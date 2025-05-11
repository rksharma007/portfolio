import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../CSS/stars.css';
import StarBg from '../layout/StarBg';
import IllustrationCard from './IllustrationCard';

const illustrationsPath = require.context('../../assets/illustrations', false, /\.png$/);
const images = illustrationsPath.keys().map(illustrationsPath);

const Illustration = () => {
  return (
    <Container className="illustration">
        <StarBg />
        <Container className='illustration-content'>
            <h1 style={{ fontSize: "2.4rem" }}>
                I Used to <b className="illustration-highlight"> Illustrate </b>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
                {images.map((imgPath, index) => (
                  <Col md={4} className="illustration-card" key={index}>
                      <IllustrationCard imgPath={imgPath} />
                  </Col>
                ))}
            </Row>
        </Container>
    </Container>
  );
};

export default Illustration;
