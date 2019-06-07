import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
        }

        this.addProduct = this.addProduct.bind(this)
    }

    addProduct(product) {
        this.setState({
            cart: this.state.cart.concat(product)
        })
    }
 
    render() {
        return <CartContext.Provider
        value={{
            cart: this.state.cart,
            addProduct: this.addProduct
        }}>
            {this.props.children}
        </CartContext.Provider>
    }
}