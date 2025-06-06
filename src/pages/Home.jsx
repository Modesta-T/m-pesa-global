import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const Home = () => {
  const { translations: t } = useContext(LanguageContext);

  return (
    <section className="home-container">
      <header className="hero-banner">
        <h1>{t.welcomeTitle || "Welcome to AshPay"}</h1>
        <p>{t.welcomeDescription || "Your virtual SIM-based M-Pesa service for foreigners visiting Kenya."}</p>
        <Link to="/register" className="btn-primary">{t.getStarted || "Get Started"}</Link>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <h3>{t.registrationTitle || "🔐 Registration"}</h3>
          <p>{t.registrationDesc || "Sign up using your passport and get access to M-Pesa services instantly."}</p>
        </div>

        <div className="feature-card">
          <h3>{t.subscriptionTitle || "💳 Subscription"}</h3>
          <p>{t.subscriptionDesc || "Choose a plan suitable for tourists and business travelers."}</p>
        </div>

        <div className="feature-card">
          <h3>{t.sendReceiveTitle || "📩 Send & Receive"}</h3>
          <p>{t.sendReceiveDesc || "Send and receive money across borders securely and quickly."}</p>
        </div>

        <div className="feature-card">
          <h3>{t.balanceTitle || "💰 Balance"}</h3>
          <p>{t.balanceDesc || "Check your wallet balance anytime with real-time updates."}</p>
        </div>

        <div className="feature-card">
          <h3>{t.settingsTitle || "⚙️ Settings"}</h3>
          <p>{t.settingsDesc || "Switch languages, toggle themes, and update your preferences."}</p>
        </div>
      </section>

      <footer className="footer-banner">
        <p>{t.footerText || "© 2025 Ashpay. All rights reserved."}</p>
      </footer>
    </section>
  );
};

export default Home;
