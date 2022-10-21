import React from "react";
import Header from "../Header";
import Subfooter from "../Subfooter";
import Subheader from "../Subheader";
import Sidebar from "./Sidebar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Payments = () => {
  const data = [
    {
      id: 1,
      heading:
        "Can I cancel my EMI after I've placed the order using the Bajaj Finserv payment option?",
      decs: "Since payment modes cannot be changed after an order is placed, to cancel your EMI, your order will need to be cancelled. Certain items cannot be cancelled after 24 hours of placing the order."
    },
    {
      id: 2,
      heading: "Can I foreclose my EMI with Bajaj Finserv?      ",
      decs: "Bajaj Finserv No Cost EMIs can be foreclosed after the first installment is paid.      ",
    },
    {
      id: 3,
      heading:"Can I get the refund for the item to any other mode if I have paid using the Bajaj Finserv payment option?",
      decs: "No, the refund for an order placed using the Bajaj Finserv payment mode can only be done to the bank account linked to the Bajaj Finserv EMI Card.",
    },
    {
      id: 4,
      heading: "Do I need to make a down payment to buy an item using the Bajaj Finserv EMI payment mode?      ",
      decs: "No, a down payment is not required for buying an item using the Bajaj Finserv EMI option.      ",
    },
    {
      id: 5,
      heading:"How can I get a Bajaj Finserv EMI card?",
      decs: "You can check the eligibility and process of getting a Bajaj Finserv No Cost EMI card on their website: www.bajajfinserv.in/finance.",
    },
    {
      id: 6,
      heading: "I chose the wrong EMI plan while making the payment using Bajaj Finserv No Cost EMI option. Can I change it now?",
      decs: "EMI plan chosen while paying through the Bajaj Finserv No Cost EMI payment option cannot be changed once the order has been placed. If your order hasn't been delivered yet, you can cancel it and place a new order with the preferred EMI plan.      ",
    },
    {
      id: 7,
      heading: "What are the EMI plans available if I pay using the Bajaj Finserv payment mode?",
      decs: "Available EMI plans can be checked by clicking 'No Cost EMI' on the Bajaj Finserv Card below the listed price of the item on the product page.",
    },
  ];
  return (
    <>
      <Header />
      <Subheader />
      <div className="wrap-29">
        <div className="container">
          <div className="row bag-14">
            <div className="col-md-12">
              <div className="bin-31">
                <h3>Flipkart Help Center | 24x7 Customer Care Support</h3>
                <p>
                  The Flipkart Help Centre page lists out various types of
                  issues that you may have encountered so that there can be
                  quick resolution and you can go back to shopping online. For
                  example, you can get more information regarding order
                  tracking, delivery date changes, help with returns (and
                  refunds), and much more. The Flipkart Help Centre also lists
                  out more information that you may need regarding Flipkart
                  Plus, payment, shopping, and more. The page has various
                  filters listed out on the left-hand side so that you can get
                  your queries solved quickly, efficiently, and without a
                  hassle. You can get the Flipkart Help Centre number or even
                  access Flipkart Help Centre support if you need professional
                  help regarding various topics. The support executive will
                  ensure speedy assistance so that your shopping experience is
                  positive and enjoyable. You can even inform your loved ones of
                  the support page so that they can properly get their
                  grievances addressed as well. Once you have all your queries
                  addressed, you can pull out your shopping list and shop for
                  all your essentials in one place. You can shop during festive
                  sales to get your hands on some unbelievable deals online.
                  This information is updated on 06-Oct-22
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 mt-3 rtgf">
              <div className="bin-34">
                <h2 className="mb-4">Bajaj Finserv EMI</h2>
                {data.map((e) => {
                  return (
                    <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{e.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{e.decs}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subfooter />
    </>
  );
};

export default Payments;