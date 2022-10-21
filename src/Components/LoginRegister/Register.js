import React from "react";
import Subheader from "../Subheader";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Subfooter from "../Subfooter";
const Register = () => {
  return (
    <>
      <Header />
      <Subheader />

      <div className="wrap-24 mt-3">
        <div className="container w-75">
          <div className="row bag-14">
            <div className="col-md-3 bg-light">
              <div className="bin-1">
                <h4 className="fs-5">Looks like you're new here!</h4>
                <p>Sign up with your mobile number to get started</p>
              </div>
            </div>
            <div className="col-md-9 ghh">
              {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
              <div className="bin-2">
                <TextField
                  id="standard-basic"
                  label="Enter firstname"
                  variant="standard"
                />
              </div>
              <div className="bin-2">
                <TextField
                  id="standard-basic"
                  label="Enter lastname"
                  variant="standard"
                />
              </div>
              <div className="bin-2">
                <TextField
                  id="standard-basic"
                  label="Enter email"
                  variant="standard"
                />
              </div>
              <div className="bin-2">
                <TextField
                  id="standard-basic"
                  label="Enter phone number"
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
                {/* <a href="">Forget</a> */}
              </div>
              <div className="bin-4">
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <a href="">Terms of Use</a> and <a href="">Privacy Policy</a>.
                </p>
              </div>
              <div className="bin-5">
                  <button className="btn btn-primary">SignUp</button>
                  {/* <p>Or</p> */}
                  {/* <button className="btn btn-success">Request OTP</button> */}
              </div>
              <div className="bin-6 mt-5 mb-3 text-center">
                  <Link to="/login">New to Flipkart? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subfooter/>
    </>
  );
};

export default Register;