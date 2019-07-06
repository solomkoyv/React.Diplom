import React, { Component } from "react";

export default class SearchPanel extends Component {
  changeHandler = event => this.props.onSearchName(event.target.value);

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
            onChange={this.changeHandler}
          />
        </form>
      </>
    );
  }
}
