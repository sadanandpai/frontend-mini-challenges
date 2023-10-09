import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselApp() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Picture</h3>
            <p>First Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-6-800x400.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Picture</h3>
            <p>Second Description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-5-800x400.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Picture</h3>
            <p>Third Description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselApp;
