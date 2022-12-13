import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';

import './CSS/App.css';
import './CSS/style.css';

import About from './components/about/About';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import NavbarMain from './components/layout/NavbarMain';
import PreLoader from './components/layout/PreLoader';
import Resume from './components/resume/Resume';

const App = () => {

  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <PreLoader load={load} /> */}
      {load && <PreLoader/>}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
