import React, { Component } from "react";

import { Link } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import Subfooter from "./Subfooter";
import Pagecount from "./Pagecount";
import Img55 from './Images/img55.svg'
// import $ from "jquery"
export default class Filterpage2 extends Component {
  render() {
    return (
      <>
        <Header />
        <Subheader />

        <div className="container-fluid">
          <div class="row bag-61">
            <div class="col-md-3 bag-45 ">
              <div className="bag-31 shadow">
                <div class="wrapper center-block hidden-xs">
                  <nav class="navbar navbar-expand-lg bag-30">
                    <div class="container-fluid">
                      <div className="col-md-12">
                        <div class="card mb-4">
                          <div class="card-header">Order Status</div>
                          <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item dropdown">
                                <div className="bag-65">
                                  <input
                                    type="checkbox"
                                    className="impuuting"
                                  />
                                  <p>On the way</p>
                                </div>
                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>Delivered</p>
                                </div>

                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>Cancelled</p>
                                </div>
                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>Returned</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <Link
                            className="custom-btn btn-3 bag-27"
                            to="/buynow"
                          >
                            <span>Filter</span>
                          </Link> */}
                        </div>
                        <div class="card mb-4">
                          <div class="card-header">Order Time</div>
                          <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item dropdown">
                                <div className="bag-65">
                                  <input
                                    type="checkbox"
                                    className="impuuting"
                                  />
                                  <p>last 30 Days</p>
                                </div>
                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>2022</p>
                                </div>

                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>2021</p>
                                </div>
                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>2020</p>
                                </div>
                                <div className="bag-65">
                                  <input type="checkbox" />
                                  <p>2019</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <Link
                            className="custom-btn btn-3 bag-27"
                            to="/buynow"
                          >
                            <span>Filter</span>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <form className="d-flex">
                <input
                  className="form-control me-2 bag-60"
                  type="search"
                  placeholder="Search your order here"
                  aria-label="Search"
                />
                <Link className="custom-btn btn-3 bag-32 bag-66" to="/" type="submit">
                  <span>
                    <i className="fa fa-search"></i>
                  </span>
                </Link>
              </form>

              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orderstatus">
                <div className="bag-63">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-5">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <p className="bag-81">₹455</p>
                    </div>
                    <div className="col-md-4">
                      <ul className="bag-80">
                        <li className="bag-75">Delivered on Jun 05, 2021</li>
                        <span>
                        Your item has been delivered
                        </span>
                      </ul>
                      <img src={Img55} alt="" className="bag-79"/>
                      <p className="bag-78">Rate & Review Product</p>
                    </div>
                  </div>
                </div>
              </Link>
             
              <Pagecount />
            </div>
          </div>
        </div>
        <Subfooter />
      </>
    );
  }
}
