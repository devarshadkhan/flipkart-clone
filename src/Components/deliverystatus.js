import React, { Component } from 'react'
import Img42 from "./Images/img42.png"
import Img43 from "./Images/img43.png"
import Img45 from "./Images/img45.png"
import Img44 from "./Images/img44.webp"
export default class Deliverystatus extends Component {
  render() {
    return (
      <>
          <div className="wrap-8">
              <div className="container">
                  <div className="row bag-14">
                        <div className="col-md-3">
                            <div className="bag-20">
                               <div className="bag-21">
                               <img src={Img42} alt="" />
                                <h3>Safe Payment</h3>
                               </div>
                                <p>Pay with the world’s most popular and secure payment methods.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="bag-20">
                               <div className="bag-21">
                               <img src={Img43} alt="" />
                                <h3>Worldwide Delivery</h3>
                               </div>
                                <p>With sites in 5 languages, we ship to over 200 countries & regions.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="bag-20">
                               <div className="bag-21">
                               <img src={Img44} alt="" />
                                <h3>24/7 Help Center</h3>
                               </div>
                                <p>Round-the-clock assistance for a smooth shopping experience.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="bag-20">
                               <div className="bag-21">
                               <img src={Img45} alt="" />
                                <h3>Daily Promotion</h3>
                               </div>
                                <p>Get a new great bonus every day. Check out the Locamart</p>
                            </div>
                        </div>
                  </div>
              </div>
          </div>
      </>
    );
  };
};
