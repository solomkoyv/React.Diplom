import React, { Component } from "react";

// import "./search-panel.css";

export default class SearchPanel extends Component {
  state = { term: "" };

  onUpdateSearch = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <>
        <form action="#" className="shop__search">
          <label className="shop__search-label" htmlFor="filter">
            Looking for
          </label>
          <input
            id="filter"
            type="text"
            placeholder="start typing here..."
            className="shop__search-input"
          />
        </form>
      </>
    );
  }
}
