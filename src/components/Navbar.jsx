import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ASHPAY</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/how-it-works">How it Works</Link>
        <Link to="/legal">Legal</Link>
         <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
