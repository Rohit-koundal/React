import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class ProductCard extends Component {
  render() {
    return (
      <div>
        <Card className="mr-5 mb-5 " style={{ width: "12rem" }}>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
