import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "../App.css";

function Register() {
  const { translations } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    passport: null,
    visa: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(translations.alertSuccess || "Registration submitted!");
    // Submit data to backend later
  };

  return (
    <section className="subscription-container">
      <h2 className="subscription-title text-center">
        {translations.title || "Register"}
      </h2>

      <form onSubmit={handleSubmit} className="send-form">
        <input
          type="text"
          name="fullName"
          placeholder={translations.fullName || "Full Name"}
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={translations.phone || "Phone Number"}
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={translations.email || "Email"}
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          required
        />
        <div>
          <label>
            {translations.passportLabel || "Passport"}
            <input
              type="file"
              name="passport"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="input-field mt-2"
              required
            />
          </label>
        </div>
        <div>
          <label>
            {translations.visaLabel || "Visa"}
            <input
              type="file"
              name="visa"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="input-field mt-2"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn-primary">
          {translations.submit || "Submit"}
        </button>
      </form>
    </section>
  );
}

export default Register;
