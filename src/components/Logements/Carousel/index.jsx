import React, { useState } from 'react';
import "../../../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import iconBack from "../../../assets/arrow_back.png";
import iconForward from "../../../assets/arrow_forward.png";
import "./Carousel.css";

function ImageCarousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentImageIndex >= pictures.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentImageIndex <= 0 ? pictures.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <img className="slide slide-back" src={iconBack}  onClick={prevSlide} alt='icone retour slide'/>
      <img className='carousel-img' src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <img className="slide slide-forward" src={iconForward} onClick={nextSlide} alt='icone slide suivant'/>
    </div>
  );
}

export default ImageCarousel;
