import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import Captchas from "../Captcha/Captchas";

const Payment = () => {
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [Count, setCount] = useState(0);

  const numbers = [1, 2, 3];
  numbers[10] = 11;
  console.log("yftgh", numbers);
  return (
    <div className="bag-778">
      <div className="bag-667">
        <h6>4</h6>
        <p>Payment Options</p>
      </div>

      <Accordion className="mb-2">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <div className="bag-801 d-flex align-items-center">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif"
                alt=""
              />
              Paytm Wallet
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="bag-802">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Link Expired. Enter Paytm Wallet linked no"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button class="ftghnb" type="button" id="button-addon2">
                  Link
                </button>
              </div>
              <button className="btn btn-primary">Continue</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <div className="bag-801 d-flex align-items-center">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif"
                alt=""
              />
              UPI
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="bag-803">
              <h6>Choose an option</h6>
              <div className="bag-804 d-flex align-items-center">
                <Form>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="">
                      <Form.Check
                        inline
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}
                </Form>
                <h4 onClick={() => setShow7(!show7)}>PhonePe</h4>
              </div>
              {show7 ? (
                <button className="btn btn-primary ytghj">Continue</button>
              ) : null}
              <div
                className="bag-804 d-flex align-items-center"
                onClick={() => setShow6(!show6)}
              >
                <Form>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="">
                      <Form.Check
                        inline
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}
                </Form>
                <h4 onClick={() => setShow6(!show6)}>YOUR UPI ID</h4>
              </div>
              {show6 ? (
                <div className="bag-802">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter UPI ID"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button class="ftghnb" type="button" id="button-addon2">
                      Verify
                    </button>
                  </div>
                  <button className="btn btn-primary">Pay 199</button>
                </div>
              ) : null}
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <div className="bag-801 d-flex align-items-center">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif"
                alt=""
              />
              Wallet
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="bag-802">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Link Expired. Enter Paytm Wallet linked no"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button class="ftghnb" type="button" id="button-addon2">
                  Link
                </button>
              </div>
              <button className="btn btn-primary">Continue</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <div className="bag-801 d-flex align-items-center">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
              Credit / Debit / ATM Card
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="bag-802 hjkl">
              {/* <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Card Number"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
              </div> */}
              <form id="creditCardForm" action="#" method="post" className="trfyghbn">
                {/* <div class="row header">
                  <div class="col">
                    <h4>Payment Details</h4>
                  </div>
                  <div class="col" id="submit">
                    <input type="submit" />
                  </div>
                </div> */}

                <div class="row">
                  <div class="col">
                    <label for="number">Card Number</label>
                    <input type="password" id="number" maxLength="16" className="fytghj"/>
                  </div>
                </div>

                <div class="row middle align-items-center">
                  <div class="col">
                    <label for="month">Month</label>
                    <select id="month">
                      <option></option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>

                  <div class="col">
                    <label for="year">Year</label>
                    <select id="year">
                      <option></option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                      <option>2032</option>
                      <option>2033</option>
                      <option>2034</option>
                      <option>2035</option>
                      <option>2036</option>
                      <option>2037</option>
                      <option>2038</option>
                      <option>2039</option>
                      <option>2040</option>
                    </select>
                  </div>

                  <div class="col">
                    <label for="cvc" >CVC</label>
                    <input type="text" id="cvc" maxLength="3" />
                  </div>

                  {/* <div class="col">
                    <br />
                    <img src="http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_logo_2.gif" />
                  </div> */}
                </div>

                {/* <div class="row">
                  <div class="col">
                    <label for="name">Cardholder Name</label>
                    <input type="text" id="name" />
                  </div>
                </div> */}
              </form>
             
            </div>
            <div className="bag-805">
                      <button
                        className="btn btn-primary"
                      >
                        Pay 199
                      </button>
                    </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <div className="bag-801 d-flex align-items-center">
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  </div>
                ))}
              </Form>
              Cash on delivery
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div>
           <Captchas />
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Payment;