import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team_member from "../assets/img/png/team.webp";
export const Team = () => {
  return (
    <div className="pb-4">
      <div className="bg_grey">
        <Container className="">
          <Row
            className="py-lg-4
          "
          >
            <Col lg={6} xs={12} className="pt-5" data-aos="flip-up">
              <p className="ff_use fw_400 fs_4xl clr_black">
                Team Full of Stars
              </p>
              <p className="mb-0 ff_roy clr_black fw_400 fs_sm mx-480">
                Suspendisse consequat egestas arcu et et. Viverra quis euismod
                neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
                Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum.
                Lacus tortor sollicitudin risus eget euismod in bibendum turpis.
              </p>
              <button className="hover_side radius_80 mt-4 border-0 p_10_24 ff_roy fw_600 clr_white fs_sm bg_blue">
                Explore
              </button>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex py-3 py-lg-0 justify-content-center"
              data-aos="flip-down"
            >
              <img
                src={team_member}
                alt="team"
                className="w-95 team_member_img"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
