import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
    <Row>
      <Col md="4" className="footer-copyright">
        <h6>Designed and Developed with <b className='highlight'><i className=' fa fa-heart'></i></b> by R K Sharma</h6>
      </Col>
      <Col md="4" className="footer-copyright">
        <h6>Copyright © {year} RK</h6>
      </Col>
      <Col md="4" className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/rksharma007"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-github' />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ravi-kant-sharma-a37924200/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-linkedin'/>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.facebook.com/ravikantsharma07"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-facebook' />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/rksharma3837"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className='fa-brands fa-instagram' />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
  )
};

export default Footer;
