import React, { Component } from 'react'

import { CartContext } from '../contexts/Cart.context'

import {
    Container,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardImg
  } from "reactstrap";

export default class CartPage extends Component {
    render() {
        return (
            <Container>
                <h1>Cart</h1>
                <CartContext.Consumer>
                {({ cart }) => {
                    console.log(cart);
                    return cart.map((item, index) => {
                    console.log(item);
                    return (
                        <Col sm="3" key={index}>
                        <Card>
                            <CardImg
                            top
                            width="100%"
                            src={item.imgURL}
                            alt="Card image cap"
                            />
                            <CardBody>
                            <CardTitle>
                                <h5>{item.name}</h5>
                            </CardTitle>
                            <CardText>{item.desciption}</CardText>
                            </CardBody>
                        </Card>
                        </Col>
                    );
                    });
                }}
                </CartContext.Consumer>
            </Container>
        )
    }
} 