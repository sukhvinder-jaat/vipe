import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Agile_img from "../assets/img/png/agile.webp";
export const Agile = () => {
  return (
    <div className="py-5">
      <Container className="py-sm-5">
        <Row>
          <Col md={5} xs={12} data-aos="flip-left">
            <img src={Agile_img} alt="agile" className="w-100" />
          </Col>
          <Col md={7} xs={12} className="pt-sm-0 pt-4" data-aos="flip-right">
            <p className="lh_56 fw_400 ff_use clr_black fs_4xl">
              <span className="clr_blue d-block">Agile WordPress </span>
              Development Project management
            </p>
            <p className="fw_400 fs_sm clr_black ff_roy opacity_0_7 mx_600 pe-4">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <button className="radius_80 mt-2 border-0 p_10_24 ff_roy fw_600 clr_white fs_sm bg_blue hover_side">
              Schedule An Appointment
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
