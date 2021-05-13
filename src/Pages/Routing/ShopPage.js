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
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row card-group">
              <Product img={image1} />
              <Product img={image2} />
              <Product img={image3} />
              <Product img={image4} />
              <Product img={image5} />
              <Product img={image6} />
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="product-pagination text-center">
                  <nav>
                    <ul class="pagination">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
