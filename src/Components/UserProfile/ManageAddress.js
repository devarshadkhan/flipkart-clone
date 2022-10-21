import React, { useState } from "react";
import Header from "../Header";
import Subheader from "../Subheader";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Datafetch from "../Datafetch.js";
// import payment from "./Images/payment.svg";
import payment from "../Images/payment.svg";
import { Link } from "react-router-dom";
import Footer from "../Subfooter";
import Sidebar from "./Sidebar";
const ManageAddress = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Header />
      <Subheader />,
      {Datafetch.map((element) => {
        return (
          <>
            <div className="wrap-12 wrap-13">
              <div className="container">
                <div className="row bag-14">
                <div className="col-md-3">
                  <Sidebar/>
                </div>
                  <div className="col-md-9">
                    <div className="bag-220">
                      <div className="row">
                        <div className="col-md-10">
                          <div className="bag-221">
                            <h2>Login</h2>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <button className="btn btn-danger">CHANGE</button>
                        </div>
                        <div className="col-md-12">
                          <p>
                            <span>Code-With-Arsh-khan</span>+91-9818399274
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bag-222">
                      <div className="col-md-12">
                        <span>2</span>
                        <p>Delivery Address</p>
                      </div>
                    </div>
                    <div className="bag-223">
                      <div className="col-md-12">
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom01"
                            >
                              {/* <Form.Label>First name</Form.Label> */}
                              <Form.Control
                                required
                                type="Name"
                                placeholder="First name"
                                //   defaultValue="Mark"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom02"
                            >
                              {/* <Form.Label>Last name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                //   defaultValue="Otto"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom03"
                            ></Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom01"
                            >
                              {/* <Form.Label>First name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                //   defaultValue="Mark"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom02"
                            >
                              {/* <Form.Label>Last name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Otto"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="6"
                              controlId="validationCustom03"
                            ></Form.Group>
                          </Row>
                          <FloatingLabel
                            controlId="floatingTextarea2"
                            className="mb-3"
                            label="Address"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: "100px" }}
                            />
                          </FloatingLabel>
                          <div className="d-flex mb-3  mt-5">
                            {/* <Row className="mb-3"> */}
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom01"
                            >
                              {/* <Form.Label>First name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                //   defaultValue="Mark"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            {/* </Row> */}
                            <FloatingLabel
                              controlId="floatingSelect"
                              className="ghnb"
                            >
                              <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </FloatingLabel>
                          </div>
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom01"
                            >
                              {/* <Form.Label>First name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                //   defaultValue="Mark"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom02"
                            >
                              {/* <Form.Label>Last name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                //   defaultValue="Otto"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>{" "}
                          <Row className="mb-3">
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom01"
                            >
                              {/* <Form.Label>First name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                //   defaultValue="Mark"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                              as={Col}
                              md="4"
                              controlId="validationCustom02"
                            >
                              {/* <Form.Label>Last name</Form.Label> */}
                              <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                //   defaultValue="Otto"
                              />
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                        </Form>
                      </div>
                      <div className="col-md-12">
                        <div className="bag-224">
                          <Form>
                            {["(All day delivery)"].map((type) => (
                              <div key={`home-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`home-${type}`}
                                  label={`home ${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                          <Form className="gjhbn">
                            {["(All day delivery)"].map((type) => (
                              <div key={`home-${type}`} className="mb-3">
                                <Form.Check
                                  type={type}
                                  id={`home-${type}`}
                                  label={`home ${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                        </div>
                      </div>
                      <Button type="submit">SAVE AND DELIVERY HERE</Button>
                    </div>
                  </div>
                  {/* <div className="col-md-5">
                    <div className="">
                      <div class="wrapper center-block hidden-xs">
                        <nav class="navbar navbar-expand-lg bag-30">
                          <div class="container-fluid">
                            <div className="col-md-12">
                              <div class="card mb-4">
                                <div class="card-header">Payment</div>
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
                                <img src={payment} alt="" className="bag-112" />
                              </Link>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
};

export default ManageAddress;