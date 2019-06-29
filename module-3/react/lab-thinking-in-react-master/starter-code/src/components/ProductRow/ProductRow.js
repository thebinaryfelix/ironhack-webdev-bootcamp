import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {

  setColor() {
    return (this.props.stocked) ? 'black' : 'red';
  }

  render() {
    return (
      <div className={`product-row ${this.setColor()}-label`}>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

export default ProductRow;
