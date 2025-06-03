import React from 'react';

function Packages() {
  return (
    <section className="page">
      <h2 className="page-title">Subscription Packages</h2>
      <table className="package-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Duration</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>7 Days</td>
            <td>$10</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>14 Days</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>30 Days</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Packages;
