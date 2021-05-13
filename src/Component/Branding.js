import React, { Component } from "react";
import Logo from "../img/logo.png";
import "../style.css";
export default class Branding extends Component {
  render() {
    return (
      <div class="site-branding-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="logo">
                <h1>
                  <a href="./">
                    <img src={Logo} />
                  </a>
                </h1>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="shopping-item">
                <a href="cart.html">
                  Cart - <span class="cart-amunt">$800</span>{" "}
                  <i class="fa fa-shopping-cart"></i>{" "}
                  <span class="product-count">5</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
