import React, { Component } from "react";
import Spinner from "../../components/spinner";

import Error from "../error";

export default class c extends Component {
  state = { itemList: null, error: false };

  componentDidMount() {
    const { getData } = this.props;
    getData
      .then(itemList => {
        this.setState({ itemList });
      })
      .catch(() => this.setState({ error: true }));
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id, url, name, price } = item;
      return (
        <div
          className="best__item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          <img src={url} alt={name} />
          <div className="best__item-title">{name}</div>
          <div className="best__item-price">{price}$</div>
        </div>
      );
    });
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
