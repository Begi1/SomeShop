import React, { useState } from 'react';


import Carousel from 'react-bootstrap/Carousel';

import Image0 from "../Images/Carousel/Image0.png"
import Image2 from "../Images/Carousel/Image2.png"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators='false' variant = 'dark' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;