import React, { Component } from 'react';
import Header from './Header.js';
import Subheader from './Subheader.js';
import Subfooter from './Subfooter.js';
import Breadcum from './Breadcum.js';
import { Link } from 'react-router-dom';
import Datafetch from "./Datafetch.js";
export class Orderstatus extends Component {
  render() {
    return (
      <>
        <Header/>
        <Subheader/>
        <Breadcum/>
        <div className="wrap-12">
        <div className="container">
          <div className="row bag-14">
           {
            Datafetch.map((element => {
              return (
                <>
                <div className="col-md-12" key={element.id17}>
                <div className="bag-67">
                  <h6>{element.deliveryAdd}</h6>
                  <h5>{element.deliveryName}</h5>
                  <p>{element.deliveryAddress}</p>
                  <span>{element.phoneName}</span>
                  <span className='span'>{element.phonenumber}</span>
                </div>
            </div>
                </>
              )
            }))
           }
            <div className="col-md-12">
            <Link to="/orderpage">
                <div className="bag-64">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://growngaming.com/wp-content/uploads/2017/04/rotw3-1.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                  {
                    Datafetch.map((element => {
                      return (
                        <div className="col-md-3 bag-70" key={element.id18}>
                      <h6>{element.name3}</h6> <br />
                      <div className="parad">
                        <p>{element.color3}</p>
                        <p>{element.seller}</p>
                        <h2>₹{element.price18}</h2>
                        <p className="bag-71">{element.offerPrice}</p>
                      </div>
                    </div>
                      )
                    }))
                  }
                    <div className="col-md-6 hh-grayBox  pb20">
						{/* <div class="col-12 col-md-10 "> */}
							<div class="row justify-content-between">
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p className='bag-73'>Ordered<br/>
                  <span>Mon, June 24</span>
                  </p>
								</div>
								<div class="order-tracking completed">
									<span class="is-complete"></span>
									<p className='bag-73'>Shipped<br/><span>Tue, June 25</span></p>
								</div>
								<div class="order-tracking">
									<span class="is-complete"></span>
									<p className='bag-73'>Delivered<br/><span>Fri, June 28</span></p>
								</div>
                <hr />
                <p className='bag-72'>Your Item has been Delivered Soon!</p>
							</div>
						{/* </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
        <Subfooter/>
      </>
    );
  };
};
export default Orderstatus;