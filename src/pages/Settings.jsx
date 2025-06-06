import React, { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";

const Settings = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.className = newMode ? "dark" : "light";
  };

  return (
    <section className="subscription-container">
      <h2 className="subscription-title text-center">{translations.settings}</h2>

      <div className="send-form">
        <div className="setting-option">
          <label className="label-block">{translations.language}:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="input-field"
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="zh">Chinese</option>
            <option value="ko">Korean</option>
            <option value="es">Spanish</option>
            <option value="ar">Arabic</option>
            <option value="hi">Hindi</option>
            <option value="de">German</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>

        <div className="setting-option mt-4">
          <label className="label-block">{translations.dark_mode}:</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="input-field"
          />
        </div>

        <button className="btn-primary mt-6">{translations.logout}</button>
      </div>
    </section>
  );
};

export default Settings;
