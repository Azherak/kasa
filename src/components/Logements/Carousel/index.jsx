import React from "react";
import "../../../data.json";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function ImageCarousel({ pictures }) {
  console.log(pictures);
  return (
    <Carousel>
      {pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}


export default ImageCarousel;