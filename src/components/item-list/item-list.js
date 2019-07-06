import React, { Component } from "react";
import Spinner from "../../components/spinner";

import coffeService from "../services";

import Error from "../error";

export default class ItemList extends Component {
  coffeService = new coffeService();

  renderItems(arr) {
    if (this.props.isMainPage) {
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
          <div
            className="shop__item"
            key={id}
            onClick={() => this.props.onItemSelected(item)}
          >
            <img src={url} alt={name} />
            <div className="shop__item-title">{name}</div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}$</div>
          </div>
        );
      });
    }
  }

  render() {
    const { itemList } = this.props;

    if (this.props.error) {
      return <Error />;
    }

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <div className="best__wrapper">{items}</div>;
  }
}
