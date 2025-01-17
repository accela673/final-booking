import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            // height="400"
            // width="100%"
            className="d-block w-100"
            src="http://alatoo.edu.kg/image;jsessionid=WHO1I3OKbzj7OkHH8R2b4GmrTwsu0pLohjJqRFYj.unknown-host?img=thumb_image_360_sbar_4065355424698461236.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height="400"
            // width="100%"
            className="d-block w-100"
            src="http://alatoo.edu.kg/image;jsessionid=WHO1I3OKbzj7OkHH8R2b4GmrTwsu0pLohjJqRFYj.unknown-host?img=thumb_image_stud-conf-sbar_1154096170279910062.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // height="400"
            // width="100%"
            className="d-block w-100"
            src="http://alatoo.edu.kg/image;jsessionid=WHO1I3OKbzj7OkHH8R2b4GmrTwsu0pLohjJqRFYj.unknown-host?img=thumb_image_krugst_slide_5964209573594135080.jpg"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
