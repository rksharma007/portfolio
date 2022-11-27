import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../layout/Particle';
import Home2 from './Home2';

const Home = () => {
  return (

    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div>Home</div>
      </Container>
      <Home2 />
    </section>
    
  )
};

export default Home;