import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import R76 from "../Asset/Rectangle 76.png";
import R118 from "../Asset/Rectangle 118.png";
import R120 from "../Asset/Rectangle 120.png";
import R122 from "../Asset/Rectangle 122.png";
import R181 from "../Asset/Rectangle 181.png";
import "../App.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedImage, setClickedImage] = useState(null);

  const images = [R181, R122, R120, R118, R76];

  const handleSwipe = (direction) => {
    if (direction === "LEFT") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "RIGHT") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  const handleImageClick = (index) => {
    setClickedImage(index);
    setTimeout(() => setClickedImage(null), 200);
  };

  return (
    <div className="gallery-container" {...handlers}>
      <button className="arrow left-arrow" onClick={() => handleSwipe("RIGHT")}>
        <MdKeyboardArrowLeft />
      </button>
      <div className="gallery-slider">
        <div
          className="gallery-wrapper"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt=""
                className={`gallery-img ${
                  clickedImage === index ? "click-effect" : ""
                }`}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={() => handleSwipe("LEFT")}>
        <MdKeyboardArrowRight />
      </button>
      <div className="gallery-button-container">
        <button className="gallery-button">VIEW ALL GALLERY</button>
      </div>
    </div>
  );
};

export default Gallery;
