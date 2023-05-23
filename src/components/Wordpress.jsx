import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tick from "../assets/img/svg/tick'.svg";
import tick2 from "../assets/img/svg/tick2.svg";
import girl from "../assets/img/png/not_girl.webp";
const Wordpress = () => {
  return (
    <>
      <div className="bg-black overflow-hidden">
        <Container className="py-5">
          <Row className="mb-8-xl">
            <Col lg={5} xs={12} data-aos="fade-right">
              <p className="text-white ff_use fw_400 fs_3xl lh_47">
                All Vipe Studio WordPress services include:
              </p>
            </Col>
            <Col lg={7} xs={12} data-aos="fade-left">
              <Row>
                <Col sm={6} xs={12} data-aos="fade-down-left">
                  <p className="ff_roy fw_600 fs_lg clr_white mt-3 mt-sm-0">
                    By Industry
                  </p>
                  <div>
                    <span className="mt-4 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Lorem in elementum pellentesque
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Molestie cursus praesent mi
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Leo sed viverra cras
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Laoreet feugiat ut at
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Risus aliquam molestie viverra
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 ff_roy fw_400 clr_white fs_sm">
                        Diam enim pulvinar velit
                      </p>
                    </span>
                  </div>
                </Col>
                <Col sm={6} xs={12}>
                  <p className="ff_roy fw_600 fs_lg clr_white mt-5 mt-sm-0">
                    By Services
                  </p>
                  <div>
                    <span className="mt-4 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                        Accumsan, dui a semper
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                        Interdum malesuada vulputate neque
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                        Nullam non a, morbi
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                        Arcu morbi leo eu
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                        Viverra venenatis, in ornare
                      </p>
                    </span>
                    <span className="mt-3 d-flex align-items-center">
                      <img src={tick} alt="tick" />
                      <p className="mb-0 ms-3 fw_400 clr_white ff_roy fs_sm">
                        Erat id aliquam habitalg
                      </p>
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* box */}
          <div className="pt-4 pb-lg-4 pb-2 px-lg-4 px-3 shadow_not2 mt-5 shadow_Not shadow_not1">
            <Row className="px-sm-2 dark_box radius_27_sm">
              <Col
                xl={4}
                xs={12}
                data-aos="fade-down-left"
                className="ps-0 ps-sm-1"
              >
                <div className="pb-4 pt-lg-5">
                  <p className="mb-0 ff_use fw_400 clr_white fs_xl lh_43">
                    Not Sure
                    <br
                      className="d-none d-xl-block
                    "
                    />
                    which service
                    <br
                      className="d-none d-xl-block
                    "
                    />
                    you need
                    <br
                      className="d-none d-xl-block
                    "
                    />
                    yet?
                  </p>
                  <button className="radius_80 mt-4 border-0 p_10_24 ff_roy fw_600 clr_white fs_sm bg_blue hover_side">
                    Schedule An Appointment
                  </button>
                </div>
              </Col>
              <Col
                xl={4}
                md={6}
                xs={12}
                data-aos="fade-down-left"
                className="ps-0 ps-sm-1"
              >
                <div className="ps-xl-3 pb-4 pt-lg-5 pt-2">
                  <p className="ff_roy fw_700 clr_white fs_lg">
                    20-m free consultation that will help us identifyif you need
                  </p>
                  <span className="mt-3 d-flex align-items-center">
                    <img src={tick2} alt="tick" />
                    <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                      Technical Description & Discovery
                    </p>
                  </span>
                  <span className="mt-3 d-flex align-items-center">
                    <img src={tick2} alt="tick" />
                    <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                      Custom WordPress Development
                    </p>
                  </span>
                  <span className="mt-3 d-flex align-items-center">
                    <img src={tick2} alt="tick" />
                    <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                      Support & Maintenance
                    </p>
                  </span>
                  <span className="mt-3 d-flex align-items-center">
                    <img src={tick2} alt="tick" />
                    <p className="mb-0 ms-3 fw_400 ff_roy clr_white fs_sm">
                      Other WordPress Service
                    </p>
                  </span>
                </div>
              </Col>
              <Col
                xl={4}
                md={6}
                xs={12}
                data-aos="flip-left"
                className="ps-0 ps-sm-1"
              >
                <img
                  src={girl}
                  alt="girl"
                  className="w-100
            "
                />
              </Col>
            </Row>
          </div>
          <div className="shadow_not position-absolute">
            <div className="shadow_not1"></div>
            <div className="shadow_not2"></div>
          </div>
          <div className="shadow_not2 position-absolute">
            <div className="shadow_not1"></div>
            <div className="shadow_not2"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Wordpress;
