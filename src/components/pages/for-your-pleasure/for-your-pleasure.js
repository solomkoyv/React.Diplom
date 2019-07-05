import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../header";

import Logo from "../../../logo/Logo.svg";

// import ItemList from "../../item-list/";
import coffeService from "../../services";
import Error from "../../error";

export default class ForYourPleasure extends Component {
  coffeService = new coffeService();

  state = { selectedItem: "", error: false };

  render() {
    if (this.state.error) {
      return <Error />;
    }
    return (
      <>
        <div className="banner">
          <Container>
            <Header />
          </Container>
        </div>
        <h1>ForYourPleasure</h1>
      </>
    );
  }
}
