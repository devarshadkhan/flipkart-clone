import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
// import DownloadLink from "react-download-link";
import Logo from "./Images/logo.png";
export default class header extends Component {
  render() {
    return (
      <>
        <section className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className="col-md-2">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} alt="" className="bag-1" />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for products, brands, and more"
                  aria-label="Search"
                />
              </form>
              {/* <a href="/" className='fa fa-search bag-2'></a> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active bag-2"
                      aria-current="page"
                      to="/"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                      type="button"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Become a Seller
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/">
                          Notification Preferences <i className="fa fa-bell"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          24*7 Customer Care <i className="fa fa-phone-square"></i>
                        </Link> 
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Advertise
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/" >
                          Download App
                        </Link>
                        {/* <DownloadLink
                          label="Download"
                          filename="fileName.txt"
                          className="dropdown-item"
                          exportFile={() => "https://play.google.com/store/apps/details?id=com.flipkart.android&hl=en_IN&gl=US"}
                      /> */}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Affiliate
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Faq
                    </Link>
                  </li> */}
                </ul>
                {/* <i className='fa fa-shopping-cart fa-3x '></i> */}
              </div>
            </div>
          </nav>
        </section>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
          <div className="wrap-6">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="login-page">
                  <div className="form">
                    <form className="register-form">
                      <input type="text" placeholder="name" />
                      <input type="password" placeholder="password" />
                      <input type="text" placeholder="email address" />
                      <button>create</button>
                      <p className="message">
                        Already registered? <Link to="/">Sign In</Link>
                      </p>
                    </form>
                    <form className="login-form">
                      <input type="text" placeholder="username" />
                      <input type="password" placeholder="password" />
                      <button>login</button>
                      <p className="message">
                        Not registered? <Link to="/"  data-bs-toggle="modal" data-bs-target="#exampleModal">Create an account</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
<Outlet />
      </>
    );
  }
}
