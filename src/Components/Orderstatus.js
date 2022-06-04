import React, { Component } from 'react'
import Header from './Header.js'
import Subheader from './Subheader.js'
import Subfooter from './Subfooter.js'
import Breadcum from './Breadcum.js'
import { Link } from 'react-router-dom'

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
            <div className="col-md-12">
                <div className="bag-67">
                  <h6>Delivery Address</h6>
                  <h5>Arshad Khan</h5>
                  <p> Block F, Abul Fazal Enclave Part 1 Okhla, Jamia Nagar, Thokar no 4 New Delhi - 110025</p>
                  <span>Phone-Number</span>
                  <span className='span'>9818xxxxx</span>

                </div>
            </div>
            <div className="col-md-12">
            <Link to="/orderpage">
                <div className="bag-64">
                  <div className="row bag-63">
                    <div className="col-md-2">
                      <img
                        src={
                          "https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"
                        }
                        alt=""
                        className="bag-64"
                      />
                    </div>
                    <div className="col-md-3 bag-70">
                      <h6>Lenove Laptop</h6> <br />
                      <div className="parad">
                        <p>Color:Blue</p>
                        <p>Seller:Himotech</p>
                        {/* <p>₹455</p> */}
                        <h2>₹70,000</h2>
                        <p className="bag-71">2 Offers Applied</p>
                      </div>
                    </div>
                    {/* <div className="col-md-1">
                      
                    </div> */}
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
    )
  }
}

export default Orderstatus