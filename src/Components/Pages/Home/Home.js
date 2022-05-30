import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header1.js";
import Subheader from "../../Subheader1.js";
import Footer from "../../Subfooter1.js";
import Slide from "../../Slide1.js";
import Offer from "../../Offer1.js";
import Delivery from "../../Delivery.js";
import Deliverystatus from "../../Deliverystatus1.js";


// import Payment from '../../payment.js';
import OwlCarousel from "react-owl-carousel";
// import Heart from "react-animated-heart";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../Images/img1.webp";
import img2 from "../../Images/img2.webp";
import img3 from "../../Images/img3.webp";
import img4 from "../../Images/img4.webp";
import img5 from "../../Images/img5.webp";
import img6 from "../../Images/img6.webp";
import img7 from "../../Images/img7.webp";
import img8 from "../../Images/img8.webp";
import img9 from "../../Images/img9.webp";
import img10 from "../../Images/img10.webp";
import img11 from "../../Images/img11.webp";
import img12 from "../../Images/img12.webp";
import img13 from "../../Images/img13.webp";
import img14 from "../../Images/img14.webp";
import img15 from "../../Images/img15.webp";
import img16 from "../../Images/img16.webp";
import img17 from "../../Images/img17.webp";
import img18 from "../../Images/img18.webp";
import img19 from "../../Images/img19.webp";
import img20 from "../../Images/img20.webp";
import img21 from "../../Images/img21.webp";
import img22 from "../../Images/img22.webp";
import img23 from "../../Images/img23.webp";
import img24 from "../../Images/img24.webp";
import img25 from "../../Images/img25.webp";
import img26 from "../../Images/img26.webp";
import img27 from "../../Images/img27.webp";
import img28 from "../../Images/img28.webp";
import img31 from "../../Images/img31.webp";
import img30 from "../../Images/img30.webp";
import img32 from "../../Images/img32.webp";
import img33 from "../../Images/img33.webp";
import img34 from "../../Images/img34.webp";
import img35 from "../../Images/img35.webp";
import img36 from "../../Images/img36.webp";
import img37 from "../../Images/img37.webp";
import img38 from "../../Images/img38.webp";
import img39 from "../../Images/img39.webp";
import img40 from "../../Images/img40.webp";
// import $ from 'jquery';
require("react-owl-carousel");

export default class Home extends Component {
  // state = {
  //   date: new Date()
  // }

  // componentDidMount() {
  //   this.timerId = setInterval(() => this.tick(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  // tick() {
  //   // this.state.date = new Date(); - wrong way
  //   this.setState({date: new Date()});
  // }
  state= {
    responsive:{
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
            items: 6,
        },
        2000: {
            items: 6,
        },
    },
}
  render() {
    // const [isClick, setClick] = useState(false);
    return (
      <>

        <Header />
        <Subheader />
        <Slide />
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Suggest For You</h2>
                  <p>Based on Your Activity</p>
                </div>
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
                        className="img-responsive img-fluid bag-6 "
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
                      <i className="fa fa-heart-o" id="heart"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img2}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Tops Dressed</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img3}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Trimmer</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img4}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Designer Bedsheets</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img5}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Containers</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img6}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Bath Soap</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
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
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Suggest For You</h2>
                  <p>Based on Your Activity</p>
                </div>
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
    responsive={this.state.responsive}
              >
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img7}
                        className="img-responsive img-fluid bag-6"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Bra & Bikini's</h4>
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
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img8}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Watches</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img9}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>CookWare's Sets</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img10}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Steamer Vaporiser</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img11}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Sparks, Burton & More</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img12}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Selling Footware</h4>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
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
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Best of Laptops For Developer's</h2>
                  <p>Devices and Accessories</p>
                </div>
                <div className="col-md-6">
                  <div className="bag-5">
                    <Link className="custom-btn btn-11" to="/laptop">
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
    responsive={this.state.responsive}
              >
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img13}
                        className="img-responsive img-fluid bag-6"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Dell Inspiron</h4>
                      <p>Core i5 11th Gen 8GB/256GB</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img14}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Lenevo IdeaPad</h4>
                      <p>3 Core 11th Gen 8GB/256GB</p>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img15}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>ASUS VivoBook</h4>
                      <p>Core i3 10th Gen 8GB/256GB</p>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img16}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>APPLE 2022</h4>
                      <p>MacBook Air M1 8GB/256GB</p>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img17}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>HP Thin & Light</h4>
                      <p>Core i3 11th Gen 8GB/256GB</p>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
                      </p>
                      <Link className="custom-btn btn-3" to="/buynow">
                        <span>BUY NOW</span>
                      </Link>
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
                        src={img18}
                        className="img-responsive img-fluid bag-6"
                        alt="/"
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>realme Book Slim</h4>
                      <p>Core i3 11th Gen 8GN/256GB</p>
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
                        <strike>$400.00</strike>
                        <b>$369.00</b>
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
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Best of Electronics</h2>
                  <p>Devices and Accessories</p>
                </div>
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
    responsive={this.state.responsive}
              >
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img19}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>APPLE Iphone 11,12,13</h4>
                      <p>64GB ROM</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img20}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>RedMi All Set</h4>
                      <p>64GB ROM</p>
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

                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img21}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>OPPO All Set</h4>
                      <p>64GB ROM</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img22}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>SAMSUNG All Set</h4>
                      <p>64GB ROM</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img23}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>VIVO All Set</h4>
                      <p>64GB ROM</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img24}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>REALME All Set</h4>
                      <p>64GB ROM</p>
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
        <Offer /> {/* Components bumber offer */}
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Fashion For Women</h2>
                  <p>Heavy Discount in Fashoin</p>
                </div>
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
    responsive={this.state.responsive}
              >
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img25}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Ladies Undergarments</h4>
                      <p>Women with Hipster</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img26}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Ladies BRA</h4>
                      <p>Fit And Comfortable</p>
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

                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img27}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Highty</h4>
                      <p>Women Highty 4-Pcs</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img28}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Night Top</h4>
                      <p>Comfortable Sleeping</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img31}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Track Suit</h4>
                      <p>Women Track Suit</p>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img30}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Women Dress</h4>
                      <p>Jogging Dresses</p>
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
        <Delivery/>
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Best Deals in Phones</h2>
                  <p>Heavy Discount in Mobile</p>
                </div>
                <div className="col-md-6">
                  <div className="bag-5">
                    <Link className="custom-btn btn-11" to="/buynow">
                      <span>Veiw All</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <Link to="/buynow">
                  <img src={img32} alt="" className="bag-8" />
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/buynow">
                  <img src={img33} alt="" className="bag-8" />
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/buynow">
                  <img src={img34} alt="" className="bag-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
              <div className="BorderBottom">
                <div className="col-md-6">
                  <h2>Trending Offers</h2>
                  <p>
                    Heavy Discount offer left <span className="bag-9"></span>
                  </p>
                </div>
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
    responsive={this.state.responsive}
              >
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img35}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Casual Shirt</h4>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img36}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Saree's</h4>
                      <p>For Women</p>
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

                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img37}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Designer Shirt Parties</h4>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img38}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Wrist Watch</h4>
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img39}
                        className="img-responsive img-fluid bag-7"
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
                <div className="item">
                  <div className="thumb-wrapper">
                    <span className="wish-icon">
                      <i className="fa fa-heart-o"></i>
                    </span>
                    <div className="img-box">
                      <img
                        src={img40}
                        className="img-responsive img-fluid bag-7"
                        alt=""
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>American Tourister</h4>
                      <p>Luggagage Bag</p>
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
        <Deliverystatus/>
        <Footer />
      </>
    );
  };
};
