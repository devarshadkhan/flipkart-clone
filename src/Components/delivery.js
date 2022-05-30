import React, { Component } from 'react'
import {  Link } from "react-router-dom";
export default class Delivery extends Component {
  render() {
    return (
      <>
          <div className="wrap-7">
          <div className="container">
              <div className="row bag-14">
              <div className="col-md-9">
                  <div className="bag-16">
                      <h3>Already Loving Flipkart? Buy it Now!</h3>
                      <p>The most common requests from flipkart merchants incorporated into one platform <br />that extends Flipkart with many <span>"Essential Extra Features"</span></p>
                  </div>
              </div>
              <div className="col-md-3">
                 
                  <Link className="btn btn-danger bag-35" to="/">
                  {/* <i class="fa-solid fa-arrow-right"></i> */}
                        <span>Get Flipkart Now</span>
                      </Link>
              </div>
              </div>
          </div>
      </div>
      </>
    )
  }
}
