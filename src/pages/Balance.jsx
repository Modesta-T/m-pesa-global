import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import "../App.css"; // Assuming styles are defined here

function Balance() {
  const { translations: t } = useContext(LanguageContext);
  const [balance, setBalance] = useState(5000);

  const transactions = [
    { id: 1, type: "sent", amount: 1000, to: "John Doe" },
    { id: 2, type: "received", amount: 2000, from: "Jane Smith" },
    { id: 3, type: "sent", amount: 500, to: "Peter Kariuki" },
  ];

  return (
    <div className="balance-container">
      <h2>{t.balanceTitle || "💰 Balance"}</h2>
      <div className="balance-amount">KES {balance.toLocaleString()}</div>

      <h3>{t.recentTransactions || "Recent Transactions"}</h3>
      <ul className="transaction-list">
        {transactions.map((txn) => (
          <li key={txn.id} className="transaction-item">
            {txn.type === "sent"
              ? `${t.sent || "Sent"} KES ${txn.amount} ${t.to || "to"} ${txn.to}`
              : `${t.received || "Received"} KES ${txn.amount} ${t.from || "from"} ${txn.from}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Balance;
