import React, { Component } from "react";
import image1 from "../../img/product-1.jpg";
import image2 from "../../img/product-2.jpg";
import image3 from "../../img/product-3.jpg";
import image4 from "../../img/product-4.jpg";
import ProductCard from "../../Component/Layout/ProductCard";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="h1 text-center">Latest Product</div>
        <div className="container mr-5 card-group">
          <ProductCard
            image={image1}
            title="Apple new mac book 2015"
            text="
$899.00"
          />
          <ProductCard
            image={image2}
            title="Apple new mac book 2015"
            text="
$899.00"
          />
          <ProductCard
            image={image3}
            title="Apple new mac book 2015"
            text="
$899.00"
          />
          <ProductCard
            image={image4}
            title="Apple new mac book 2015"
            text="
$899.00"
          />
        </div>
        <br></br>
      </div>
    );
  }
}
