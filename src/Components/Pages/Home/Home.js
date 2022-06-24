import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header.js";
import Subheader from "../../Subheader.js";
import Footer from "../../Subfooter.js";
import Slide from "../../Slide.js";
import Offer from "../../Offer.js";
import Delivery from "../../Delivery.js";
import Deliverystatus from "../../Deliverystatus.js";
// import Payment from '../../payment.js';
import OwlCarousel from "react-owl-carousel";
// import Heart from "react-animated-heart";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Datafetch from "../../Datafetch.js";
// import { useDispatch } from "react-redux";

// import { ADD } from '../redux/actions/action';
// import $ from 'jquery';
require("react-owl-carousel");

const Home = () => {
  // const [data, setData] = useState(Datafetch);
  //  console.log("data me yaha se aar hai",data);

  //  const [data1, setdata1] = useState(Product.childCategories);
  //  console.log("check Sub-category Product",data1)

  // const category1 = Product.childCategories;
  // console.log("arsgajd", category1);

  // const dispatch = useDispatch();

  // const send = (e)=>{
  //   console.log(e);
  //   // dispatch(ADD(e));
  // }

  return (
    <>
      <div className="bag-111"></div>
      <Header />
      <Subheader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Slide />
          </div>
        </div>
      </div>
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id6}>
                    <h2>{element.name6}</h2>
                    <p>{element.subtitle6}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={3000}
              // responsive={this.state.responsive}
              autoplayHoverPause
              responsiveClass
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.id}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.image}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productname}</h4>
                            <p>{element.decs}</p>
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
                              <strike>{element.cutprice}</strike>
                              <b>{element.price}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.button}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.LadiesWear.map((data) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data.productname}</h4>
                                <p>{data.decs}</p>
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
                                  <strike>{data.cutprice}</strike>
                                  <b>{data.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id7}>
                    <h2>{element.name7}</h2>
                    <p>{element.subtitle7}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              // responsive={this.state.responsive}
              autoplayHoverPause
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.ids}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.images}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productnames}</h4>
                            <p>{element.decss}</p>
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
                              <strike>{element.cutprices}</strike>
                              <b>{element.prices}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.buttons}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.Menswaer.map((data1) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data1.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data1.productname}</h4>
                                <p>{data1.decs}</p>
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
                                  <strike>{data1.cutprice}</strike>
                                  <b>{data1.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id8}>
                    <h2>{element.name8}</h2>
                    <p>{element.subtitle8}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              // responsive={this.state.responsive}
              autoplayHoverPause
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.id1}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.image1}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productname1}</h4>
                            <p>{element.decs1}</p>
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
                              <strike>{element.cutprice1}</strike>
                              <b>{element.price1}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.button}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.Laptop.map((data1) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data1.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data1.productname}</h4>
                                <p>{data1.decs}</p>
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
                                  <strike>{data1.cutprice}</strike>
                                  <b>{data1.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id9}>
                    <h2>{element.name9}</h2>
                    <p>{element.subtitle9}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              // responsive={this.state.responsive}
              autoplayHoverPause
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.id2}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.image2}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productname2}</h4>
                            <p>{element.decs2}</p>
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
                              <strike>{element.cutprice2}</strike>
                              <b>{element.price2}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.button}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.Mobile.map((data1) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data1.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data1.productname}</h4>
                                <p>{data1.decs}</p>
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
                                  <strike>{data1.cutprice}</strike>
                                  <b>{data1.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <Offer />
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id10}>
                    <h2>{element.name10}</h2>
                    <p>{element.subtitle10}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              // responsive={this.state.responsive}
              autoplayHoverPause
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.id3}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.image3}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productname3}</h4>
                            <p>{element.decs3}</p>
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
                              <strike>{element.cutprice3}</strike>
                              <b>{element.price3}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.button}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.BraBikini.map((data1) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data1.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data1.productname}</h4>
                                <p>{data1.decs}</p>
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
                                  <strike>{data1.cutprice}</strike>
                                  <b>{data1.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id11}>
                    <h2>{element.name11}</h2>
                    <p>{element.subtitle11}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              nav
              items={6}
              dots={false}
              autoplay={true}
              autoplayTimeout={2000}
              // responsive={this.state.responsive}
              autoplayHoverPause
            >
              {Datafetch &&
                Datafetch.map((element) => {
                  return (
                    <>
                      <div className="item" key={element.id4}>
                        <div className="thumb-wrapper ">
                          <span className="wish-icon" id="heart">
                            <i className="fa fa-heart-o" id="heart"></i>
                          </span>
                          <div className="img-box">
                            <img
                              src={element.image4}
                              className="img-responsive img-fluid bag-6 "
                              alt=""
                            />
                          </div>
                          <div className="thumb-content">
                            <h4>{element.productname4}</h4>
                            <p>{element.decs4}</p>
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
                              <strike>{element.cutprice4}</strike>
                              <b>{element.price4}</b>
                            </p>
                            <Link
                              className="custom-btn btn-3 button-anon-pen"
                              to=""
                            >
                              <span>{element.button}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {element.offer.map((data1) => {
                        return (
                          <div className="item" key={element.id}>
                            <div className="thumb-wrapper ">
                              <span className="wish-icon" id="heart">
                                <i className="fa fa-heart-o" id="heart"></i>
                              </span>
                              <div className="img-box">
                                <img
                                  src={data1.image}
                                  className="img-responsive img-fluid bag-6 "
                                  alt=""
                                />
                              </div>
                              <div className="thumb-content">
                                <h4>{data1.productname}</h4>
                                <p>{data1.decs}</p>
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
                                  <strike>{data1.cutprice}</strike>
                                  <b>{data1.price}</b>
                                </p>
                                <Link
                                  className="custom-btn btn-3 button-anon-pen"
                                  to=""
                                >
                                  <span>{element.button}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="wrap-4">
        <div className="container-fluid">
          <div className="row">
            <div className="BorderBottom">
              {Datafetch.map((element) => {
                return (
                  <div className="col-md-6" key={element.id12}>
                    <h2>{element.name12}</h2>
                    <p>{element.subtitle12}</p>
                  </div>
                );
              })}
              <div className="col-md-6">
                <div className="bag-5">
                  <Link className="custom-btn btn-11" to="/buynow">
                    <span>Veiw All</span>
                  </Link>
                </div>
              </div>
            </div>
            {Datafetch.map((element) => {
              return (
                <>
                  <div key={element.id5}>
                    <div className="row">
                      <div className="col-md-4">
                        <Link to="/buynow">
                          <img
                            src={element.image5}
                            alt=""
                            className="bag-110"
                          />
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link to="/buynow">
                          <img
                            src={element.image5}
                            alt=""
                            className="bag-110"
                          />
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link to="/buynow">
                          <img
                            src={element.image5}
                            alt=""
                            className="bag-110"
                          />
                        </Link>
                      </div>

                      {/* {element.saleimage.map((data1) => {
                        return (
                          <>
                            <div key={element.id}>
                              <div className="row">
                                <div className="col-md-4">
                                  <Link to="/buynow">
                                    <img
                                      src={data1.image}
                                      alt=""
                                      className="bag-110"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })} */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Delivery />
      <Deliverystatus />
      <Footer />
    </>
  );
};

export default Home;