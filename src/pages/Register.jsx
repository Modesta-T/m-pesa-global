import React, { useState } from "react";

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
    if (files) {
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

    if (!formData.fullName || !formData.phone || !formData.email || !formData.passport || !formData.visa) {
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
      // Simulate API call for now
      // Replace URL with your real backend endpoint later
     await new Promise((r) => setTimeout(r, 1000));
alert("Simulated registration success!");


      if (!response.ok) {
        const errorData = await response.json();
        alert("Registration failed: " + (errorData.message || "Unknown error"));
        return;
      }

      const result = await response.json();
      alert("Registration successful! Welcome, " + result.fullName);

      // Reset form if needed
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        passport: null,
        visa: null,
      });

    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <section className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label className="block">
          Upload Passport:
          <input
            type="file"
            name="passport"
            accept="image/*,.pdf"
            onChange={handleChange}
            className="mt-1"
          />
        </label>
        <label className="block">
          Upload Visa:
          <input
            type="file"
            name="visa"
            accept="image/*,.pdf"
            onChange={handleChange}
            className="mt-1"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
