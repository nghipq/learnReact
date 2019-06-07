import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './contexts/Cart.context'

import TopMenu from './component/TopMenu';
import ProductsPage from './pages/Products.page'
import CartPage from './pages/Cart.page'

function Index() {
  return <h2>Home</h2>;
}

class App extends Component {
  render() {return (
    <CartProvider>
    <Router>
      <TopMenu/>
      <Route path="/" exact component={Index} />
      <Route path="/products/" component={ProductsPage} />
      <Route path="/cart" component={CartPage} />
    </Router>
    </CartProvider>
  );}
}

export default App;
