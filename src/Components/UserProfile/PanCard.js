import React from "react";
import Header from "../Header";
import Subheader from "../Subheader";
import Sidebar from "./Sidebar";

const Personalinfo = () => {
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
                  <p>PAN Card Information</p>
                  {/* <p>Edit</p> */}
                  <div className="bag-445 ">
                    <input
                      type="number"
                      className="form-control mt-3 mb-4"
                      placeholder="Pan-Card Number"
                    />
                    <input
                      type="text"
                      className="form-control mt-3 mb-4"
                      placeholder="Full-Name"
                    />
                    <input
                      type="file"
                      className="form-control mt-3 mb-4"
                      placeholder="Full-Name"
                    />
                  <div className="d-flex">
                  <input type="checkbox" name="" id="" className="mt-3 mb-3"/>
                   <p className="mt-3 m-0  fytgjhk">I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</p>
                  </div>
                  <button className="btn btn-primary">UPLOAD</button>
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

export default Personalinfo;
