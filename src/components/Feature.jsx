import React, { useState } from 'react';
// import '../styles/Feature.css';

function Feature({ title, steps }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="feature-box" onClick={() => setExpanded(!expanded)}>
      <h3 className="feature-title">{title}</h3>
      {expanded && (
        <ol className="feature-steps">
          {steps.map((step, index) => (
            <li key={index} className="feature-step">
              <span className="step-number">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Feature;
