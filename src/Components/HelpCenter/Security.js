import React from "react";
import Header from "../Header";
import Subfooter from "../Subfooter";
import Subheader from "../Subheader";
const Security = () => {
  return (
    <>
      <Header />
      <Subheader />

      <div className="wrap-28">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5">
              <h6>Safe and Secure Shopping</h6>
            </div>
            <div className="bin-30 mt-4">
              <h5>Is it safe to use my credit/debit card on Flipkart?</h5>
              <p>
                Your online transaction on Flipkart is secure with the highest
                levels of transaction security currently available on the
                Internet. Flipkart uses 256-bit encryption technology to protect
                your card information while securely transmitting it to the
                respective banks for payment processing. All credit card and
                debit card payments on Flipkart are processed through secure and
                trusted payment gateways managed by leading banks. Banks now use
                the 3D Secure password service for online transactions,
                providing an additional layer of security through identity
                verification.
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h5>Does Flipkart store my credit/debit card infomation?</h5>
              <p>
                Flipkart stores the first 6 and last 4 digits of your card
                number in a secure and encrypted manner. The first 6 digits
                (also known as the Bank Identification Number) are used to
                identify the bank name and country where your card was issued.
                The first 6 and last 4 digits are together used for fraud
                detection and prevention purposes.
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h4>Payment Options</h4>
              <h5>What credit/debit cards are accepted on Flipkart?</h5>
              <p>
                We accept VISA, MasterCard, Maestro, Rupay, American Express,
                Diner's Club and Discover credit/debit cards.
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h5>
                Do you accept payment made by credit/debit cards issued in other
                countries?
              </h5>
              <p>
                Yes! We accept VISA, MasterCard, Maestro, American Express
                credit/debit cards issued by banks in India and in the following
                countries: Australia, Austria, Belgium, Canada, Cyprus, Denmark,
                Finland, France, Germany, Ireland, Italy, Luxembourg, the
                Netherlands, New Zealand, Norway, Portugal, Singapore, Spain,
                Sweden, the UK and the US. Please note that we do not accept
                internationally issued credit/debit cards for eGV
                payments/top-ups.
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h5>What other payment options are available on Flipkart?</h5>
              <p>
                Apart from Credit and Debit Cards, we accept payments by
                Internet Banking (covering 44 banks), Cash-on-Delivery, Equated
                Monthly Installments (EMI), E-Gift Vouchers, PhonePe UPI and
                PhonePe wallet.
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h5>Privacy Policy</h5>
              <p>
                Flipkart.com respects your privacy and is committed to
                protecting it. For more details, please see our{" "}
                <b>Privacy Policy</b>
              </p>
            </div>
            <div className="bin-30 mt-4">
              <h5>Contact Us</h5>
              <p>
                Couldn't find the information you need? Please{" "}
                <b>Contact Us</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subfooter />
    </>
  );
};

export default Security;