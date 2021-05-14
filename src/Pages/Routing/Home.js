import React, { Component } from "react";
import image1 from "../../img/product-1.jpg";
import image2 from "../../img/product-2.jpg";
import image3 from "../../img/product-3.jpg";
import image4 from "../../img/product-4.jpg";
import ProductCard from "../../Component/Layout/ProductCard";

export default class Home extends Component {
  render() {
    const image = [image1, image2, image3, image4];
    return (
      <div>
        <div className="h1 text-center">Latest Product</div>
        <div className="container mr-5 card-group">
          {image.map((data) => (
            <ProductCard
              image={data}
              title="Apple new mac book 2015"
              text="
$899.00"
            />
          ))}
        </div>
        <br></br>
      </div>
    );
  }
}
