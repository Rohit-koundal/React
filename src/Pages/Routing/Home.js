import React, { Component } from "react";
import image1 from "../../img/product-1.jpg";
import image2 from "../../img/product-2.jpg";
import image3 from "../../img/product-3.jpg";
import image4 from "../../img/product-4.jpg";
import ProductCard from "../../Component/Layout/ProductCard";

export default class Home extends Component {
  render() {
    const image = [
      { img: image1, title: "Apple new mac book 2015", text: "$8909.00" },
      { img: image2, title: "Nokia new mac book 2015", text: "$6899.00" },
      { img: image3, title: "Samsung new mac book 2015", text: "$5899.00" },
      { img: image4, title: "Redmi new mac book 2015", text: "$12899.00" },
    ];
    return (
      <div>
        <div className="h1 text-center">Latest Product</div>
        <div className="container mr-5 card-group">
          {image.map((data) => (
            <ProductCard image={data.img} title={data.title} text={data.text} />
          ))}
        </div>
        <br></br>
      </div>
    );
  }
}
