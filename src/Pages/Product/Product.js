import React, { Component } from "react";
import { Card } from "react-bootstrap";
export default class Product extends Component {
  render() {
    return (
      <div>
        <Card className="mr-5 mb-5 " style={{ width: "12rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <h2>
              <a href="">Apple new mac book 2015 March :P</a>
            </h2>
            <div class="product-carousel-price">
              <ins>$899.00</ins> <del>$999.00</del>
            </div>
            <div class="product-option-shop">
              <a
                class="add_to_cart_button"
                data-quantity="1"
                data-product_sku=""
                data-product_id="70"
                rel="nofollow"
                href="/canvas/shop/?add-to-cart=70"
              >
                Add to cart
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
