import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import on_1 from "../assets/img/png/on_1.png";
import on_2 from "../assets/img/png/on_2.png";
import on_3 from "../assets/img/png/on_3.png";
import on_4 from "../assets/img/png/on_4.png";
import on_5 from "../assets/img/png/on_5.png";
import on_6 from "../assets/img/png/on_6.png";
export const Featured = () => {
  var always_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <div className="bg_grey py-5">
      <Container>
        <p className="ff_use fw_400 fs_4xl pb-sm-4">Featured on</p>
        <Slider {...always_slider} className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_1} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_2} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_3} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_4} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_5} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={on_6} alt="on-1" className="w-75" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};
