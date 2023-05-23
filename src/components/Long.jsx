import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import long_1 from "../assets/img/png/long_1.png";
import long_2 from "../assets/img/png/long_2.png";
import long_3 from "../assets/img/png/long_3.png";
import long_4 from "../assets/img/png/long_4.png";
import long_5 from "../assets/img/png/long_5.png";
import long_6 from "../assets/img/png/long_6.png";
export const Long = () => {
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
    <div className="pb-3 bg_grey">
      <Container className="py-5">
        <p className="ff_use fw_400 fs_4xl pb-sm-4">
          Long Term <span className="d-block">WordPress Partner</span>
        </p>
        <Slider {...always_slider} className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_1} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_2} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_3} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_4} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_5} alt="on-1" className="w-75" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={long_6} alt="on-1" className="w-75" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};
