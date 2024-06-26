import React, { useState } from 'react';
import iconBack from "../../assets/arrow_back.png";
import iconForward from "../../assets/arrow_forward.png";

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
      {pictures.length > 1 && <img className="slide slide-back" src={iconBack}  onClick={prevSlide} alt='icone retour slide'/>}
      {pictures.length > 1 && <img className="slide slide-forward" src={iconForward} onClick={nextSlide} alt='icone slide suivant'/>}
      <img className='carousel-img' src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      {pictures.length > 1 && <div className='image-counter'>{currentImageIndex + 1}/{pictures.length}</div>}
    </div>
  );
}

export default ImageCarousel;