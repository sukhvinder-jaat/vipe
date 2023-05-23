import React from "react";
import { Container } from "react-bootstrap";

export const HaveYou = () => {
  return (
    <Container className="pt-4 translate_80_y">
      <div
        className="have_box w-100 pt-2 pb-4 px-md-4 "
        data-aos="flip-down"
        data-aos-duration="1300"
      >
        <div className="d-flex align-items-md-center align-items-start justify-content-between px-3 flex-column flex-md-row">
          <div>
            <p className="mb-0 ff_use fw_400 clr_white fs_4xl">Have you</p>
            <p className="mb-0 mx_600 ff_roy fw_600 clr_white fs_lg pb-2">
              read our study about Speed and Performance in WordPress?
            </p>
          </div>
          <button className="out_btn text-nowrap bg-white clr_blue border-0 ff_inter fw_600 fs_sm p_38_14 radius_137 mx_600">
            Check It Out
          </button>
        </div>
      </div>
    </Container>
  );
};
