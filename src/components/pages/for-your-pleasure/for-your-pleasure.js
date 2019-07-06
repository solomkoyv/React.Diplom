import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../header";
import ItemPage from "../../pages/item-page";

import Beans_logo_dark from "../../../logo/Beans_logo_dark.svg";
import CoffeeGirl from "../../../img/coffee_girl.jpg";

import ItemList from "../../item-list/";
import coffeService from "../../services";
import Error from "../../error";

export default class ForYourPleasure extends Component {
  coffeService = new coffeService();

  state = { itemList: null, selectedItem: null, error: false };

  componentDidMount() {
    this.coffeService
      .getGoodsItems()
      .then(itemList => {
        this.setState({ itemList });
      })
      .catch(() => this.setState({ error: true }));
  }

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  onClearItemSelected = () => this.setState({ selectedItem: null });

  render() {
    if (this.state.error) {
      return <Error />;
    }

    if (this.state.selectedItem) {
      return (
        <ItemPage
          item={this.state.selectedItem}
          onClearItemSelected={this.onClearItemSelected}
        />
      );
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        itemList={this.state.itemList}
        error={this.state.error}
      />
    );

    return (
      <>
        <div className="banner">
          <Container>
            <Header />
          </Container>
        </div>
        <section className="shop">
          <Container>
            <Row>
              <Col lg={{ size: 4, offset: 2 }}>
                <img className="shop__girl" src={CoffeeGirl} alt="girl" />
              </Col>
              <Col lg="4">
                <div className="title">About our beans</div>
                <img
                  className="beanslogo"
                  src={Beans_logo_dark}
                  alt="Beans logo"
                />
                <div className="shop__text">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible.
                  <br />
                  <br />
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention
                  <br />
                  so questions. <br />
                  As greatly removed calling pleased improve an. Last ask him
                  cold feel
                  <br />
                  met spot shy want. Children me laughing we prospect answered
                  followed. At it went
                  <br />
                  is song that held help face.
                </div>
              </Col>
            </Row>
            <div className="line" />
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <div className="shop__wrapper">{itemList}</div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
