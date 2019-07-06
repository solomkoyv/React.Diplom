import React, { Component } from "react";

export default class ItemsFilter extends Component {
  buttons = [
    { name: "Brazil", label: "Brazil" },
    { name: "Kenya", label: "Kenya" },
    { name: "Columbia", label: "Columbia" },
    { name: "clear", label: "Clear" }
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const clickHandler = label => () => {
        if (label === "Clear") return this.props.getAllCoffeItems();
        return this.props.onFilterTypeClick(label);
      };
      return (
        <button
          key={name}
          type="button"
          className="shop__filter-btn"
          onClick={clickHandler(label)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
