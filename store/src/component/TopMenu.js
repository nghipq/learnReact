import React, { Component } from 'react';

import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartContext } from '../contexts/Cart.context'

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  class TopMenu extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
    render() {return (
        <div>
            <Navbar color="light" light expand="md">
            <Container>
            <NavbarBrand href="/">Store</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link to='/'>Home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to='/products'>Products</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <CartContext.Consumer>
                      {({cart}) => <Link to='/cart'>Cart ({cart.length})</Link>}
                    </CartContext.Consumer>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </Container>
          </Navbar>
        </div>
    );}
  }
  
  export default TopMenu;