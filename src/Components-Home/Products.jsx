import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import R76 from "../Asset/Rectangle 76.png";
import R118 from "../Asset/Rectangle 118.png";
import R120 from "../Asset/Rectangle 120.png";
import R122 from "../Asset/Rectangle 122.png";
import "../App.css";


const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { name: "PRO 1049 C FSD", image: R76 },
    { name: "PRO 1050 C FSD", image: R118 },
    { name: "PRO 1051 C FSD", image: R120 },
    { name: "PRO 1052 C FSD", image: R122 },
    // Add more products as needed
  ];

  const handleSwipe = (direction) => {
    if (direction === "LEFT") {
      setCurrentIndex((prevIndex) =>
        prevIndex < products.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (direction === "RIGHT") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  const handleDotClick = (index) => {
    const diff = index - currentIndex;
    setCurrentIndex((prevIndex) =>
      prevIndex + diff > products.length - 1
        ? products.length - 1
        : prevIndex + diff < 0
        ? 0
        : prevIndex + diff
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  return (
    <div className="productContainer">
      <div className="container">
        <div className="product">PRODUCTS</div>
        <div className="lines">
          <div className="feature">Features</div>
          <div className="linkContainer">
            <button className="productLink">TRUCKS</button>
            <button className="productLink">TIPPER</button>
            <button className="productLink">SCHOOL BUS</button>
            <button className="productLink">ROUTE PERMIT BUS</button>
            <button className="productLink">GENERATOR</button>
            <button className="productLink">SPECIAL PURPOSE VEHICLES</button>
          </div>
        </div>
        <div className="sliderContainer" {...handlers}>
          <div
            className="slides"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / products.length)
              }%)`,
            }}
          >
            {products.map((product, index) => (
              <div className="Box" key={index}>
                <div className="text">{product.name}</div>
                <div className="pic">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="pics"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="dots">
            {products.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="product-button-container">
          <button className="product-button">VIEW ALL PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
