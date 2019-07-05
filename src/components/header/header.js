import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/header.sass";
import { Link } from "react-router-dom";

import Logo from "../../logo/Logo.svg";
// import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Row>
        <Col lg={{ size: 6 }}>
          <header>
            <ul className="header">
              <li className="header__item">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </li>
              <li className="header__item">
                <Link to="/our-coffee/">Our coffee</Link>
              </li>
              <li className="header__item">
                <Link to="/for-your-pleasure/">For your pleasure</Link>
              </li>
            </ul>
          </header>
        </Col>
      </Row>
    </>
  );
};

export default Header;
