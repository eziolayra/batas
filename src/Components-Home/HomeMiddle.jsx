import React from "react";
import Market from "../Asset/nepal-aftermarket (2) 1.png";
import Market2 from "../Asset/nepal-aftermarket (1) 1.png";
import van from "../Asset/van 1.png";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const HomeMiddle = () => {
  return (
    <div className="Rect">
      <div className="market">
        <img src={Market} alt="" className="market-pic" />
      </div>
      <div className="another-box">
        <div className="para">24X7 HELPLINE</div>
        <div className="par-blue">TOLL FREE NUMBER</div>
        <div className="contact">
          <div>
            <p className="contact-logo">
              <FiPhoneCall />
            </p>
            <p className="contact-logo">
              <FiPhoneCall />
            </p>
          </div>
          <div>
            <p>NEPAL TELECOM</p>
            <p>NCELL</p>
          </div>
          <div>
            <p>16 600 111 555</p>
            <p>9801575111</p>
          </div>
          <div>
            <img src={Market2} className="van" />
          </div>
        </div>
        <div className="par-blue">EOS VAN</div>
        <div className="contact">
          <div>
            <p className="contact-logo">
              <FiPhoneCall />
            </p>
            <p className="contact-logo-app">
              <IoLogoWhatsapp />
            </p>
          </div>
          <div>
            <p>NEPAL TELECOM</p>
            <p>WHATSAPP</p>
          </div>
          <div>
            <p>16 600 111 555</p>
            <p>(+977)9800000000</p>
          </div>
          <div>
            <img src={van} className="van" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
