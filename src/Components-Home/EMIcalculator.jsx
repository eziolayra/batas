import React,{useState} from "react";

const EMIcalculator = () => {

    const [vehiclePrice, setVehiclePrice] = useState("");
    const [rate, setRate] = useState("");
    const [period, setPeriod] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [emi, setEmi] = useState(null);

    const calculateEMI = (e) => {
      e.preventDefault();
      const P = vehiclePrice - downPayment;
      const R = rate / 12 / 100;
      const N = period * 12;
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue.toFixed(0));
    };
  return (
    <div className="emi-container">
      <div className="emi">
        <p className="emi-heading">EMI CALCULATOR</p>
        <p className="emi-sub">PLEASE FILL THE REQUIRED FIELDS</p>
        <div>
          <form onSubmit={calculateEMI}>
            <div className="emi-forms">
              <label>
                <input
                  type="tel"
                  placeholder="&nbsp;"
                  required
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(e.target.value)}
                />
                <span>VEHICLE PRICE (RS.)*</span>
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="&nbsp;"
                  required
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <span>INSERT RATE (%)*</span>
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="&nbsp;"
                  required
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                />
                <span>AMORTIZATION PERIOD (YEARS) *</span>
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="&nbsp;"
                  required
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
                <span>DOWN PAYMENT (RS.)*</span>
              </label>
              <button type="submit">CALCULATE</button>
            </div>
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
              <td>{vehiclePrice} (RS.)</td>
            </tr>
            <tr>
              <td>DOWN PAYMENT (RS.)</td>
              <td>{downPayment} (RS.)</td>
            </tr>
            <tr>
              <td>MONTHLY PAYMENT (RS.)</td>
              <td>{emi} (RS.)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EMIcalculator;
