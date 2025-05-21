import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './CSS/App.css';
import './CSS/style.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Illustration from './components/illustrations/Illustration';
import Footer from './components/layout/Footer';
import NavbarMain from './components/layout/NavbarMain';
import PreLoader from './components/layout/PreLoader';
import Project from './components/projects/Project';
import Resume from './components/resume/Resume';
import Certificate from './components/certificates/Certificate';

const App = () => {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      {/* <PreLoader load={load} /> */}
      {load && <PreLoader/>}
      <NavbarMain />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/illustration' element={<Illustration />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='*' element={<Navigate to='/'/>} /> */}
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
