import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages';
import HowItWorks from './pages/HowItWorks';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Feature />} />
      </Routes>
    </Router>
  );
}

export default App;
