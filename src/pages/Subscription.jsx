import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Subscription() {
  const { translations } = useContext(LanguageContext);

  const [selectedPlan, setSelectedPlan] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const plans = [
    { id: "monthly", nameKey: "subscriptionMonthly", price: 1000 },
    { id: "quarterly", nameKey: "subscriptionQuarterly", price: 2700 },
    { id: "yearly", nameKey: "subscriptionYearly", price: 10000 },
  ];

  const handleSubscribe = () => {
    if (!selectedPlan) {
      alert(translations.alertSelectPlan);
      return;
    }
    setSubscribed(true);
    // Use the selectedPlan key to get translated plan name
    const planName = plans.find((p) => p.id === selectedPlan)?.nameKey;
    alert(
      translations.alertSuccessSubscribe.replace(
        "{{plan}}",
        translations[planName] || selectedPlan
      )
    );
  };

  return (
    <section className="subscription-container">
      <h2 className="subscription-title">{translations.subscriptionTitle}</h2>
      <div className="plans-list">
        {plans.map((plan) => (
          <label key={plan.id} className="plan-item">
            <div>
              <input
                type="radio"
                name="plan"
                value={plan.id}
                onChange={() => setSelectedPlan(plan.id)}
                checked={selectedPlan === plan.id}
              />
              <span className="plan-name">{translations[plan.nameKey]}</span>
            </div>
            <div className="plan-price">
              {plan.price} {translations.subscriptionPriceSuffix}
            </div>
          </label>
        ))}
      </div>

      <button onClick={handleSubscribe} className="subscribe-button">
        {translations.subscribeButton}
      </button>

      {subscribed && (
        <p className="subscription-success">
          {translations.alertSuccessSubscribe.replace(
            "{{plan}}",
            translations[
              plans.find((p) => p.id === selectedPlan)?.nameKey
            ] || selectedPlan
          )}
        </p>
      )}
    </section>
  );
}

export default Subscription;
