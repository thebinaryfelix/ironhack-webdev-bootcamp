import React, { Component } from 'react';
import './ProductTable.css';

import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';

class ProductTable extends Component {

  setProductsToCategory(categoryName) {
    const products = [];
    this.props.ProductsList.forEach((product, index) => {
      if (product.category === categoryName) {
        products.push(<ProductRow key={index} {...product} />);
      }
    });
    return products;
  }

  showProductsList() {
    return this.props.categories.map((categoryName, index) => {
      if (this.setProductsToCategory(categoryName).length === 0) {
        return false;
      }
      return (
        <div
          className="category-container"
          key={index}>
          <ProductCategoryRow key={index} name={categoryName} />
          {this.setProductsToCategory(categoryName)}
        </div>
      );
    })
  }

  render() {
    return (
      <div className="list-container">
        {this.showProductsList()}
      </div>
    );
  }
}

export default ProductTable;
