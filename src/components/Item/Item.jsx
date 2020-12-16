import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Item extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }} className="ml-5 mt-5">
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.desc}
                    </Card.Text>
                    <Button onClick={ () => this.props.setItem(this.props.title) } href="/checkout" variant="primary"> Add to cart </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Item
