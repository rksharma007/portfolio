import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import './CSS/App.css';

import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import PreLoader from './components/layout/PreLoader';

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
      <PreLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
