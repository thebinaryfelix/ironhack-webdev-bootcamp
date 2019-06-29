import React, { Component } from 'react';
import './ProductCategoryRow.css';

class ProductCategoryRow extends Component {
  render() {
    return (
      <div className="category-row">
        {this.props.name}
      </div>
    );
  }
}

export default ProductCategoryRow;
