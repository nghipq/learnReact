import React, { Component } from 'react';
import Axios from 'axios'

import { CartContext } from '../contexts/Cart.context'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Container,
    Col,
    Row,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
    Button
} from 'reactstrap'

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Products: []
        }
    }

    componentDidMount() {
      Axios.get("https://wjvpr.sse.codesandbox.io/Products")
      .then(res => 
        this.setState({
          Products: res.data
        }))
    }

    render() {
        return(
            <Container>
                <h1>Products</h1>
                <Row>
                    {this.state.Products.map(Product => {
                        return (
                            <Col sm="3">
                            <Card>
                                <CardImg top width="100%" src={Product.imgURL} alt="Product image" />
                                <CardBody>
                                    <CardTitle>{Product.name}</CardTitle>
                                    <CardText>{Product.desciption}</CardText>
                                    <CartContext.Consumer>
                                        {({addProduct}) => <Button onClick={() => addProduct(Product)} color="primary">ADD TO CART</Button>}
                                    </CartContext.Consumer>
                                </CardBody>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default ProductsPage