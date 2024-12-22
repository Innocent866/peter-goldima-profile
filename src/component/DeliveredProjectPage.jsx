import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import img1 from "../assets/Project1.jpg"
import img2 from "../assets/ongoing-project.jpg"
import img3 from "../assets/Project2.jpg"
import "../style/deliveredproject.css"

const DeliveredProjectPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <div className="my-5">
        <h1 className="text-center my-5 pt-5 fw-bold">PROJECT DELIVERED</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
           <div className="swipe-image" >
           <img src={img1} alt=""/>
           </div>
          <Carousel.Caption>
            <h1 className="text-dark">First slide label</h1>
            <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="swipe-image" >
        <img src={img2} alt=""/>
        </div>
          <Carousel.Caption>
            <h1 className="text-dark">This is an ongoing project</h1>
            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="swipe-image" >
        <img src={img3} alt=""/>
        </div>
          <Carousel.Caption>
            <h1 className="text-dark">Third slide label</h1>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     
    </div>
     <hr />
     </div>
  );
};

export default DeliveredProjectPage;
