import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import robo from "../assets/img/png/succes_robot.webp";
import sit from "../assets/img/png/sit.png";
export const Sucess = () => {
  return (
    <>
      <div className="pt-xl-5">
        <Container className="mb_50 pt-xl-5">
          <Row className="pt-5">
            <Col lg={4} xs={12} data-aos="zoom-in" data-aos-duration="1300">
              <img src={robo} alt="robo" className="w_100 w-lg-60" />
            </Col>
            <Col
              lg={8}
              xs={12}
              className="pt-4 pt-lg-0"
              data-aos="zoom-in-up"
              data-aos-duration="1300"
            >
              <p className="ff_roy mb-0 fw_400 fs_sm clr_light_grey">
                HAVE YOU SEEN OUR MASCOT?
              </p>
              <p className="ff_use mb-sm-0 clr_black fw_400 fs_4xl">
                Success Guides
              </p>
              <div>
                <button className="ff_roy fw_600  fs_sm clr_blue bg-white radius_80 border_1_cat p_8_16 cat_btn">
                  Category-1
                </button>
                <button className="ms-2 ff_roy fw_600  fs_sm clr_blue bg-white radius_80 border_1_cat p_8_16 cat_btn">
                  Category-2
                </button>
                <button className="ms_2 ff_roy fw_600 ms_0_400  fs_sm clr_blue bg-white radius_80 border_1_cat p_8_16 cat_btn">
                  Category-3
                </button>
                <button className="ms-lg-2 ms-2 mt-3 ms_2_400 ff_roy fw_600  fs_sm clr_blue bg-white radius_80 border_1_cat p_8_16 cat_btn">
                  Category-4
                </button>
              </div>
              <Row>
                <Col
                  xl={4}
                  sm={6}
                  className="py-4"
                  data-aos="zoom-in-down"
                  data-aos-duration="1300"
                >
                  <div className="sit_box bg-white w-100 p-3 radius_16 pointer hover_scale overflow-hidden">
                    <span className="hover_scal overflow-hidden">
                      <img src={sit} className="w-100" alt="sit" />
                    </span>
                    <p className="ff_roy pt-2 fw_600 fs_lg mb-0">
                      Sit diam metus
                    </p>
                    <p className="ff_roy mb-0 fw_400 fs_sm clr_black opacity_0_7">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <button className="border-0 clr_blue bg-white ff_roy fw_600 fs_sm">
                      Read More....
                    </button>
                  </div>
                </Col>
                <Col
                  xl={4}
                  sm={6}
                  className="py-sm-4 pb-4"
                  data-aos="zoom-in-down"
                  data-aos-duration="1300"
                >
                  <div className="sit_box bg-white w-100 p-3 radius_16 hover_scale pointer">
                    <span className="hover_scal">
                      <img src={sit} className="w-100" alt="sit" />
                    </span>
                    <p className="ff_roy pt-2 fw_600 fs_lg mb-0">
                      Sit diam metus
                    </p>
                    <p className="ff_roy mb-0 fw_400 fs_sm clr_black opacity_0_7">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <button className="border-0 clr_blue bg-white ff_roy fw_600 fs_sm">
                      Read More....
                    </button>
                  </div>
                </Col>
                <Col
                  xl={4}
                  sm={6}
                  className="py-xl-4 pb-4"
                  data-aos="zoom-in-down"
                  data-aos-duration="1300"
                >
                  <div className="sit_box bg-white w-100 p-3 radius_16 hover_scale pointer">
                    <span className="hover_scal">
                      <img src={sit} className="w-100" alt="sit" />
                    </span>
                    <p className="ff_roy pt-2 fw_600 fs_lg mb-0">
                      Sit diam metus
                    </p>
                    <p className="ff_roy mb-0 fw_400 fs_sm clr_black opacity_0_7">
                      Arcu amet, consectetur vel pellentesque mattis ipsum sed
                      mattis sed.
                    </p>
                    <button className="border-0 clr_blue bg-white ff_roy fw_600 fs_sm">
                      Read More....
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
