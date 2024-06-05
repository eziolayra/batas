import React from "react";
import BigTruck from "../Asset/Rectangle 41.png";
import Eicher from "../Asset/eicher.png";
import "../App.css";

const HomeTops = () => {
  return (
    <div className="homeTops">
      <div>
        <img src={BigTruck} alt="Big Truck" className="truckPic" />
      </div>
      <div className="eicherContainer">
        <img src={Eicher} alt="Eicher" className="eicher" />
      </div>
    </div>
  );
};

export default HomeTops;
