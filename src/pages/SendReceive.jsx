import React, { useState } from "react";

function SendReceive() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.amount) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(`Successfully sent KES ${formData.amount} to ${formData.name}.`);
    setFormData({ name: "", phone: "", amount: "" });
  };

  return (
    <div className="send-container">
      <h2>Send Money</h2>
      <form onSubmit={handleSend} className="send-form">
        <input
          type="text"
          name="name"
          placeholder="Recipient Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (KES)"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>

      {message && <p className="send-message">{message}</p>}
    </div>
  );
}

export default SendReceive;
