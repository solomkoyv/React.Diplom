import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/mainpage.sass";

import Header from "../../header";
import Beans_logo_dark from "../../../logo/Beans_logo_dark.svg";

export default class ItemPage extends Component {
  render() {
    const { price, country, description, url } = this.props.item;

    return (
      <>
        <div className="banner">
          <Container>
            <Header onClearItemSelected={this.props.onClearItemSelected} />
          </Container>
        </div>
        <section className="shop">
          <Container>
            <div className="title">Our best!</div>
            <Row>
              <Col lg={{ size: 5, offset: 1 }}>
                <img className="shop__girl" src={url} alt="coffee_item" />
              </Col>
              <Col lg="4">
                <div className="title">About it</div>
                <img
                  className="beanslogo"
                  src={Beans_logo_dark}
                  alt="Beans logo"
                />
                {country && (
                  <div className="shop__point">
                    <span>Country:</span>
                    {country}
                  </div>
                )}
                {description && (
                  <div className="shop__point">
                    <span>Description:</span>
                    {description}
                  </div>
                )}
                <div className="shop__point">
                  <span>Price:</span>
                  <span className="shop__point-price">{price}$</span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
