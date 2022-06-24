import React, { Component } from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import Subfooter from "./Subfooter";
import { Link } from "@mui/material";
import Offer from "./Images/offer.png";
import payment from "./Images/payment.svg";
import flipkart from "./Images/flipkart.png";
import Datafetch from "./Datafetch.js";
import $ from "jquery";
export default class Addtocart extends Component {
  render() {
    return (
      <>
        <Header />
        <Subheader />
        <div className="wrap-13">
          <div className="container">
            {Datafetch.map((element) => {
              return (
                <>
                  <div className="row bag-14" key={element.id19}>
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
                                    <h2>{element.Aname19}</h2>
                                    <h1>
                                      {element.Bname19}{" "}
                                      <span>{element.Cname19}</span>
                                    </h1>
                                    <p>{element.Dname19}</p>
                                  </div>
                                </div>
                                <div class="copy-button">
                                  <input
                                    id="copyvalue"
                                    type="text"
                                    readonly
                                    value="ARSHAD-KHAN"
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
                              <span>{element.Ename19}</span>
                              <p>{element.Fname19}</p>
                              <Link className="custom-btn btn-3" to="">
                                <span>{element.Gname19}</span>
                              </Link>
                            </div>
                          </div>
                          <div className="row bag-14">
                            <div className="bag-88">
                              <div className="col-md-2 bag-87">
                                <img
                                  src={element.image19}
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
                                  <h5>{element.Hname19}</h5>
                                  <p>{element.Iname19}</p>
                                  <blockquote>{element.Jname19}</blockquote>
                                  <strike>{element.Kname19}</strike>
                                  <h4>{element.Lname19}</h4>
                                  <span>{element.Mname19}</span>
                                  <p>{element.Nname19}</p>
                                </div>
                              </div>
                              <div className="col-md-5 bag-87">
                                <div className="bag-91">
                                  <p className="bag-92">
                                    {element.Pname19}
                                    <strike>{element.Qname19}</strike>
                                  </p>
                                  <p>
                                    {element.Rname19}
                                    <strike>{element.Sname19}</strike>
                                  </p>
                                  <p>{element.Tname19}</p>
                                  <p>{element.Uname19}</p>
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
                                          <td>{element.Vname19}</td>
                                          <td className="bag-94">
                                            {element.Wname19}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>{element.Xname19}</td>
                                          <td className="bag-94">
                                            {element.Yname19}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>{element.Zname19}</td>
                                          <td className="bag-94">
                                            {element.Zaname19}
                                          </td>
                                        </tr>
                                        <tr className="bag-93">
                                          <td>{element.Zbname19}</td>
                                          <td className="bag-94">
                                            {element.Zcname19}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <span>{element.Zdname19}</span>
                                </div>
                                <Link to="/payments">
                                  <img
                                    src={payment}
                                    alt=""
                                    className="bag-112"
                                  />
                                </Link>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <Subfooter />
      </>
    );
  }
}