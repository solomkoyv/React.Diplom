import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/mainpage.sass";

import Header from "../../header";

export default class ItemPage extends Component {
  render() {
    return (
      <>
        <div className="banner">
          <Container>
            <Header />
          </Container>
        </div>
        <section className="shop">
          <Container>
            {/* <div className="title">Our best!</div> */}
            <Row>
              <Col lg={{ size: 5, offset: 1 }}>
                <img
                  className="shop__girl"
                  src="img/coffee_item.jpg"
                  alt="coffee_item"
                />
              </Col>
              <Col lg="4">
                <div className="title">About it</div>
                <img
                  className="beanslogo"
                  src="logo/Beans_logo_dark.svg"
                  alt="Beans logo"
                />
                <div className="shop__point">
                  <span>Country:</span>
                  Brazil
                </div>
                <div className="shop__point">
                  <span>Description:</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">16.99$</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
