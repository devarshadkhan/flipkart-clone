import React from "react";
import Header from "../Header";
import Subheader from "../Subheader";
import Personalinfo from "./PanCard";
import Sidebar from "./Sidebar";
const User = () => {
  return (
    <>
      <Header />
      <Subheader />

      <div className="wrap-22">
        <div className="container">
          <div className="row bag-14">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <div className="bag-440">
                <div className="bag-441">
                  <p>Personal Information</p>
                  {/* <p>Edit</p> */}
                  <div className="bag-442 d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First-Name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last-Name"
                    />
                  </div>
                  <div className="mt-5">
                    <div>
                      <p>Your Gender</p>
                    </div>
                    <div className="bag-443 d-flex align-items-center">
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Male</label>
                      <input type="checkbox" name="" id="" />
                      <label htmlFor="">Female</label>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <p>Email Address</p>
                    </div>
                    <div className="bag-443 d-flex align-items-center">
                      <input type="text" name="" id=""   className="form-control" placeholder="Enter Your Email Address"/>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <p>Mobile Number</p>
                    </div>
                    <div className="bag-443 d-flex align-items-center">
                      <input type="text" name="" id=""   className="form-control" placeholder="Enter Your Registered Mobile Number" maxLength="10"/>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <p>FAQs</p>
                    </div>
                    <div className="bag-443 ">
                      <h6>What happens when I update my email address (or mobile number)?</h6>
                      <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                    </div>
                    <div className="bag-443 ">
                      <h6>When will my Flipkart account be updated with the new email address (or mobile number)?</h6>
                      <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                    </div>
                    <div className="bag-443 ">
                      <h6>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h6>
                      <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                    </div>
                    <div className="bag-443 ">
                      <h6>Does my Seller account get affected when I update my email address?</h6>
                      <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number)Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                    </div>
                    <div className="bag-443 ">
                   <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
