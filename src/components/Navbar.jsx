// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>AshPay</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/subscribe">Subscribe</Link></li>
      <li><Link to="/send">Payment</Link></li>
      <li><Link to="/balance">Balance</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
  </nav>
);

export default Navbar;
