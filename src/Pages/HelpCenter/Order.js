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
const Order = () => {
  const data = [
    {
      id: 1,
      heading: "  I missed the delivery of my order today. What should I do?",
      decs: "   The courier service delivering your order usually tries to deliver on the next business day in case you miss a delivery. You can check your SMS for more details on whencthe courier service will try to deliver again.",
    },
    {
      id: 2,
      heading:
        " Will the delivery be tried again if I'm not able to collect my order the first time?",
      decs: " Couriers make sure that the delivery is re-attempted the next working day if you can't collect your order the first time.",
    },
    {
      id: 3,
      heading: "The delivery of my order is delayed. What should I do?",
      decs: "On the rare occasion that your order is delayed, please check your email & messages for updates. A new delivery timeframe will be shared with you and you can also track its status by visiting My Orders.",
    },
    {
      id: 4,
      heading:
        "What should I do if my order is approved but hasn't been shipped yet?",
      decs: "Sellers usually ship orders 1-2 business days before the delivery date so that they reach you on time. In case your order hasn't been shipped within this time please contact our Customer Support so that we can look into it.",
    },
    {
      id: 5,
      heading:
        "Can I take the shipment after opening and checking the contents inside?",
      decs: "As per company policy, a shipment can't be opened before delivery, but you can accept the shipment and get in touch with us later in case you have any concerns.",
    },
    {
      id: 6,
      heading: "How do I know my order has been confirmed?",
      decs: "An e-mail & SMS will be sent once you've successfully placed your order. We'll also let you know as soon as the seller ships the item(s) to you along with the tracking number(s) for your shipment(s). You can track your orders from the 'My Orders' section on your Flipkart account.",
    },
    {
      id: 7,
      heading: "How quickly can I get my order delivered?",
      decs: "Orders will be delivered by the date you see on the product page for your location.",
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
                <h2 className="mb-4">Order</h2>
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

export default Order;