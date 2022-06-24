import React, { Component } from "react";
import payment from "./Images/payment.svg";
import { Link } from "react-router-dom";
import Logo from "./Images/logo.png";
import Datafetch from './Datafetch'
// import Payment from '../../payment.js';

export default class subfooter extends Component {
  render() {
    return (
      <footer class="footer-section">
        <div class="container-fluid">
          <div class="footer-cta pt-3 pb-3">
          {
            Datafetch.map((element =>{
              return (
                <>
              <div class="row bag-14" key={element.id15}>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>{element.sname}</h4>
                    <span>{element.Address}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>{element.cname}</h4>
                    <span>{element.PhoneNum}</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>{element.mname}</h4>
                    <span>{element.email}</span>
                  </div>
                </div>
              </div>
            </div>
              </>
              )
            }))
          }
          </div>
          <div class="footer-content pt-5 pb-5">
            {
              Datafetch.map((element => {
                return (
                  <>
                  <div class="row bag-14" key={element.id15}>
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <Link to="">
                      <img src={Logo} class="img-fluid" alt="logo" />
                    </Link>
                  </div>
                  <div class="footer-text">
                    <p>
                    {element.content}
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <Link to="">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link to="">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link to="">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </Link>
                    <Link to="">
                    
                      <i class="fab fa-instagram instagram instagram-bg"></i>
                    
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>{element.sname1}</h3>
                  </div>
                  <ul>
                    <li>
                      {/* <Link to="">MOBILES</Link> */}
                      <Link to="">{element.link1}</Link>
                    </li>
                    <li>
                      {/* <Link to="">LARGE APPLIANCES</Link> */}
                      <Link to="">{element.link2}</Link>
                    </li>
                    <li>
                      {/* <Link to="">IPHONE</Link> */}
                      <Link to="">{element.link3}</Link>
                    </li>
                    <li>
                      {/* <Link to="">CAMERA</Link> */}
                      <Link to="">{element.link4}</Link>
                    </li>
                    {/* <li>
                      <Link to="">LARGE APPLIANCES</Link>
                    </li> */}
                    <li>
                      {/* <Link to="">CLOTHING</Link> */}
                      <Link to="">{element.link5}</Link>
                    </li>
                    <li>
                      {/* <Link to="">FOOTWEAR</Link> */}
                      <Link to="">{element.link6}</Link>
                    </li>
                    <li>
                      {/* <Link to="">GROCERIES</Link> */}
                      <Link to="">{element.link7}</Link>
                    </li>
                    {/* <li>
                      <Link to="">Contact us</Link>
                      <Link to="">Contact us</Link>
                    </li> */}
                    <li>
                      {/* <Link to="">BEST SELLING ON FLIPKAR</Link> */}
                      <Link to="">{element.link8}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>{element.sname2}</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="">{element.link9}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link10}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link11}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link12}</Link>
                    </li>
                    {/* <li>
                      <Link to="">Contact</Link>
                    </li> */}
                    <li>
                      <Link to="">{element.link13}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link14}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link15}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link16}</Link>
                    </li>
                    <li>
                      <Link to="">{element.link17}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div class="col-xl-4 col-lg-6 col-md-6 mb-50">
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
                  </>
                )
              }))
            }
          </div>
        </div>
        <div class="copyright-area">
          <div class="container-fluid">
            <div class="row bag-14">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2022, All Right Reserved{" "}
                    <Link to="">Himotech Global Technologies</Link>
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
