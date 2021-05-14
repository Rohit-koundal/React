import React, { Component } from "react";
import Product from "../Product/Product";
import image1 from "../../img/product-1.jpg";
import image2 from "../../img/product-2.jpg";
import image3 from "../../img/product-3.jpg";
import image4 from "../../img/product-4.jpg";
import image5 from "../../img/product-5.jpg";
import image6 from "../../img/product-6.jpg";
export default class ShopPage extends Component {
  render() {
    const image = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image2,
      image4,
      image3,
    ];
    return (
      <div>
        <div class="product-big-title-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="product-bit-title text-center">
                  <h2>Shop</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="single-product-area">
          <div class="container mr-5 card-group">
            {image.map((data) => (
              <Product img={data} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
