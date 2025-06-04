import React, { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";

const Settings = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.className = darkMode ? "light" : "dark";
  };

  return (
    <div className="settings-page">
      <h2>{t("settings")}</h2>

      <div className="setting-option">
        <label>{t("language")}: </label>
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option>English</option>
          <option>French</option>
        </select>
      </div>

      <div className="setting-option">
        <label>{t("dark_mode")}: </label>
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      </div>

      <button>{t("logout")}</button>
    </div>
  );
};

export default Settings;
