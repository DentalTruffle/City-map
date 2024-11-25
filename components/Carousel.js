import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent({ items }) {
  return (
    <div className="carousel-container" style={{ width: '80%', margin: 'auto' }}>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} dynamicHeight={true}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item}   style={{ height: '630px' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

