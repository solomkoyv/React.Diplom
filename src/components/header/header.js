import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/header.sass";
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
                <a href="/">
                  <img src={Logo} alt="logo" />
                </a>
              </li>
              <li className="header__item">
                <a href="/">Our coffee</a>
              </li>
              <li className="header__item">
                <a href="/">For your pleasure</a>
              </li>
            </ul>
          </header>
        </Col>
      </Row>
    </>
  );
};

export default Header;
