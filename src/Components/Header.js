import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
// import DownloadLink from "react-download-link";
import Logo from "./Images/logo.png";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
export default class header extends Component {
  render() {
    return (
      <>
        <ScrollToTop smooth color="#fff" />
        <section className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className="col-md-2">
                <Link className="navbar-brand" to="/">
                  <img src={Logo} alt="" className="bag-1" />
                </Link>
              </div>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
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
                      to="#exampleModalToggle"
                      data-bs-toggle="modal"
                      role="button"
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
                          Notification Preferences
                          <i className="fa fa-bell"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          24*7 Customer Care
                          <i className="fa fa-phone-square"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Advertise
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Download App
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Affiliate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/orderpage">
                      My Order
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>

        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                {/* <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5> */}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="login-page">
                  <div className="form">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Login
                    </h5>

                    <form className="login-form">
                      <input type="text" placeholder="username" required />
                      <input type="password" placeholder="password" required />
                      <button>login</button>
                      <p className="message">
                        Not registered?
                        <Link
                          to="/"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                        >
                          Create an account
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalToggle2"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="login-page">
                  <div className="form">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Register
                    </h5>
                    <form className="register-form">
                      <input type="text" placeholder="name" required />
                      <input type="password" placeholder="password" required />
                      <input type="text" placeholder="email address" required />
                      <button>create</button>
                      <p className="message">
                        Already registered? <Link to="/">Sign In</Link>
                      </p>
                    </form>

                    <form className="login-form">
                      <input type="text" placeholder="username" required />
                      <input type="email" placeholder="email" required />
                      <input
                        type="number"
                        placeholder="phone number"
                        required
                      />

                      <button>Register</button>
                      <p className="message">
                        {/* Not registered?{" "} */}
                        <Link
                          to="/"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Login
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}
