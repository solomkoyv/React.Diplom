import React from "react";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../sass/header.sass";
import { Link } from "react-router-dom";

import Logo from "../../logo/Logo.svg";

const Header = ({ onClearItemSelected }) => {
  const clearItemSelect = () => {
    if (onClearItemSelected) {
      onClearItemSelected();
    }
  };
  return (
    <>
      <Row>
        <Col lg={{ size: 6 }}>
          <header>
            <ul className="header">
              <li className="header__item">
                <Link to="/">
                  <img src={Logo} alt="logo" onClick={clearItemSelect} />
                </Link>
              </li>
              <li className="header__item">
                <Link to="/our-coffee/">
                  <span onClick={clearItemSelect}>Our coffee</span>
                </Link>
              </li>
              <li className="header__item">
                <Link to="/for-your-pleasure/">
                  <span onClick={clearItemSelect}>For your pleasure</span>
                </Link>
              </li>
            </ul>
          </header>
        </Col>
      </Row>
    </>
  );
};

export default Header;
