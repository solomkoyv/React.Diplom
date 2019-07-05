import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import Beans_logo from "../../logo/Beans_logo.svg";

const HeaderInfo = () => {
  return (
    <>
      <Row>
        <Col lg={{ size: 10, offset: 1 }}>
          <h1 className="title-big">Everything You Love About Coffee</h1>
          <img className="beanslogo" src={Beans_logo} alt="Beans logo" />
          <div className="preview__subtitle">
            We makes every day full of energy and taste
          </div>
          <div className="preview__subtitle">Want to try our beans?</div>
          <Link to="/our-coffee/" className="preview__btn">
            More
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default HeaderInfo;
