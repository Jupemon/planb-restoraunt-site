import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

const Slider = () => {
    return ( <div>
    {console.log(image1)}
    <Carousel indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        style={{width:"250px"}}
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div> );
}
 
export default Slider;