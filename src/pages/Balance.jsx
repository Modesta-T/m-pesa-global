import React, { useState } from "react";

function Balance() {
  const [balance, setBalance] = useState(5000);
  const transactions = [
    { id: 1, type: "Sent", amount: 1000, to: "John Doe" },
    { id: 2, type: "Received", amount: 2000, from: "Jane Smith" },
    { id: 3, type: "Sent", amount: 500, to: "Peter Kariuki" },
  ];

  return (
    <div className="balance-container">
      <h2>Account Balance</h2>
      <div className="balance-amount">KES {balance.toLocaleString()}</div>

      <h3>Recent Transactions</h3>
      <ul className="transaction-list">
        {transactions.map((txn) => (
          <li key={txn.id} className="transaction-item">
            {txn.type === "Sent"
              ? `Sent KES ${txn.amount} to ${txn.to}`
              : `Received KES ${txn.amount} from ${txn.from}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Balance;
