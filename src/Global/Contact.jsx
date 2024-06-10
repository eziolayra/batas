import React from "react";
import bl from "../Asset/batas-logo-white 1.png";
import e from "../Asset/horse eicher.png";
import ve from "../Asset/logo 1.png";
import { FaLocationDot, FaMobileScreenButton, FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-batas">
        <div className="contact-img">
          <img src={bl} className="" alt="" />
        </div>
        <div className="contact-info">
          <div className="contact-icons">
            <p className="contact-icon">
              <FaPhone />
            </p>
            <p className="contact-icon">
              <FaMobileScreenButton />
            </p>
            <p className="contact-icon">
              <AiOutlineMail />
            </p>
            <p className="contact-icon">
              <FaLocationDot />
            </p>
          </div>
          <div className="contact-details">
            <p className="contacts-detail">
              01 - 4520025/ 4541031/ 4536532 / 9802311655
            </p>
            <p className="contacts-detail">(+977) 9802311655</p>
            <p className="contacts-detail">info@batasmaw.com</p>
            <p className="contacts-detail">
              Tangal Chowk, Laxmi Narayan Temple, Kathmandu
            </p>
          </div>
        </div>
        <div className="open-time">
          <p>Open Time: 09:30 am to 5:30 pm</p>
        </div>
      </div>

      <div className="contact-vehicle-details">
        <div>
          <div>
            <p className="details-heading">TRUCKS</p>
            <p className="details-sub">PRO 1049 C FSD</p>
            <p className="details-sub">PRO 1049 C FSD</p>
            <p className="details-sub">PRO 1049 C FSD</p>
            <button className="contact-bottom">more</button>
          </div>
          <div>
            <p className="details-heading">TIPPER</p>
            <p className="details-sub">PRO 1055T TIPPER</p>
            <p className="details-sub">PRO 1080 XPT</p>
            <p className="details-sub">PRO 1095T</p>
            <button className="contact-bottom">more</button>
          </div>
          <p className="details-heading">BUSES</p>
          <p className="details-sub">20.16</p>
          <p className="details-heading">GENERATOR</p>
          <p className="details-heading">ROUTE PERMIT BUSES</p>
          <p className="details-heading">SPECIAL PURPOSE VEHICLE</p>
        </div>
      </div>

      <div className="other-details">
        <div>
          <p className="details-heading">RESALE</p>
          <p className="details-sub">PRO 1049 C FSD</p>
          <p className="details-sub">PRO 1049 C HSD</p>
          <p className="details-sub">PRO 1049 C DSD</p>
          <button className="contact-bottom">more</button>
        </div>
        <p className="details-heading">MEDIA</p>
        <p className="details-sub">EVENTS & NEWS</p>
        <p className="details-sub">PRESS AND MEDIA</p>
        <p className="details-sub">BLOGS</p>
        <p className="details-heading">ABOUT US</p>
        <p className="details-sub">COMPANY</p>
        <p className="details-sub">BRANCHES</p>
        <p className="details-sub">MISSION VISION</p>
        <p className="details-sub">CAREER</p>
      </div>

      <div>
        <div>
          <p className="details-heading">CONTACT</p>
          <p className="details-heading">SPARE SERVICES</p>
          <p className="details-heading">FAQS</p>
          <p className="details-heading">EMI CALCULATOR</p>
          <p className="details-heading">LOCATE A DEALER</p>
          <p className="details-heading">SCHEMES</p>
          <p className="details-heading">TESTIMONIAL</p>
        </div>
        <div className="contact-affiliated">
          <p>AFFILIATED WITH:</p>
          <div className="contact-box">
            <img src={e} alt="" />
          </div>
          <div className="contact-box">
            <img src={ve} alt="" className="img-contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
