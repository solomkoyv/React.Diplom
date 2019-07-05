import React from "react";
import "../../sass/footer.sass";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import Logo_black from "../../logo/Logo_black.svg";
import Beans_logo_dark from "../../logo/Beans_logo_dark.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 4 }}>
              <ul className="footer">
                <li className="footer__item">
                  <Link to="/">
                    <img src={Logo_black} alt="logo" />
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/our-coffee/">Our coffee</Link>
                </li>
                <li className="footer__item">
                  <Link to="/for-your-pleasure/">For your pleasure</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <img className="beanslogo" src={Beans_logo_dark} alt="Beans logo" />
        </Container>
      </footer>
    </>
  );
};

export default Footer;
