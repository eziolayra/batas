import React, { useState } from "react";
import R152 from "../Asset/Rectangle 152.png";
import R156 from "../Asset/Rectangle 156.png";
import R162 from "../Asset/Rectangle 162.png";
import R163 from "../Asset/Rectangle 163.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../App.css";

const Events = () => {
  const newsItems = [
    {
      img: R152,
      heading: "Lorem ipsum dolor sit amet,",
      date: "Tue, 12 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: R152,
      heading: "Lorem ipsum dolor sit amet,",
      date: "Wed, 13 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: R152,
      heading: "Lorem ipsum dolor sit amet,",
      date: "Thu, 14 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: R152,
      heading: "Lorem ipsum dolor sit amet,",
      date: "Fri, 15 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="event-container">
      <div className="news-section">
        <div className="news-container">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} alt="news" className="news-img" />
                <div className="news">
                  <p className="news-update">LATES NEWS</p>
                  <div className="news-detail">
                    <p>
                      <span className="news-heading">{item.heading}</span>
                      <br />
                      <span className="news-sub">{item.date}</span>
                      <br />
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="news-button">VIEW ALL NEWS</button>
        </div>
      </div>

      <div className="event-details">
        <div className="event-head">
          <p className="coming-event">UPCOMING EVENTS</p>
          <button className="event-button">VIEW ALL EVENTS</button>
        </div>
        <div className="event-texts">
          <div>
            <div className="fle">
              <p className="event-date">12 MARCH, 2024 </p>
              <p className="pad">TUESDAY</p>
            </div>
            <p className="event-sub-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>
          <img src={R156} alt="event" className="event-imgs" />
        </div>
        <div className="event-texts">
          <div>
            <div className="fle">
              <p className="event-date">13 MARCH, 2024 </p>
              <p className="pad">WEDNESDAY</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>
          <img src={R162} alt="event" className="event-imgs" />
        </div>
        <div className="event-texts">
          <div>
            <div className="fle">
              <p className="event-date">14 MARCH, 2024 </p>
              <p className="pad">THURSDAY</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>
          <img src={R163} alt="event" className="event-imgs" />
        </div>
      </div>
    </div>
  );
};

export default Events;
