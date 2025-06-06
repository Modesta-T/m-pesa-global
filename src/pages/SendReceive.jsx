import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function SendReceive() {
  const { translations } = useContext(LanguageContext);

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
          setMessage(translations.fillSendFields);
          return;
        }
        setMessage(
          `${translations.successSent} KES ${formData.amount} ${translations.to} ${formData.name}.`
        );
        break;

      case "paybill":
        if (!formData.businessNumber || !formData.accountNumber || !formData.amount) {
          setMessage(translations.fillPayBillFields);
          return;
        }
        setMessage(
          `${translations.successPayBill} KES ${formData.amount} ${translations.to} ${translations.payBill} ${formData.businessNumber}, ${translations.account}: ${formData.accountNumber}.`
        );
        break;

      case "till":
        if (!formData.tillNumber || !formData.amount) {
          setMessage(translations.fillTillFields);
          return;
        }
        setMessage(
          `${translations.successTill} KES ${formData.amount} ${translations.to} ${translations.tillNumber} ${formData.tillNumber}.`
        );
        break;

      case "pochi":
        if (!formData.wallet || !formData.amount) {
          setMessage(translations.fillPochiFields);
          return;
        }
        setMessage(
          `${translations.successPochi} KES ${formData.amount} ${translations.to} ${translations.wallet}: ${formData.wallet}.`
        );
        break;

      default:
        setMessage(translations.unknownMethod);
        return;
    }

    // Clear form
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
      <h2>{translations.sendMoney}</h2>

      <div className="method-selector">
        <button
          className={method === "sendmoney" ? "active" : ""}
          onClick={() => {
            setMethod("sendmoney");
            setMessage("");
          }}
          type="button"
        >
          {translations.sendMoney}
        </button>
        <button
          className={method === "paybill" ? "active" : ""}
          onClick={() => {
            setMethod("paybill");
            setMessage("");
          }}
          type="button"
        >
          {translations.payBill}
        </button>
        <button
          className={method === "till" ? "active" : ""}
          onClick={() => {
            setMethod("till");
            setMessage("");
          }}
          type="button"
        >
          {translations.tillNumber}
        </button>
        <button
          className={method === "pochi" ? "active" : ""}
          onClick={() => {
            setMethod("pochi");
            setMessage("");
          }}
          type="button"
        >
          {translations.pochi}
        </button>
      </div>

      <form onSubmit={handleSend} className="send-form">
        {method === "sendmoney" && (
          <>
            <input
              type="text"
              name="name"
              placeholder={translations.recipientName}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder={translations.phoneNumber}
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
              placeholder={translations.businessNumber}
              value={formData.businessNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="accountNumber"
              placeholder={translations.accountNumber}
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </>
        )}

        {method === "till" && (
          <input
            type="text"
            name="tillNumber"
            placeholder={translations.tillNumber}
            value={formData.tillNumber}
            onChange={handleChange}
          />
        )}

        {method === "pochi" && (
          <input
            type="text"
            name="wallet"
            placeholder={translations.walletPlaceholder}
            value={formData.wallet}
            onChange={handleChange}
          />
        )}

        <input
          type="number"
          name="amount"
          placeholder={translations.amount}
          value={formData.amount}
          onChange={handleChange}
          min="1"
        />

        <button type="submit">{translations.send}</button>
      </form>

      {message && <p className="send-message">{message}</p>}
    </div>
  );
}

export default SendReceive;
