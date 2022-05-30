import React, { Component } from "react";
import Header from "./Header";
import Subheader from "./Subheader";
import $ from "jquery";
export default class Login extends Component {
  render() {
    $(".message a").click(function () {
      $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
    return (
      <>
        <Header />
        <Subheader />
        {/* <div className="wrap-6">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="login-page">
                  <div className="form">
                    <form className="register-form">
                      <input type="text" placeholder="name" />
                      <input type="password" placeholder="password" />
                      <input type="text" placeholder="email address" />
                      <button>create</button>
                      <p className="message">
                        Already registered? <a href="/">Sign In</a>
                      </p>
                    </form>
                    <form className="login-form">
                      <input type="text" placeholder="username" />
                      <input type="password" placeholder="password" />
                      <button>login</button>
                      <p className="message">
                        Not registered? <a href="/">Create an account</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        
      </>
    );
  }
}
