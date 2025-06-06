import React, { useState } from "react";
import "../App.css"; // Make sure this import is present

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    passport: null,
    visa: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.passport ||
      !formData.visa
    ) {
      alert("Please fill in all fields and upload required documents.");
      return;
    }

    const payload = new FormData();
    payload.append("fullName", formData.fullName);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("passport", formData.passport);
    payload.append("visa", formData.visa);

    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000));
      alert("Simulated registration success!");

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        passport: null,
        visa: null,
      });

      // If using real API, remove above and uncomment below:
      /*
      const response = await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Registration failed: " + (errorData.message || "Unknown error"));
        return;
      }

      const result = await response.json();
      alert("Registration successful! Welcome, " + result.fullName);
      */
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <section className="subscription-container">
      <h2 className="subscription-title text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="send-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <div>
          <label>
            Upload Passport:
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
            Upload Visa:
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
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
