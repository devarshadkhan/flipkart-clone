import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import img41 from "./Images/img41.png";
export default class offer extends Component {
  render() {
    return (
      <>
        <section className="bag-20">
          <div className="container">
            <div className="row bag-14">
              <div className="col-md-12">
                <div className="box1">
                  <h2>
                    Exciting <br /> Deals
                  </h2>
                  <p>Up to 40% Off</p>
                  <img src={img41} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
