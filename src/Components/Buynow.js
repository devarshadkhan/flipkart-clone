import React, { Component } from "react";
import Header from "./Header.js";
import Subheader from "./Subheader.js";
import { Link } from "react-router-dom";
import Subfooter from "./Subfooter.js";
// import Payment from '../../payment.js';
import OwlCarousel from "react-owl-carousel";
// import Heart from "react-animated-heart";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Breadcum from './breadcum.js'
// import Slide from './slide.js'
import jQuery from "jquery";
import $ from "jquery";
// // import img50 from './Images/img41.webp'
import img1 from "./Images/img1.webp";
import img39 from "./Images/img39.webp";
import img48 from "./Images/img48.webp";

import img49 from "./Images/img49.webp";
import img50 from "./Images/img50.webp";
import img51 from "./Images/img51.webp";
import img52 from "./Images/img52.webp";
import img53 from "./Images/img53.png";
import img54 from "./Images/img54.svg";
import Datafetch from "./Datafetch.js";

export default class Buynow1 extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      2000: {
        items: 4,
      },
    },
  };
  render() {
 

    return (
      <>
        <Header />
        <Subheader />
        {/* <Breadcum/> */}
        {/* <Slide/> */}
        {/* <div class="product-card">
          <div class="product-details">
            <h1>Product title</h1>
            <p>
              Great product title for Link  great product and all of the extra
              things Link  product might need to make it fill an entire card.
            </p>
            <Link class="custom-btn btn-15" to="/">
              <span>BUY NOW</span>
            </Link>
          </div>
         
        </div> */}

          {
            Datafetch.map((element) => {
              return(
                <section id="services" class="services section-bg" key={element.id20}>
          <div class="container-fluid">
            <div class="row row-sm">
              <div class="col-md-6 _boxzoom">
                <div class="zoom-thumb">
                  <ul class="piclist">
                    <li>
                      <img src={img48} alt="" />
                    </li>
                    <li>
                      <img src={img49} alt="" />
                    </li>
                    <li>
                      <img src={img50} alt="" />
                    </li>
                    <li>
                      <img src={img51} alt="" />
                    </li>
                    <li>
                      <img src={img52} alt="" />
                    </li>
                  </ul>
                </div>
                <div class="_product-images">
                  <div class="picZoomer">
                    <img class="my_img" src={img48} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="_product-detail-content">
                  <p class="_p-name"> {element.Aname20} </p>
                  <div class="_p-price-box">
                    <div class="p-list">
                      <span class="price"> {element.BName20} </span>
                      <span>
                        {" "}
                        M.R.P. : <i class="fa fa-inr"></i> <del>{element.CName20} </del>{" "}
                      </span>
                      <p className="bag-41">{element.DName20}</p>
                    </div>
                    <div class="_p-add-cart">
                      <div class="_p-qty">
                        <span>{element.EName20}</span>
                        <div
                          class="value-button decrease_"
                          id="decrease_"
                          value="Decrease Value"
                        >
                          -
                        </div>
                        <input type="number" name="qty" id="number" value="1" />
                        <div
                          class="value-button increase_"
                          id="increase_"
                          value="Increase Value"
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div class="_p-features">
                      <span>{element.FName20}</span>
                      <ul>
                        <li>
                          <i class="fa-solid fa-tag"></i>{element.GName20}
                        </li>
                        <li>
                          <i class="fa-solid fa-tag"></i>{element.HName20}
                        </li>
                        <li>
                          <i class="fa-solid fa-tag"></i>{element.Iname20}
                        </li>
                        <li>
                          <i class="fa-solid fa-tag"></i>{element.Jname20}
                        </li>
                      </ul>
                    </div>
                    <div className="bag-41">
                      {/* <i class="fa-solid fa-location-dot"></i> */}
                      <img src={img54} alt="" />
                      <p className="bag-46">Delivery To!</p>
                      <select name="" id="" class="form-select">
                        <option value="">Address</option>
                        <option value="">Texas</option>
                        <option value="">Florida</option>
                        <option value=""> New York</option>
                        <option value="">North Carolina</option>
                        <option value="">Ohio</option>
                        <option value="">New Mexico</option>
                      </select>
                      <p className="bag-46">
                        {element.Kname20}<span>Free₹40</span>
                      </p>
                      <div className="bag-48">
                        <h6>Size</h6>
                        <input type="number" placeholder="S" />
                        <input type="number" placeholder="M" />
                        <input type="number" placeholder="L" />
                        <input type="number" placeholder="XL" />
                      </div>
                      <div className="bag-48">
                        <h5>Seller</h5>
                        <span>Techman105</span>
                        <Link
                          to=""
                          data-bs-toggle="popover"
                          data-bs-content="And here's some amazing content. It's very engaging. Right?"
                        >
                          5.0 <i className="fa fa-star"></i>
                        </Link>
                        <div className="img53">
                          <img src={img53} alt="" />
                        </div>
                      </div>
                    </div>
                    <form action="" method="post" accept-charset="utf-8">
                      <ul class="spe_ul"></ul>
                      <div class="_p-qty-and-cart">
                        <div class="_p-add-cart">
                          {/* <button class="btn-theme btn buy-btn" tabindex="0">
                           <i class="fa fa-shopping-cart"></i> Buy Now
                           </button> */}
                          <Link
                            className="custom-btn btn-3 button-anon-pen bag-43"
                            to="/buynow"
                          >
                            <span>ADD TO CART</span>
                          </Link>
                          {/* <button class="btn-theme btn btn-success" tabindex="0">
                           <i class="fa fa-shopping-cart"></i> Add to Cart
                           </button> */}
                          <Link
                            className="custom-btn btn-3 button-anon-pens"
                            to="/buynow"
                          >
                            <span>BUY NOW</span>
                          </Link>
                          <input type="hidden" name="pid" value="18" />
                          <input type="hidden" name="price" value="850" />
                          <input type="hidden" name="url" value="" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
              )
            })
          }

        <section class="sec ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 title_bx">
                <h3 class="title"> Recent Post</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 list-slider ">
                <OwlCarousel
                  className="owl-theme"
                  loop={true}
                  margin={10}
                  nav
                  items={4}
                  dots={false}
                  autoplay={true}
                  autoplayTimeout={2000}
                  responsive={this.state.responsive}
                >
                  <div className="item">
                    <div className="thumb-wrapper ">
                      <span className="wish-icon" id="heart">
                        <i className="fa fa-heart-o" id="heart"></i>
                      </span>
                      <div className="img-box">
                        <img
                          src={img1}
                          className="img-responsive img-fluid bag-6 bag-40 bag-7"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Best of Brands</h4>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <p className="item-price">
                          <strike>$25.00</strike> <b>$23.99</b>
                        </p>
                        <Link
                          className="custom-btn btn-3 button-anon-pen"
                          to="/buynow"
                        >
                          <span>BUY NOW</span>
                        </Link>
                        {/* <Link className="button-anon-pen" to="/buynow">
                        <span>BUY NOW</span>
                      </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="thumb-wrapper">
                      <span className="wish-icon">
                        <i className="fa fa-heart-o"></i>
                      </span>
                      <div className="img-box">
                        <img
                          src={img39}
                          className="img-responsive img-fluid bag-7 bag-40"
                          alt=""
                        />
                      </div>
                      <div className="thumb-content">
                        <h4>Wallet</h4>
                        <p>For Men</p>
                        <div className="star-rating">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="list-inline-item">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <p className="item-price">
                          <strike>$25.00</strike> <b>$23.99</b>
                        </p>
                        <Link className="custom-btn btn-3" to="/buynow">
                          <span>BUY NOW</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
        <Subfooter />
      </>
    );
  };
};