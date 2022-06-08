import React, { Component } from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import Subfooter from "./Subfooter";
import { Link } from "@mui/material";
// import Offer from "./Images/offer.png";
import payment from "./Images/payment.svg";
import flipkart from "./Images/flipkart.png";
import $ from "jquery";
export default class Addtocart extends Component {
  render() {
    $(".decrease_").click(function () {
      decreaseValue(this);
    });
    $(".increase_").click(function () {
      increaseValue(this);
    });
    function increaseValue(_this) {
      var value = parseInt($(_this).siblings("input#number").val(), 10);
      value = isNaN(value) ? 0 : value;
      value++;
      $(_this).siblings("input#number").val(value);
    }

    function decreaseValue(_this) {
      var value = parseInt($(_this).siblings("input#number").val(), 10);
      value = isNaN(value) ? 0 : value;
      // value < 1 ? value = 1 : '';
      value--;
      
      $(_this).siblings("input#number").val(value);
    }

    // let copybtn = document.querySelector(".copybtn");

    // function copyIt() {
    //   let copyInput = document.querySelector("#copyvalue");

    //   copyInput.select();

    //   document.execCommand("copy");

    //   copybtn.textContent = "COPIED";
    // }

    return (
      <>
        <Header />
        <Subheader />
        <div className="wrap-13">
          <div className="container">
            <div className="row bag-14">
              <div className="col-md-7">
                <div className="row bag-14">
                  <div className="col-md-12">
                    <div className="bag-85">
                      <div className="col-md-12 bag-87">
                        <div class="cardpet">
                          <div class="main">
                            <div class="co-img">
                              <img src={flipkart} alt="" />
                            </div>
                            <div class="vertical"></div>
                            <div class="content">
                              <h2>Mcdonalds</h2>
                              <h1>
                                10% <span>Coupon</span>
                              </h1>
                              <p>Valid till 30 April 2021</p>
                            </div>
                          </div>
                          <div class="copy-button">
                            <input
                              id="copyvalue"
                              type="text"
                              readonly
                              value="GOFREE"
                            />
                            <button onclick="copyIt()" class="copybtn">
                              COPY
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bag-86">
                      <div className="col-md-12">
                        <span>Deliver to: </span>
                        <p>New Delhi - 110025</p>
                        <Link className="custom-btn btn-3" to="">
                          <span>Change</span>
                        </Link>
                      </div>
                    </div>
                    <div className="row bag-14">
                      <div className="bag-88">
                        <div className="col-md-2 bag-87">
                          <img
                            src={
                              "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                            }
                            alt=""
                            className="bag-64"
                          />
                          <div class="_p-add-cart">
                            <div class="_p-qty">
                              {/* <span>Add Quantity</span> */}
                              <div
                                class="value-button decrease_"
                                id="decrease_"
                                value="Decrease Value"
                              >
                                -
                              </div>
                              <input
                                type="number"
                                name="qty"
                                id="number"
                                value="1"
                              />
                              <div
                                class="value-button increase_"
                                id="increase_"
                                value="Increase Value"
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5 bag-87">
                          <div className="bag-89">
                            <h5>
                              Lenovo IdeaPad 3 Core i3 11th Gen - 8 GB/512...
                            </h5>
                            <p>
                              15.6 inch, Arctic Grey, 1.65 kg, With MS Office
                            </p>
                            <blockquote>Seller:PETILANTE Online</blockquote>
                            <strike>₹64,490</strike>
                            <h4>₹40,990</h4>
                            <span>30% Off2 offers available</span>
                            <p>Or Pay ₹331 + 18</p>
                          </div>
                        </div>
                        <div className="col-md-5 bag-87">
                          <div className="bag-91">
                            <p className="bag-92">
                              Delivery by 2 PM, Tomorrow | Free{" "}
                              <strike>₹70</strike>
                            </p>
                            <p>
                              Delivery by Tomorrow, Wed | Free{" "}
                              <strike>₹40</strike>
                            </p>
                            <p>7 Days Replacement Policy</p>
                            <p>
                              Safe and Secure Payments.Easy returns.100%
                              Authentic products.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bag-95">
                      <div className="col-md-6 bag-87">
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                      </div>
                      <div className="col-md-6 bag-87">
                        <Link className="custom-btn btn-3 bag-96" to="">
                          <span>Place Order</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="">
                  <div class="wrapper center-block hidden-xs">
                    <nav class="navbar navbar-expand-lg bag-30">
                      <div class="container-fluid">
                        <div className="col-md-12">
                          <div class="card mb-4">
                            <div class="card-header">Payment</div>
                            <div class="" id="">
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <td>Price (3 items)</td>
                                    <td className="bag-94">₹65,988</td>
                                  </tr>
                                  <tr>
                                    <td>Discount</td>
                                    <td className="bag-94">− ₹24,649</td>
                                  </tr>
                                  <tr>
                                    <td>Delivery Charges</td>
                                    <td className="bag-94">FREE</td>
                                  </tr>
                                  <tr className="bag-93">
                                    <td>Total Amount</td>
                                    <td className="bag-94">₹41,339</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <span>You will save ₹24,649 on this order</span>
                          </div>
                          <Link to="/payments">
                            <img src={payment} alt="" className="bag-100"/>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subfooter />
      </>
    );
  }
}
