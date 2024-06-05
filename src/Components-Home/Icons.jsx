import React from 'react'
import "../App.css";
import { FaFacebook, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { PiTruck } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Icons = () => {
  return (
      <div className="navigation-menu">
        <div className="menu-item">
          <span className="menu-text">LOCATE A DEALER</span>
          <span className="menu-icon">
            <IoLocationSharp />
          </span>
        </div>
        <div className="menu-item">
          <span className="menu-text">INQUIRY</span>
          <span className="menu-icon">
            <TfiHeadphoneAlt />
          </span>
        </div>
        <div className="menu-item">
          <span className="menu-text">GET A DEMO</span>
          <span className="menu-icon">
            <PiTruck />
          </span>
        </div>
        <div className="social-media-icons">
          <span className="social-icon">
            <FaFacebook />
          </span>
          <span className="social-icon">
            <FaXTwitter />
          </span>
          <span className="social-icon">
            <IoLogoWhatsapp />
          </span>
          <span className="social-icon">
            <FaLinkedinIn />
          </span>
          <span className="menu-icon">
            <FaFacebook />
          </span>
        </div>
      </div>
    
  );
}

export default Icons
