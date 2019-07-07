import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../sass/mainpage.sass";

import Header from "../../header";
import HeaderInfo from "../../header-info";
import About from "../../about";
import ItemPage from "../../pages/item-page";

import ItemList from "../../item-list/";
import Footer from "../../footer";
import coffeService from "../../services";
import Error from "../../error";

export default class MainPage extends Component {
  coffeService = new coffeService();

  state = { itemList: null, selectedItem: null, error: false };

  componentDidMount() {
    this.coffeService
      .getBestsellersItems()
      .then(itemList => {
        this.setState({ itemList });
      })
      .catch(() => this.setState({ error: true }));
  }

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  onClearItemSelected = () => this.setState({ selectedItem: null });

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.selectedItem) {
      return (
        <ItemPage
          item={this.state.selectedItem}
          onClearItemSelected={this.onClearItemSelected}
        />
      );
    }

    const itemList = this.state.error ? (
      <Error />
    ) : (
      <ItemList
        onItemSelected={this.onItemSelected}
        itemList={this.state.itemList}
        isMainPage
        error={this.state.error}
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
        <Footer />
      </>
    );
  }
}
