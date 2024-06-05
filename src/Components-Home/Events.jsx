import React, { useState } from "react";
import R152 from "../Asset/Rectangle 152.png";
import R156 from "../Asset/Rectangle 156.png";
import R162 from "../Asset/Rectangle 162.png";
import R163 from "../Asset/Rectangle 163.png";
import { useSwipeable } from "react-swipeable";
import { MdKeyboardArrowRight } from "react-icons/md";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsItems = [
    {
      heading: "Lorem ipsum dolor sit amet,",
      date: "Tue, 12 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "Lorem ipsum dolor sit amet,",
      date: "Wed, 13 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "Lorem ipsum dolor sit amet,",
      date: "Thu, 14 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      heading: "Lorem ipsum dolor sit amet,",
      date: "Fri, 15 MARCH, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    // Add more news items as needed
  ];

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleRightArrowClick,
    trackMouse: true,
  });

  return (
    <div className="event-container">
      <div className="news-section">
        <div className="news-container">
          <img src={R152} alt="" className="event-news-pic" />
          <button className="news-button">VIEW ALL NEWS</button>
          <div className="news" {...handlers}>
            <p className="news-update">LATEST NEWS</p>
            <div className="news-detail">
              <p>
                <span className="news-heading">
                  {newsItems[currentIndex].heading}
                </span>
                <br />
                <span className="news-sub">{newsItems[currentIndex].date}</span>

                <br />
                {newsItems[currentIndex].description}
              </p>
            </div>
            <button
              onClick={handleRightArrowClick}
              className="news-right-arrow"
            >
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className="event-details">
        <div className="event-head">
          <p>UPCOMING EVENTS</p>
          <button className="event-button">VIEW ALL EVENTS</button>
        </div>
        <div className="event-texts">
          <div>
            <div className="fle">
              <p className="event-date">12 MARCH, 2024 </p>
              <p className="pad">TUESDAY</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing eli
            </p>
          </div>
          <img src={R156} alt="" className="event-imgs" />
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
          <img src={R162} alt="" className="event-imgs" />
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
          <img src={R163} alt="" className="event-imgs" />
        </div>
      </div>
    </div>
  );
};

export default Events;
