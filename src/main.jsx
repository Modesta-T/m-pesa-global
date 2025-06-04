import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { LanguageProvider } from "./LanguageContext";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
