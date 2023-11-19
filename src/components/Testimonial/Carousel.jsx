import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left">
        &#9664;
      </button>
      <div className="slide">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex}`} />
        <div className="text">{slides[currentIndex].text}</div>
      </div>
      <button onClick={nextSlide} className="arrow right">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
