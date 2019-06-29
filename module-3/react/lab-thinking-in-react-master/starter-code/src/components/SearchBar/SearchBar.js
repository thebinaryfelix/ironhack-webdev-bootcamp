import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  setStockHandler(event) {
    this.props.stockedHandler(event.target.checked);
  }

  queryHandler(event) {
    this.props.queryHandler(event.target.value);
  }

  render() {
    return (
      <div className="input-container">
        <input
          className="input-search"
          type="text"
          name="searchInput"
          placeholder="Search"
          onChange={event => this.queryHandler(event)} />
        <input
          type="checkbox"
          name="checkboxStock"
          onChange={event => this.setStockHandler(event)} /> Only show products in stock
      </div>
    );
  }
}

export default SearchBar;