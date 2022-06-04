import React, { Component } from "react";
import payment from "./Images/payment.svg";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
// import Payment from '../../payment.js';

export default class subfooter extends Component {
  render() {
    return (
      <footer class="footer-section">
        <div class="container-fluid">
          <div class="footer-cta pt-3 pb-3">
            <div class="row bag-14">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>B-01, 84, Block D, Sector 2, Noida, UP 201301</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>9818xxxxxx</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>info@himotechglobal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row bag-14">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <Link to="/">
                      <img src={Logo} class="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <div class="footer-text">
                    <p>
                      What's more, with our year-round shopping festivals and
                      events, our prices are irresistible. We're sure you'll
                      find yourself picking up more than what you had in mind.
                      If you are wondering why you should shop from Flipkart
                      when there are multiple options available to you, well,
                      the below will answer your question.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="/">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link to="/">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link to="/">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </Link>
                    <Link to="/">
                    
                      <i class="fab fa-instagram instagram instagram-bg"></i>
                    
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Product Categories</h3>
                  </div>
                  <ul>
                    <li>
                      {/* <Link to="/">MOBILES</Link> */}
                      <Link to="/">Mobiles</Link>
                    </li>
                    <li>
                      {/* <Link to="/">LARGE APPLIANCES</Link> */}
                      <Link to="/">Large Appliance</Link>
                    </li>
                    <li>
                      {/* <Link to="/">IPHONE</Link> */}
                      <Link to="/">Iphone</Link>
                    </li>
                    <li>
                      {/* <Link to="/">CAMERA</Link> */}
                      <Link to="/">Camera</Link>
                    </li>
                    {/* <li>
                      <Link to="/">LARGE APPLIANCES</Link>
                    </li> */}
                    <li>
                      {/* <Link to="/">CLOTHING</Link> */}
                      <Link to="/">Clothing</Link>
                    </li>
                    <li>
                      {/* <Link to="/">FOOTWEAR</Link> */}
                      <Link to="/">Footwear</Link>
                    </li>
                    <li>
                      {/* <Link to="/">GROCERIES</Link> */}
                      <Link to="/">Groceries</Link>
                    </li>
                    {/* <li>
                      <Link to="/">Contact us</Link>
                      <Link to="/">Contact us</Link>
                    </li> */}
                    <li>
                      {/* <Link to="/">BEST SELLING ON FLIPKAR</Link> */}
                      <Link to="/">Best Selling on Flipkart</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">about</Link>
                    </li>
                    <li>
                      <Link to="/">services</Link>
                    </li>
                    <li>
                      <Link to="/">portfolio</Link>
                    </li>
                    {/* <li>
                      <Link to="/">Contact</Link>
                    </li> */}
                    <li>
                      <Link to="/">About us</Link>
                    </li>
                    <li>
                      <Link to="/">Our Services</Link>
                    </li>
                    <li>
                      <Link to="/">Faq</Link>
                    </li>
                    <li>
                      <Link to="/">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/">Payments</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container-fluid">
            <div class="row bag-14">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2022, All Right Reserved{" "}
                    <Link to="/">Himotech Global Technologies</Link>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <Link to="/payments">
                        <img src={payment} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
