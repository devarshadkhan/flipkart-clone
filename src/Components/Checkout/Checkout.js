import React, { useState } from "react";
import Header from "../Header";
import Subheader from "../Subheader";
import Form from "react-bootstrap/Form";
import Payment from "../Payment/Payment";
import { Link } from "react-router-dom";
import Datafetch from "../Datafetch";
import payment from "../Images/payment.svg";
import Subfooter from "../Subfooter";
const Checkout = () => {

  // Count
  const [Count, setCount] = useState(0)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  // uper Wale hide show sab ho chuke hai
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  return (
    <>
      <Header />
      <Subheader/>

      <div className="wrap-23">
        <div className="container-fluid">
          <div className="row bag-14">
            <div className="col-md-8">
              {show1 ? (
                <div className="bag-661">
                  <div className="bag-662 d-flex">
                    <div className="bag-663">
                      <h6>1</h6>
                    </div>
                    <div className="bag-664 d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <h2>LOGIN</h2>
                        <svg
                          height="10"
                          width="16"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="_1t8m48"
                        >
                          <path
                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            stroke="#2974f0"
                          ></path>
                        </svg>
                      </div>
                      <p>
                        <span>Code-With-Arsh-khan</span>+919643750274
                      </p>
                    </div>
                    <div className="bag-665">
                      <button
                        className="btn btn-primary"
                        onClick={() => setShow(!show)}
                      >
                        CHANGE
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                true
              )}
              {show ? (
                <div className="bag-662">
                  <div className="bag-667">
                    <h6>1</h6>
                    <p>Login</p>
                  </div>
                  <div className="">
                    <div className="row bag-14">
                      <div className="col-md-6">
                        <div className="bag-668">
                          <div className="bag-669 d-flex gap-2 align-items-center">
                            <h6>Name</h6>
                            <p>Code-With-Arsh-Khan</p>
                          </div>
                          <div className="bag-670 d-flex gap-2 align-items-center">
                            <h6>Phone</h6>
                            <p>+9198183992874</p>
                          </div>
                          <div className="bag-671">
                            <a href="">Logout & Sign in to another account</a>
                          </div>
                          <div className="bag-672">
                            <button
                              className="btn btn-primary"
                              onClick={() => setShow(!show)}
                            >
                              Continue Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bag-673">
                          <div className="bag-674">
                            <p>Advantages of our secure login</p>
                          </div>
                          <div className="bag-675 d-flex align-items-center gap-2">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              class="YXdkEF"
                              fill="blue"
                            >
                              <g fill-rule="evenodd">
                                <path
                                  d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z"
                                  fill="#2874f0"
                                ></path>
                              </g>
                            </svg>
                            <p>Easily Track Orders, Hassle free Returns</p>
                          </div>

                          <div className="bag-675 d-flex align-items-center gap-2">
                            <svg
                              class="YXdkEF"
                              width="18"
                              height="18"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill="blue" fill-rule="evenodd">
                                <path
                                  class="YXdkEF"
                                  d="M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z"
                                ></path>
                              </g>
                            </svg>
                            <p>Get Relevant Alerts and Recommendation</p>
                          </div>
                          <div className="bag-675 d-flex align-items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="blue"
                              class="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p>Wishlist, Reviews, Ratings and more.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="bag-676">
                          <p>
                            Please note that upon clicking "Logout" you will
                            lose all items in cart and will be redirected to
                            Flipkart home page.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                true
              )}

              <div className="bag-677">
                <div className="bag-661">
                  <div className="bag-662 d-flex">
                    <div className="bag-663">
                      <h6>2</h6>
                    </div>
                    <div className="bag-664 d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <h2>Delivery Address</h2>
                        <svg
                          height="10"
                          width="16"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="_1t8m48"
                        >
                          <path
                            d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                            stroke="#2974f0"
                          ></path>
                        </svg>
                      </div>
                      <p>
                        <span>Arshad khan</span>G-22 Abul Fazal Shaheen bagh-2 ,
                        near Char minar masjid,  Jamia Nagar,
                        Okhla New Delhi, Delhi
                      </p>
                    </div>
                    <div className="bag-665">
                      <button
                        className="btn btn-primary"
                        onClick={() => setShow2(!show2)}
                      >
                        CHANGE
                      </button>
                    </div>
                  </div>
                </div>
                {show2 ? (
                  <div className="bag-778">
                    <div className="bag-667">
                      <h6>2</h6>
                      <p>DELIVERY ADDRESS</p>
                    </div>

                    <div className="bag-779">
                      <div className="bag-778 d-flex gap-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <div className="bag-780  gap-3 align-items-center">
                          <span>Arshad Khan</span>
                          <span className="gh">HOME</span>
                          <span>9643750274</span>
                          <p>
                            <span>Arshad khan</span> f-22 Abul Fazal Okhla New
                            Delhi, Okhla Vihar Metro Police Station, <br />
                            Jamia Nagar, New Delhi, Delhi - 110025
                          </p>
                        </div>
                        <div className="bag-781">
                          <button
                            className="btn btn-primary"
                            onClick={() => setShow3(!show3)}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="bag-789 mt-3 d-flex gap-5 align-items-center">
                        <button
                          className="btn btn-primary"
                          onClick={() => setShow2(!show2)}
                        >
                          DELIVER HERE
                        </button>
                      </div>
                    </div>

                    {show3 ? (
                      <div className="bag-779">
                        <div className="bag-782  gap-3">
                          {/* <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        /> */}
                          <div className="bag-783">
                            <p>EDIT ADDRESS</p>
                            <button className="btn btn-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                class="_3bKK5G"
                              >
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M0 0h16v16H0z"></path>
                                  <path
                                    class=""
                                    fill="#fff"
                                    d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Use my current location
                            </button>
                            <div className="bag-784 mt-4 d-flex">
                              <input
                                type="text"
                                placeholder="Name"
                                className="form-control"
                              />
                              <input
                                type="text"
                                maxLength="10"
                                placeholder="10-digit mobile number"
                                className="form-control ggh"
                              />
                            </div>
                            <div className="bag-784 mt-4 d-flex">
                              <input
                                type="text"
                                placeholder="Pincode"
                                className="form-control"
                              />
                              <input
                                type="text"
                                placeholder="Locality"
                                className="form-control ggh"
                              />
                            </div>
                            <div className="bag-785 mt-3">
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                className=" rtfgh"
                              ></textarea>
                            </div>
                            <div className="bag-786 mt-4 d-flex">
                              <input
                                type="text"
                                placeholder="City/District/Town"
                                className="form-control"
                              />
                              <select name="" id="" className=" ggh">
                                <option value="" className="">
                                  Delhi
                                </option>
                              </select>
                            </div>
                            <div className="bag-787 mt-4">
                              <p>Address Type</p>
                            </div>
                            <div className="bag-788 d-flex gap-4">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  value="option1"
                                  checked
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios1"
                                >
                                  Home (All day delivery)
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="option2"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  Work (Delivery between 10 AM - 5 PM)
                                </label>
                              </div>
                            </div>
                            <div className="bag-789 mt-5 d-flex gap-5 align-items-center">
                              <button className="btn btn-primary">
                                SAVE AND DELIVER HERE
                              </button>
                              <p onClick={() => setShow3(!show3)}>Cancel</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className="bag-661">
                <div className="bag-662 d-flex">
                  <div className="bag-663">
                    <h6>3</h6>
                  </div>
                  <div className="bag-664 d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <h2>ORDER SUMMARY</h2>
                      <svg
                        height="10"
                        width="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="_1t8m48"
                      >
                        <path
                          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                          stroke="#2974f0"
                        ></path>
                      </svg>
                    </div>
                    <p>1 item</p>
                  </div>
                  <div className="bag-665">
                    <button
                      className="btn btn-primary"
                      onClick={() => setShow4(!show4)}
                    >
                      CHANGE
                    </button>
                  </div>
                </div>
                
              </div>
             {
              show4 ? 
              <div className="bag-778">
                    <div className="bag-667">
                      <h6>3</h6>
                      <p>ORDER SUMMARY</p>
                    </div>

                    <div className="bag-792">
                       <div className="row">
                        <div className="col-md-2">
                        <div className="bag-790 ">
                          <div className="bag-791">
                            <img src="https://rukminim1.flixcart.com/image/100/100/kzrbiq80/cases-covers/flip-cover/n/n/s/flpcvrvvt1-5gbrwn-cedo-original-imagbzwhzg2raagu.jpeg?q=90" alt="" />
                           
                          </div>
                          <button onClick={() => setCount(Count - 1)}>-</button>
                            <span>{Count}</span>
                            <button onClick={() => setCount(Count + 1)}>+</button>
                        </div>
                        </div>

                        <div className="col-md-6">
                          <div className="bag-792">
                            <p>CEDO Flip Cover for Vivo T1 5G, IQOO Z6 5G</p>
                            <h6>Brown, Dual Protection, Pack of: 1</h6>
                            <span>Seller: JaidevMalAndSons</span>
                            <div className="bag-793 d-flex gap-2 align-items-center">
                                <s>₹ 599</s>
                                <p>₹ 199</p>
                                <span>66% off</span>
                                <span>2 offer applied</span>
                            </div>
                          </div>
                        </div>
                          <div className="col-md-4">
                            <div className="bag-794">
                            <p>Delivery by Thu Oct 6 | <span>Free</span></p>
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                  : null
             }
                 
                 {
                  show4 ?
                  <div className="bag-661 mt-3 d-flex align-items-center">
                        <div className="bag-795 d-flex gap-3">
                          <p>Order confirmation email will be sent to </p>
                          <span>arshad.khan@himotechglobal.com</span>
                        </div>
                        <div className="bag-796">
                          <button className="btn btn-primary" onClick={() => setShow4(!show4)}>Continue</button>
                        </div>
              </div>
              : null
                 }
                   <Payment/>     
            </div>
            
            {Datafetch.map((element) => {
              return (
                <>
            <div className="col-md-4">
                      <div className="">
                        <div class="wrapper center-block hidden-xs">
                          <nav class="navbar navbar-expand-lg bag-30">
                            <div class="container-fluid">
                              <div className="col-md-12">
                                <div class="card mb-4">
                                  <div class="card-header">Price Details</div>
                                  <div class="" id="">
                                    <table class="table">
                                      <tbody>
                                        <tr>
                                          <td>{element.Vname19}</td>
                                          <td className="bag-94">
                                            {element.Wname19}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>{element.Xname19}</td>
                                          <td className="bag-94">
                                            {element.Yname19}
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>{element.Zname19}</td>
                                          <td className="bag-94">
                                            {element.Zaname19}
                                          </td>
                                        </tr>
                                        <tr className="bag-93">
                                          <td>{element.Zbname19}</td>
                                          <td className="bag-94">
                                            {element.Zcname19}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  <span>{element.Zdname19}</span>
                                </div>
                                <Link to="/payments">
                                  <img
                                    src={payment}
                                    alt=""
                                    className="bag-112"
                                  />
                                </Link>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                    </>
              );
            })}
          </div>
        </div>
      </div>
      <Subfooter/>
    </>
  );
};

export default Checkout;