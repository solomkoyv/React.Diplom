import React from "react";
import "../../sass/footer.sass";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
                  <a href="/">
                    <img src={Logo_black} alt="logo" />
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/">Our coffee</a>
                </li>
                <li className="footer__item">
                  <a href="/">For your pleasure</a>
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
