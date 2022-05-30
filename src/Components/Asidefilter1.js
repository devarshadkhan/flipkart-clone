import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Asidefilter1 extends Component {
  render() {
    return (
      <>
        <div class="col-md-3 col-sm-12 bag-45">
          <div className="bag-31 shadow">
            <div class="wrapper center-block hidden-xs">
              <div class="filters-text">
                {/* <span class="filter-span">Filters <small>(find product using filters below)</small></span> */}
                <input
                  class="filter-span"
                  placeholder="find products"
                  type="text"
                ></input>
                <span style={{ float: "right" }}>
                  <i class="fa fa-filter"></i>
                </span>
              </div>
              <nav class="navbar navbar-expand-lg bag-30">
                <div class="container-fluid">
                  <div className="col-md-12 bag-45">
                    <div class="card mb-4">
                      <div class="card-header">Categories</div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/desktop"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Desktop
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/desktop">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/desktop">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/desktop">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/laptop"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Laptop
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/laptop">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/laptop">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/laptop">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Storage
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Tablets
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Smart Wearless
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Laptop Components
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Mobile Accessories
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item dropdown">
                            <Link
                              class="nav-link dropdown-toggle"
                              to="/"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Smart Home Automation
                            </Link>
                            <ul
                              class="dropdown-menu bag-33"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-1
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-2
                                </Link>
                              </li>
                              <li>
                                <Link class="dropdown-item" to="/">
                                  Desktop-3
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">Filter</div>
                      <div class="card-body p-1">
                        <div class="card border-0 b-3">
                          <div
                            class="card-header p-2 bg-white"
                            data-toggle="collapse"
                            data-target="/collapseExample1"
                            aria-expanded="false"
                          >
                            <p class="m-0 h6">Brand</p>
                          </div>
                          <div
                            class="card-body p-0 collapse show"
                            id="collapseExample1"
                          >
                            <ul
                              class="list-group list-group-flush"
                              style={{ height: "200px", overflow: "auto;" }}
                            >
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Google
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Microsoft
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Apple
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Samsung
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Lenovo
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Amazon
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Asus
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    LG
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Sony
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    MSI
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    HP
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    Compact
                                  </label>
                                </div>
                                <span class="badge badge-secondary badge-pill">
                                  14
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="card border-0 b-3">
                          <div
                            class="card-header p-2 bg-white"
                            data-toggle="collapse"
                            data-target="/collapseExample2"
                            aria-expanded="false"
                          >
                            <p class="m-0 h6">Size</p>
                          </div>
                          <div
                            class="card-body p-0 collapse show"
                            id="collapseExample2"
                          >
                            <ul
                              class="list-group list-group-flush"
                              style={{ height: "200px", overflow: "auto;" }}
                            >
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    XXS
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    XS
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    S
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    M
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    L
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    XL
                                  </label>
                                </div>
                              </li>
                              <li class="list-group-item p-2 d-flex justify-content-between align-items-center">
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  >
                                    XXL
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="card border-0 b-3">
                          <div
                            class="card-header p-2 bg-white"
                            data-toggle="collapse"
                            data-target="/collapseExample4"
                            aria-expanded="false"
                          >
                            <p class="m-0 h6">Price</p>
                          </div>
                          <div
                            class="card-body p collapse show"
                            id="collapseExample4"
                          >
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label>Min</label>
                                <input
                                  class="form-control bag-23"
                                  placeholder="$0"
                                  type="number"
                                />
                              </div>
                              <div class="form-group text-right col-md-6">
                                <label>Max</label>
                                <input
                                  class="form-control bag-23"
                                  placeholder="$1,0000"
                                  type="number"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div class="card-footer">
					<button type="button" class="custom-btn btn-3">Filter</button>
				</div> */}
                    </div>
                  </div>
                </div>
              </nav>

              <div class="text-right refine">
                {" "}
                <Link
                  className="custom-btn btn-3 bag-27"
                  id="button-filter"
                  to="/buynow"
                >
                  <span>Filter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
