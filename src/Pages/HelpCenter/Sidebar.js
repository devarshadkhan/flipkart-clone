import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="wrap-30">
        {/* <div className="container">
                <div className="row">
                    
                </div>
            </div> */}
        <div className="bin-32">
          <h6>HELP TOPICS</h6>
        </div>
        <div className="bin-33">
          <ul>
            <li>
              <Link to="/flipkart-plus">Flipkart Plus</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/cancellationandreturn">Cancellations and Returns</Link>
            </li>
            <li>
              <div class="dropdown">
                <Link
                  to="/card-payments"
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Payment
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/card-payments">
                      Bajaj Finserv EMI
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      SBI Pre-approved loan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Credit Card No Cost EMI
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Flipkart Axis Bank Credit Card
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <Link
                  to=""
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/shippings">
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Flipkart First
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Selling on Flipkart
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Product Reviews
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Login & My Account
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Privacy & Security
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Warranty
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pickup Stores
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Installation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Flipkart Travel
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <Link
                  to=""
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Insurance
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Aegon Life Insurance
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      COVID-19 Protect (Coronavirus Insurance)
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="">Flipkart Quick</Link>
            </li>
            <li>
              <Link to="">SuperCoins</Link>
            </li>
            <li>
              <Link to="">Refurbished</Link>
            </li>
            <li>
              <Link to="">Hotels</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;