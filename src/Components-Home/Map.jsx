import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Map = () => {
  const mapRef = useRef(null);
  const locateRef = useRef(null);
  const contactRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      zoomControl: false,
    }).setView([27.7172, 85.324], 7.5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Handle city search
    const handleCitySearch = () => {
      const city = document.querySelector(".map-input").value;
      if (city) {
        fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.length > 0) {
              const { lat, lon } = data[0];
              map.setView([lat, lon], 13);
            } else {
              alert("City not found");
            }
          })
          .catch((error) => {
            console.error("Error fetching city data:", error);
          });
      }
    };

    // Add event listener to the input field
    document
      .querySelector(".map-input")
      .addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          handleCitySearch();
        }
      });

    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    if (locateRef.current && contactRef.current) {
      const containerHeight = locateRef.current.clientHeight;
      const contactHeight = contactRef.current.clientHeight;
      const itemsVisible = Math.floor(containerHeight / contactHeight);
      setVisibleItems(itemsVisible);
    }
  }, [locateRef, contactRef]);

  return (
    <div className="map-container">
      <div className="map" ref={mapRef}></div>
      <div className="map-locate" ref={locateRef}>
        <div className="map-heading">
          <p className="map-text-head">
            <span className="redText">LOCATE</span> A DEALER
          </p>
          <div className="map-search">
            <input type="text" placeholder="CITY" className="map-input" />
            <div className="map-icon">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="map-details">
          <div className="map-detail">
            <div>
              <div className="map-detail-head">
                <p className="map-text">
                  <b>EASTERN MANAGEMENT PVT. LTD.</b>
                </p>
                <p className="map-head-blue">Workshop</p>
              </div>
              <div className="map-detail-info">
                <div>
                  <p>
                    <FaLocationDot color="#484848" />
                  </p>
                  <p>
                    <BsFillTelephoneFill color="#484848" />
                  </p>
                  <p>
                    <FiMail color="#484848" />
                  </p>
                </div>
                <div>
                  <p>Gyaneshwor, Nilgirimagar</p>
                  <p>(+977)9800000000, (+977)9800000000</p>
                  <p>
                    <u>
                      dealer1@gmail.com
                      <br />
                      www.dealer1.com
                    </u>
                  </p>
                  <p className="map-head-blue">opens until 5:00 pm</p>
                </div>
              </div>
            </div>
            <div>
              <button className="product-button">VIEW IN MAP</button>
            </div>
          </div>
          <div className="map-detail">
            <div>
              <div className="map-detail-head">
                <p className="map-text">
                  <b>EASTERN MANAGEMENT PVT. LTD.</b>
                </p>
                <p className="map-head-blue">Workshop</p>
              </div>
              <div className="map-detail-info">
                <div>
                  <p>
                    <FaLocationDot color="#484848" />
                  </p>
                  <p>
                    <BsFillTelephoneFill color="#484848" />
                  </p>
                  <p>
                    <FiMail color="#484848" />
                  </p>
                </div>
                <div>
                  <p>Gyaneshwor, Nilgirimagar</p>
                  <p>(+977)9800000000, (+977)9800000000</p>
                  <p>
                    <u>
                      dealer1@gmail.com
                      <br />
                      www.dealer1.com
                    </u>
                  </p>
                  <p className="map-head-blue">opens until 5:00 pm</p>
                </div>
              </div>
            </div>
            <div>
              <button className="product-button">VIEW IN MAP</button>
            </div>
          </div>
          <div className="map-detail">
            <div>
              <div className="map-detail-head">
                <p className="map-text">
                  <b>EASTERN MANAGEMENT PVT. LTD.</b>
                </p>
                <p className="map-head-blue">Workshop</p>
              </div>
              <div className="map-detail-info">
                <div>
                  <p>
                    <FaLocationDot color="#484848" />
                  </p>
                  <p>
                    <BsFillTelephoneFill color="#484848" />
                  </p>
                  <p>
                    <FiMail color="#484848" />
                  </p>
                </div>
                <div>
                  <p>Gyaneshwor, Nilgirimagar</p>
                  <p>(+977)9800000000, (+977)9800000000</p>
                  <p>
                    <u>
                      dealer1@gmail.com
                      <br />
                      www.dealer1.com
                    </u>
                  </p>
                  <p className="map-head-blue">opens until 5:00 pm</p>
                </div>
              </div>
            </div>
            <div>
              <button className="product-button">VIEW IN MAP</button>
            </div>
          </div>
        </div>
        <button className="map-button">VIEW ALL</button>
      </div>
    </div>
  );
};

export default Map;
