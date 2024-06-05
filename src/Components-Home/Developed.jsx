import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Developed = () => {
  return (
    <div className="developed-container">
      <div className="start">
        <p>GET IN TOUCH:</p>
        <div className="logos">
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaYoutube />
          </p>
          <p>
            <FaXTwitter />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
        </div>
      </div>
      <div className="middle">
        <p className="developer-icon">
          <FaWhatsapp />
        </p>
        <p>MAKE A CALL</p>
      </div>
      <div className="end">
        <p>
          © 2024 BATASMAW Commercial Vehicle All right reserved<br></br> 
          BY ONVIRO TECH
        </p>
      </div>
    </div>
  );
};

export default Developed;
