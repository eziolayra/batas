import React from "react";
import "../App.css";
import { FaFacebook, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiTruck } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Icons = () => {
  return (
    <div className="navigation-menu">
      <div className="socials">
        <p className="social-icon">
          <IoLocationSharp />
        </p>
        <p className="social-icon">
          <TfiHeadphoneAlt />
        </p>
        <p className="social-icon">
          <PiTruck />
        </p>
        <p className="social-icon">
          <FaFacebook />
        </p>
        <div className="socials-hovers">
          <p className="socials-hover-red">LOCATE A DEALER</p>
          <p className="socials-hover">INQUIRY</p>
          <p className="socials-hover">CONTACTS</p>
          <div className="socials-icons">
            <span className="social-facebook">
              <FaFacebook />
            </span>
            <span className="social-X">
              <FaXTwitter />
            </span>
            <span className="social-whatsapp">
              <IoLogoWhatsapp />
            </span>
            <span className="social-facebook">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
