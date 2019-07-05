import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/mainpage.sass";

import Header from "../../header";
import HeaderInfo from "../../header-info";
import About from "../../about";

import ItemList from "../../item-list/";
import coffeService from "../../services";
import Error from "../../error";

export default class MainPage extends Component {
  coffeService = new coffeService();

  state = { selectedItem: "", error: false };

  onItemSelected = id => {
    console.log(id);
    this.setState({ selectedItem: id });
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        // id={this.state.selectedItem}
        getTypeItems={"getBestsellersItems"}
      />
    );

    return (
      <>
        <div className="preview">
          <Container>
            <Header />
            <HeaderInfo />
          </Container>
        </div>
        <About />
        <section className="best">
          <Container>
            <div className="title">Our best!</div>
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>{itemList}</Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
