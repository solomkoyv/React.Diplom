import React, { Component } from "react";

export default class ItemsFilter extends Component {
  buttons = [
    { name: "Brazil", label: "Brazil" },
    { name: "Kenya", label: "Kenya" },
    { name: "Columbia", label: "Columbia" }
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      const { onFilterSelect } = this.props;
      // const active = filter === name;
      // const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className="shop__filter-btn"
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
