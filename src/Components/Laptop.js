import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import Subfooter from "./Subfooter";
import Pagecount from "./Pagecount";
import Asidefilter from "./Asidefilter";
import Datafetch from "./Datafetch";

const Laptop = () => {
  return (
    <>
      <Header />
      <Subheader />
      <section class="filter">
        <div class="container-fluid">
          <div class="row mb-5">
            <Asidefilter />
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <div class="row bag-14">
                    <div class="col-md-5">
                      <div class="btn-group" role="group">
                        <button
                          type="button"
                          class="btn btn-secondary active bag-25"
                        >
                          <i class="fas fa-th"></i>
                        </button>
                        <button type="button" class="btn btn-secondary bag-25">
                          <i class="fas fa-th-list"></i>
                        </button>

                        <button type="button" class="btn btn-secondary bag-25">
                          <i class="fas fa-sync-alt"></i>
                          <span>cart (0)</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Sort By:</span>
                        </div>
                        <select class="form-control" id="" name="">
                          <option value="">Default</option>
                          <option value="">Name (Link - Z)</option>
                          <option value="">Name (Z - A)</option>
                          <option value="">Price (Low &gt; High)</option>
                          <option value="">Price (High &gt; Low)</option>
                          <option value="">Rating (Highest)</option>
                          <option value="">Rating (Lowest)</option>
                          <option value="">Model (Link - Z)</option>
                          <option value="">Model (Z - A)</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Show:</span>
                        </div>
                        <select class="form-control" id="" name="">
                          <option value="">15</option>
                          <option value="">25</option>
                          <option value="">50</option>
                          <option value="">75</option>
                          <option value="">100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                {
                  Datafetch.map((element => {
                    return (
                      <>
                      <div class="col-md-4 mb-4" key={element.id14}>
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={element.image14}
                        alt=""
                      />
                      <div class="card-body">
                        <p class="h6">
                          <small class="text-muted">
                          {element.productname14}
                         <br />
                        </small>
                         {element.decs14}
                        </p>
                        <p class="m-0">
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </p>
                        <p class="h5 m-0">{element.price14}</p>
                      </div>
                      <div class="card-footer">
                        <div class="btn-group" role="group">
                          <Link
                            className="custom-btn btn-3 bag-26"
                            to=""
                            type="button"
                          >
                            <span>{element.button}</span>
                          </Link>
                          <Link
                            className="custom-btn btn-3 bag-26"
                            to="/buynow"
                          >
                            <span>{element.buybtn}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                      </>
                    )
                  }))
                }
                      </div>
                    </div>
                  </div>
                  <Pagecount />
                </div>
              </div>
      </section>

      <Subfooter />
    </>
  );
};
export default Laptop;
