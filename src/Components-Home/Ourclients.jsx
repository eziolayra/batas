import React from 'react'
import e18 from '../Asset/Ellipse 18.png'
import e19 from '../Asset/Ellipse 19.png'
import e20 from '../Asset/Ellipse 20.png'
import e21 from '../Asset/Ellipse 21.png'
import e22 from '../Asset/Ellipse 22.png'

const Ourclients = () => {
  return (
    <div className="client-container">
      <center>
        <div>
          <b>OUR CLIENTS</b>
          <p className="client-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
            dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit
            amet, consectetur adipiscing elit.lorem ipsum dolor sit amet,
            consectetur adipiscing elit.lorem ipsum dolor sit amet,
          </p>
        </div>
      </center>
      <div className="client-img">
        <a href="#" className="client-link">
          <img src={e18} alt="" />
        </a>
        <a href="#" className="client-link">
          <img src={e19} alt="" />
        </a>
        <a href="#" className="client-link">
          <img src={e20} alt="" />
        </a>
        <a href="#" className="client-link">
          <img src={e21} alt="" />
        </a>
        <a href="#" className="client-link">
          <img src={e22} alt="" />
        </a>
        <a href="#" className="client-link">
          <img src={e19} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Ourclients
