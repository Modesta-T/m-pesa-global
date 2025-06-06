import React, { useState } from "react";

function SendReceive() {
  const [method, setMethod] = useState("sendmoney");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessNumber: "",
    accountNumber: "",
    tillNumber: "",
    wallet: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    switch (method) {
      case "sendmoney":
        if (!formData.name || !formData.phone || !formData.amount) {
          setMessage("Please fill in all Send Money fields.");
          return;
        }
        setMessage(`Successfully sent KES ${formData.amount} to ${formData.name}.`);
        break;

      case "paybill":
        if (!formData.businessNumber || !formData.accountNumber || !formData.amount) {
          setMessage("Please fill in all Pay Bill fields.");
          return;
        }
        setMessage(
          `Successfully paid KES ${formData.amount} to Pay Bill ${formData.businessNumber}, Account: ${formData.accountNumber}.`
        );
        break;

      case "till":
        if (!formData.tillNumber || !formData.amount) {
          setMessage("Please fill in all Till Number fields.");
          return;
        }
        setMessage(
          `Successfully paid KES ${formData.amount} to Till Number ${formData.tillNumber}.`
        );
        break;

      case "pochi":
        if (!formData.wallet || !formData.amount) {
          setMessage("Please fill in all Pochi La Biashara fields.");
          return;
        }
        setMessage(
          `Successfully added KES ${formData.amount} to wallet: ${formData.wallet}.`
        );
        break;

      default:
        setMessage("Unknown payment method.");
        return;
    }

    // Clear all form fields after successful submission
    setFormData({
      name: "",
      phone: "",
      businessNumber: "",
      accountNumber: "",
      tillNumber: "",
      wallet: "",
      amount: "",
    });
  };

  return (
    <div className="send-container">
      <h2>Send Money</h2>

      <div className="method-selector">
        <button
          className={method === "sendmoney" ? "active" : ""}
          onClick={() => {
            setMethod("sendmoney");
            setMessage("");
          }}
          type="button"
        >
          Send Money
        </button>
        <button
          className={method === "paybill" ? "active" : ""}
          onClick={() => {
            setMethod("paybill");
            setMessage("");
          }}
          type="button"
        >
          Pay Bill
        </button>
        <button
          className={method === "till" ? "active" : ""}
          onClick={() => {
            setMethod("till");
            setMessage("");
          }}
          type="button"
        >
          Till Number
        </button>
        <button
          className={method === "pochi" ? "active" : ""}
          onClick={() => {
            setMethod("pochi");
            setMessage("");
          }}
          type="button"
        >
          Pochi La Biashara
        </button>
      </div>

      <form onSubmit={handleSend} className="send-form">
        {method === "sendmoney" && (
          <>
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
          </>
        )}

        {method === "paybill" && (
          <>
            <input
              type="text"
              name="businessNumber"
              placeholder="Business Number"
              value={formData.businessNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </>
        )}

        {method === "till" && (
          <input
            type="text"
            name="tillNumber"
            placeholder="Till Number"
            value={formData.tillNumber}
            onChange={handleChange}
          />
        )}

        {method === "pochi" && (
          <input
            type="text"
            name="wallet"
            placeholder="Wallet Name/ID"
            value={formData.wallet}
            onChange={handleChange}
          />
        )}

        <input
          type="number"
          name="amount"
          placeholder="Amount (KES)"
          value={formData.amount}
          onChange={handleChange}
          min="1"
          step="any"
        />

        <button type="submit">Send</button>
      </form>

      {message && <p className="send-message">{message}</p>}
    </div>
  );
}

export default SendReceive;
