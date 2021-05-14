import React, { Component } from "react";
import image1 from "../../img/product-thumb-1.jpg";
import image2 from "../../img/product-thumb-2.jpg";
import image3 from "../../img/product-thumb-3.jpg";
import image4 from "../../img/product-2.jpg";
import image5 from "../../img/product-1.jpg";
import image6 from "../../img/product-3.jpg";
import image7 from "../../img/product-4.jpg";
import image8 from "../../img/product-5.jpg";
export default class SingleProduct extends Component {
  render() {
    const array = [image4, image5, image6, image7, image8];
    const images = [image1, image1, image1, image1];
    const img = [image1, image2, image3];
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
            <div class="row">
              <div class="col-md-4">
                <div class="single-sidebar">
                  <h2 class="sidebar-title">Search Products</h2>
                  <form action="">
                    <input type="text" placeholder="Search products..." />
                    <input type="submit" value="Search" />
                  </form>
                </div>

                <div class="single-sidebar">
                  <h2 class="sidebar-title">Products</h2>
                  {images.map((data) => (
                    <div class="thubmnail-recent">
                      <img src={data} class="recent-thumb" alt="" />
                      <h2>
                        <a href="">Sony Smart TV - 2015</a>
                      </h2>
                      <div class="product-sidebar-price">
                        <ins>$700.00</ins> <del>$100.00</del>
                      </div>
                    </div>
                  ))}
                </div>

                <div class="single-sidebar">
                  <h2 class="sidebar-title">Recent Posts</h2>
                  <ul>
                    <li>
                      <a href="">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="">Sony Smart TV - 2015</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-8">
                <div class="product-content-right">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="product-images">
                        <div class="product-main-img">
                          <img src={image4} alt="" />
                        </div>

                        <div class="product-gallery">
                          {img.map((data) => (
                            <img src={data} alt="" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="product-inner">
                        <h2 class="product-name">Sony Smart TV - 2015</h2>
                        <div class="product-inner-price">
                          <ins>$700.00</ins> <del>$100.00</del>
                        </div>

                        <form action="" class="cart">
                          <div class="quantity">
                            <input
                              type="number"
                              size="4"
                              class="input-text qty text"
                              title="Qty"
                              value="1"
                              name="quantity"
                              min="1"
                              step="1"
                            />
                          </div>
                          <button class="add_to_cart_button" type="submit">
                            Add to cart
                          </button>
                        </form>

                        <div class="product-inner-category">
                          <p>
                            Category: <a href="">Summer</a>. Tags:{" "}
                            <a href="">awesome</a>, <a href="">best</a>,{" "}
                            <a href="">sale</a>, <a href="">shoes</a>.{" "}
                          </p>
                        </div>

                        <div role="tabpanel">
                          <ul class="product-tab" role="tablist">
                            <li role="presentation" class="active">
                              <a
                                href="#home"
                                aria-controls="home"
                                role="tab"
                                data-toggle="tab"
                              >
                                Description
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#profile"
                                aria-controls="profile"
                                role="tab"
                                data-toggle="tab"
                              >
                                Reviews
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="related-products-wrapper">
                    <h2 class="related-products-title">Related Products</h2>
                    {array.map((data) => (
                      <div class="related-products-carousel">
                        <div class="single-product">
                          <div class="product-f-image">
                            <img src={data} alt="" />
                            <div class="product-hover">
                              <a href="" class="add-to-cart-link">
                                <i class="fa fa-shopping-cart"></i> Add to cart
                              </a>
                              <a href="" class="view-details-link">
                                <i class="fa fa-link"></i> See details
                              </a>
                            </div>
                          </div>

                          <h2>
                            <a href="">Sony Smart TV - 2015</a>
                          </h2>

                          <div class="product-carousel-price">
                            <ins>$700.00</ins> <del>$100.00</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
