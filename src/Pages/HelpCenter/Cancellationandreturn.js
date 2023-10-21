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
const Cancellationandreturn = () => {
  const data = [
    {
      id: 1,
      heading:
        "If I request for a replacement, when will I get it?",
      decs: "In most locations, the replacement item is delivered to you at the time of pick-up. In all other areas, the replacement is initiated after the originally delivered item is picked up. Please check the SMS & email we send you for your replacement request for more details.",
    },
    {
      id: 2,
      heading: "Can items be returned after the time period mentioned in the seller's Returns Policy?",
      decs: "No, sellers will not be able to accept returns after the time period mentioned in the seller's Returns Policy.",
    },
    {
      id: 3,
      heading:"Do I have to return the freebie when I return a product?",
      decs: "Yes, the freebie has to be returned along with the product.",
    },
    {
      id: 4,
      heading: "How do returns work?",
      decs: "Once you raise a request, you'll get an email and SMS confirming that your request is being processed. Based on the item, your request may be automatically approved or you may be contacted for more details. If the request is approved, the item will be picked up after which you will get a replacement or refund. You can also track the status of your return request instantly from the 'My Orders' section of your Flipkart account.",
    },
    {
      id: 5,
      heading:"I see the 'Cancel' button but I can't click on it. Why?      ",
      decs: "1. The item has been delivered already      2. The item is non-refundable (e.g. Gift Card)      ",
    },
    {
      id: 6,
      heading: "What is the Buyer Protection policy?",
      decs: "The Buyer Protection policy mediates buyer-seller disputes. In case a seller declines your request for a return of an item and you are not convinced with the reason given, you can write to us at resolution@flipkart.com for Buyer Protection. You can dispute the resolution that the seller has shared for your issue until 45 days from the date of delivery and concern is looked into by us on a case-to-case basis.",
    },
    {
      id: 7,
      heading: "What should I do if I have an issue with my product after the return period?",
      decs: "You can get in touch with the brand or an authorised service centre of the brand to claim the warranty for your product (wherever applicable).",
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
                <h2 className="mb-4">Flipkart Plus</h2>
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

export default Cancellationandreturn;