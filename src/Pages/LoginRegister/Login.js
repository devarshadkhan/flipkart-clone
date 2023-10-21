import React from "react";
import Subheader from "../Subheader";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Subfooter from "../Subfooter";
const LoginRegister = () => {
  return (
    <>
      <Header />
      <Subheader />

      <div className="wrap-24 mt-3">
        <div className="container w-75">
          <div className="row bag-14">
            <div className="col-md-3 bg-light">
              <div className="bin-1">
                <h4>Login</h4>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
            </div>
            <div className="col-md-9 ghh">
              {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
              <div className="bin-2">
                <TextField
                  id="standard-basic"
                  label="Enter Email/Mobile number"
                  variant="standard"
                />
              </div>
              <div className="bin-3">
                <TextField
                  id="standard-basic"
                  label="Enter Password"
                  variant="standard"
                  type="password"
                />
                <a href="">Forget</a>
              </div>
              <div className="bin-4">
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
                </p>
              </div>
              <div className="bin-5">
                  <button className="btn btn-primary">Login</button>
                  <p>Or</p>
                  <button className="btn btn-success">Request OTP</button>
              </div>
              <div className="bin-6 mt-5 mb-3 text-center">
                  <Link to="/register">New to Flipkart? Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subfooter/>
    </>
  );
};

export default LoginRegister;