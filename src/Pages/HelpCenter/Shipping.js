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
const Shipping = () => {
  const data = [
    {
      id: 1,
      heading:
        "Why are faster delivery options not available at my location?        ",
      decs: "Faster delivery options may not be available at your location due to courier related reasons but we’re trying to expand our services to include more places. Stay tuned for updates!      ",
    },
    {
      id: 2,
      heading: "Why can't I get some items shipped to my location?      ",
      decs: "Some sellers prefer not to ship to certain locations due to the cost involved and this is entirely at their discretion. You can check with your pincode on the product page to see any other sellers ship to your location.      ",
    },
    {
      id: 3,
      heading:"Are faster delivery options like Same Day & In-a-Day available on return requests?      ",
      decs: "No, however, we try our best to have your item(s) picked up by our courier service providers & get you the replacement as soon as possible.",
    },
    {
      id: 4,
      heading: "What are the standard shipping speeds and delivery charges?",
      decs: "You can check if an F-Assured item can be delivered to your location by entering a delivery pincode on the product page (this widget is placed next to the section 'Delivery') and hitting enter. Available shipping speeds and delivery charges as per your location will be displayed.",
    },
    {
      id: 5,
      heading:"If I choose 'SuperCoins Price' option, will I still be eligible to avail bank offers/other offers?",
      decs: "Non-Bank offers- An order will be eligible for a non-bank offer if the total order value including SuperCoins meets the offer value as defined in the terms and conditions. Bank offers - An order will be eligible for a bank offer if the total order value excluding SuperCoins meets the offer value as defined in the terms and conditions.",
    },
    {
      id: 6,
      heading: "Why didn't my order qualify for free delivery?      ",
      decs: "Your order qualifies for free delivery if you order F-Assured products worth Rs. 500 and above. If your order value for F-Assured products is less than Rs. 500, a delivery fee of Rs. 40 will be charged.",
    },
    {
      id: 7,
      heading: "Why am I unable to order products like television, air-conditioner, refrigerator, washing machine, furniture, microwave, treadmill, etc. at my location?",
      decs: "The delivery of large category products at a particular location depends on the following factors:      ",
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
                <h2 className="mb-4">Shipping</h2>
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

export default Shipping;