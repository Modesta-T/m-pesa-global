import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "../App.css";

function Register() {
  const { translations } = useContext(LanguageContext);
  // rest unchanged

  return (
    <section className="subscription-container">
      <h2 className="subscription-title text-center">{translations.register.title}</h2>
      <form onSubmit={handleSubmit} className="send-form">
        <input
          type="text"
          name="fullName"
          placeholder={translations.register.fullName}
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder={translations.register.phone}
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder={translations.register.email}
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <div>
          <label>
            {translations.register.passportLabel}
            <input
              type="file"
              name="passport"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="input-field mt-2"
            />
          </label>
        </div>
        <div>
          <label>
            {translations.register.visaLabel}
            <input
              type="file"
              name="visa"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="input-field mt-2"
            />
          </label>
        </div>
        <button type="submit" className="btn-primary">
          {translations.register.submit}
        </button>
      </form>
    </section>
  );
}

export default Register;
