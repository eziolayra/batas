import React, { useState } from "react";
import Batas from "../Asset/batas 1.png";
import "../App.css";
import { AiOutlineMail } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import "../fonts/font.css";


const TopNav = () => {
  const [activeLink, setActiveLink] = useState("HOME");

  const getLinkClass = (link) => {
    return `navLink ${activeLink === link ? "active" : ""}`;
  };

  return (
    <div className="nav">
      <div className="top">
        <div className="content">
          <img src={Batas} alt="" className="image" />
        </div>
        <div className="links">
          <a href="#" className="link">
            TRUCK
          </a>
          <a href="#" className="link">
            BUSES
          </a>
          <a href="#" className="link">
            GENERATOR
          </a>
        </div>
        <div className="topnav-contacts">
          <div className="contacts">
            <p className="icon">
              <BsTelephoneFill />
            </p>
            <p>02-4520025/451031/4536532/9802311655</p>
          </div>
          <div className="contacts">
            <p className="icon">
              <AiOutlineMail />
            </p>
            <p>info@batasmaw.com</p>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div className="navContent">
          <a
            href="#"
            className={getLinkClass("HOME")}
            onClick={() => setActiveLink("HOME")}
          >
            HOME
          </a>
          <a
            href="#"
            className={getLinkClass("ABOUT US")}
            onClick={() => setActiveLink("ABOUT US")}
          >
            ABOUT US
          </a>
          <a
            href="#"
            className={getLinkClass("VEHICLE")}
            onClick={() => setActiveLink("VEHICLE")}
          >
            VEHICLE
          </a>
          <a
            href="#"
            className={getLinkClass("SPARE SERVICE")}
            onClick={() => setActiveLink("SPARE SERVICE")}
          >
            SPARE SERVICE
          </a>
          <a
            href="#"
            className={getLinkClass("MEDIA")}
            onClick={() => setActiveLink("MEDIA")}
          >
            MEDIA
          </a>
          <a
            href="#"
            className={getLinkClass("BLOG")}
            onClick={() => setActiveLink("BLOG")}
          >
            BLOG
          </a>
          <a
            href="#"
            className={getLinkClass("RESALE")}
            onClick={() => setActiveLink("RESALE")}
          >
            RESALE
          </a>
          <a
            href="#"
            className={getLinkClass("FORMS")}
            onClick={() => setActiveLink("FORMS")}
          >
            FORMS
          </a>
          <a
            href="#"
            className={getLinkClass("CONTACT")}
            onClick={() => setActiveLink("CONTACT")}
          >
            CONTACT
          </a>
        </div>
        <form className="navForm">
          <div>
            <input type="text" placeholder="SEARCH" className="navInput" />
          </div>
          <div>
            <CiSearch className="nav-icon" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopNav;
