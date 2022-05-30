import React, { Component } from "react";
import Error from "../Components/Images/error.jpg";
import Header from "./Header";
import Subheader from "./Subheader";
import Subfooter from "./Subfooter";
import { Link } from "react-router-dom";
export class ErrorPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Subheader />

        <section class="forms-24 ">
          <div class="form-25-mian">
            <div class="wrappers">
              <div>
                <h4 class="page-head">Ecommerce Error Page</h4>
              </div>
              <div class="form-inner-cont">
                <div class="forms-25-info">
                  <div class="column form-bottom-img">
                    <img src={Error} alt="img" class="img-responsive" />
                  </div>
                  <div class="column">
                    <h3>404</h3>
                    <p>Page Not Found</p>
                    <p>The page you requested could not found</p>
                    <Link className="custom-btn btn-3 bag-26" to="/">
                      <span>BACK TO HOME</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Subfooter />
      </>
    );
  }
}

export default ErrorPage;
