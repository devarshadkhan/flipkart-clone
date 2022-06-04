import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Breadcum1 extends Component {
  render() {
    return (
      <>
        <div className="wrap-5">
          <div className="container">
            <div className="row bag-14 ">
              <div className="col-md-12">
                <ul class="breadcrumb">
                  <li>
                    <Link to="/" className="Lnk">Home</Link>
                  </li>
                  <li>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      class="_39X-Og"
                      className="Lnk"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#878787"
                        class="DpXnhQ"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <Link to="" className="Lnk">My Account</Link>
                  </li>
                  <li>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      class="_39X-Og"
                      className="Lnk"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#878787"
                        class="DpXnhQ"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <Link to="/orderpage" className="Lnk">My Order</Link>
                  </li>
                  <li>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 16 27"
                      xmlns="http://www.w3.org/2000/svg"
                      class="_39X-Og"
                      className="Lnk"
                    >
                      <path
                        d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                        fill="#878787"
                        class="DpXnhQ"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <Link to="" className="Lnk">OD123334736668189000</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
