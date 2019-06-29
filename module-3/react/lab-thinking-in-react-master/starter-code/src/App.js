import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';
import ProductsList from './data';

class App extends Component {

  state = {
    onlyInStock: false,
    ProductsList: ProductsList.data
  }

  getCategories(fullList) {
    const categories = [];
    fullList.data.forEach(product => (!categories.includes(product.category)) ? categories.push(product.category) : false);
    return categories;
  }

  filterStocked(checked) {
    if (checked) {
      const stockedProducts = this.state.ProductsList.filter(product => (product.stocked) ? product : false);
      this.setState({ ProductsList: stockedProducts });
    } else {
      this.setState({ ProductsList: ProductsList.data })
    }
  }

  filterByQuery(query) {
    if (query) {
      const foundProducts = ProductsList.data.filter(product =>{
        if (product.name.toLowerCase().includes(query.toLowerCase())) {
          return product;
        } else {
          return false;
        }
      });
      this.setState({ ProductsList: foundProducts });
    } else {
      this.setState({ ProductsList: ProductsList.data })
    }
  }

  stockedHandler(event) {
    this.filterStocked(event);
    this.setState({ onlyInStock: event });
  }

  queryHandler(event) {
    this.filterByQuery(event);
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar
          stockedHandler={event => this.stockedHandler(event)}
          queryHandler={event => this.queryHandler(event)} />
        <ProductTable
          categories={this.getCategories(ProductsList)} {...this.state} />
      </div>
    );
  }
}

export default App;
