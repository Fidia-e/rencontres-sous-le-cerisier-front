import React, { FunctionComponent } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import ParentsMars from 'assets/images/ParentsMars.jpeg';
import PianoFurioso from 'assets/images/PianoFurioso.jpeg';
import TocToc from 'assets/images/TocToc.png';

const Gallery: FunctionComponent = () => {
  const widthScreen = window.innerWidth;

  return (
    <Splide
      aria-label="Photos association"
      options={{
        perPage: widthScreen < 599 ? 1 : widthScreen < 799 ? 2 : widthScreen < 1199 ? 3 : 5,
        perMove: 1,
        gap: '1rem',
        // type: 'loop',
      }}
    >
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={ParentsMars} alt="Image 1" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={PianoFurioso} alt="Image 2" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={TocToc} alt="Image 2" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={ParentsMars} alt="Image 1" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={PianoFurioso} alt="Image 2" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={TocToc} alt="Image 2" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={ParentsMars} alt="Image 1" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={PianoFurioso} alt="Image 2" />
        </div>
      </SplideSlide>
      <SplideSlide className="carrousel-item">
        <div className="image-container">
          <img className="image" src={TocToc} alt="Image 2" />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Gallery;
