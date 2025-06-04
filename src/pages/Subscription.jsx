import React, { useState } from "react";

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const plans = [
    { id: "monthly", name: "Monthly Plan", price: 1000 },
    { id: "quarterly", name: "Quarterly Plan", price: 2700 },
    { id: "yearly", name: "Yearly Plan", price: 10000 },
  ];

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert("Please select a plan to subscribe.");
      return;
    }
    setSubscribed(true);
    alert(`Subscribed to ${selectedPlan} successfully!`);
  };

  return (
    <section className="subscription-container">
      <h2 className="subscription-title">Choose a Subscription Plan</h2>
      <div className="plans-list">
        {plans.map((plan) => (
          <label key={plan.id} className="plan-item">
            <div>
              <input
                type="radio"
                name="plan"
                value={plan.name}
                onChange={() => setSelectedPlan(plan.name)}
                checked={selectedPlan === plan.name}
              />
              <span className="plan-name">{plan.name}</span>
            </div>
            <div className="plan-price">{plan.price} KES</div>
          </label>
        ))}
      </div>

      <button onClick={handleSubscribe} className="subscribe-button">
        Subscribe
      </button>

      {subscribed && (
        <p className="subscription-success">
          Thank you for subscribing to the {selectedPlan}!
        </p>
      )}
    </section>
  );
}

export default Subscription;
