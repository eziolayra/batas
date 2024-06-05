import React, { useState } from "react";
import R161 from "../Asset/Rectangle 161.png";
import "../App.css";
import { useSwipeable } from "react-swipeable";
import { MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    name: "MR. JOHN DOE",
    title: "CEO OF AUTO MOBILE ENTERPRISE",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur",
    image: R161,
  },
  {
    name: "MR. JOHN CENA",
    title: "CEO OF INVISIBILITY",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur",
    image: R161,
  },
  {
    name: "MR. PRABAL ARYAL",
    title: " JUST A SIMPLE MAN",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur",
    image: R161,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-container" {...handlers}>
      <div className="testimonials-detail">
        <p className="test-head">TESTIMONIALS</p>
      </div>
      <div className="test-detail">
        <div className="w-50">
          <p>
            {testimonials[currentIndex].name}
            <br />
            {testimonials[currentIndex].title}
          </p>
          <p>{testimonials[currentIndex].text}</p>
        </div>
        <div className="w-50">
          <img
            src={testimonials[currentIndex].image}
            alt=""
            className="test-img"
          />
        </div>
      </div>
      <button className="next-arrow" onClick={nextSlide}>
        <MdKeyboardArrowRight className="test-arrow" />
      </button>
    </div>
  );
};

export default Testimonials;
