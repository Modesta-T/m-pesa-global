import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";


const Navbar = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <h1>{translations.appName}</h1>
      <ul>
        <li><Link to="/">{translations.home}</Link></li>
        <li><Link to="/admin">{translations.admin}</Link></li>
        <li><Link to="/register">{translations.register}</Link></li>
        <li><Link to="/subscribe">{translations.subscribe}</Link></li>
        <li><Link to="/send">{translations.payment}</Link></li>
        <li><Link to="/balance">{translations.balance}</Link></li>
        <li><Link to="/settings">{translations.settings}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
