import React, { Component } from "react";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";

import coffeService from "../services";

import Error from "../error";

export default class c extends Component {
  coffeService = new coffeService();

  state = { itemList: null, error: false };

  componentDidMount() {
    const { getTypeItems } = this.props;
    if (getTypeItems === "getBestsellersItems") {
      this.coffeService
        .getBestsellersItems()
        .then(itemList => {
          this.setState({ itemList });
        })
        .catch(() => this.setState({ error: true }));
    } else {
      this.coffeService
        .getCoffeItems()
        .then(itemList => {
          this.setState({ itemList });
        })
        .catch(() => this.setState({ error: true }));
    }
  }

  renderItems(arr) {
    const { getTypeItems } = this.props;
    if (getTypeItems === "getBestsellersItems") {
      return arr.map(item => {
        const { id, url, name, price } = item;
        return (
          <div
            className="best__item"
            key={id}
            onClick={() => this.props.onItemSelected(item)}
          >
            <img src={url} alt={name} />
            <div className="best__item-title">{name}</div>
            <div className="best__item-price">{price}$</div>
          </div>
        );
      });
    } else {
      return arr.map(item => {
        const { id, url, name, price, country } = item;
        return (
          <Link to="/item-page" key={id}>
            <div
              className="shop__item"
              // key={id}
              onClick={() => this.props.onItemSelected(item)}
            >
              <img src={url} alt={name} />
              <div className="shop__item-title">{name}</div>
              <div className="shop__item-country">{country}</div>
              <div className="shop__item-price">{price}$</div>
            </div>
          </Link>
        );
      });
    }
  }

  render() {
    const { itemList } = this.state;

    if (this.state.error) {
      return <Error />;
    }

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <div className="best__wrapper">{items}</div>;
  }
}
