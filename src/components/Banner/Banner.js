import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner1.jpg'
import banner2 from '../../Images/banner2.jpg'
import banner3 from '../../Images/banner3.jpg'
const Banner = () => {
      return (
            <Carousel>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3>Bood Test Lab</h3>
                              <p>All type of the are done here </p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner2}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>Science Lab</h3>
                              <p>Critical condition patient are admitted here</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>X Ray Lab</h3>
                              <p>All The Cardiac realted test are done here</p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>

      );
};

export default Banner;