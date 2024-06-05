import React from "react";

const EMIcalculator = () => {
  return (
    <div className="emi-container">
      <div className="emi">
        <p className="emi-heading">EMI CALCULATOR</p>
        <p>PLEASE FILL THE REQUIRED FIELDS</p>
        <div className="emi-form">
          <form>
            <input
              type="number"
              placeholder="VEHICLE PRICE (RS.)*"
              required
              className="emi-form"
            />
            <input
              type="number"
              placeholder="DOWN PAYMENT (RS.)*"
              required
              className="emi-form"
            />
            <input
              type="number"
              placeholder="INTEREST RATE (%) *"
              required
              className="emi-form"
            />
            <input
              type="number"
              placeholder="LOAN TENURE (Years)*"
              required
              className="emi-form"
            />
            <button type="submit">CALCULATE</button>
          </form>
        </div>
           <table>
            <thead>
              <tr>
                <th colSpan={2}>EMI PAYMENT INFORMATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRINCIPLE (RS.) </td>
                <td>10,00,000 (RS.)</td>
              </tr>
              <tr>
                <td>DOWN PAYMENT (RS.)</td>
                <td>1,00,000 (RS.)</td>
              </tr>
              <tr>
                <td>MONTHLY PAYMENT (RS.)</td>
                <td>10,000 (RS.)</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default EMIcalculator;
