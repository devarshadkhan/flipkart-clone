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
const FlipkartPlus = () => {
  const data = [
    {
      id: 1,
      heading:
        "If I cancel or return an item from my order, will the SuperCoins credited be deducted?",
      decs: "SuperCoins calculation happens at the order level. You will get to know about the SuperCoins deducted after you've cancelled or returned an item as it will be recalculated on the basis of the updated order value.",
    },
    {
      id: 2,
      heading: " What is SuperCoins?",
      decs: " SuperCoins is first of its kind rewards system as part of Flipkart Plus program that can be used to redeem exciting rewards. Stay tuned to know more.",
    },
    {
      id: 3,
      heading:"Where can I read more detailed terms and conditions of the Flipkart Plus program?",
      decs: "You can view detailed terms and conditions for Flipkart Plus program",
    },
    {
      id: 4,
      heading: "Can I transfer SuperCoins to different Flipkart account?",
      decs: "The option to transfer SuperCoins to a different Flipkart account is not available at the moment.",
    },
    {
      id: 5,
      heading:"If I choose 'SuperCoins Price' option, will I still be eligible to avail bank offers/other offers?",
      decs: "Non-Bank offers- An order will be eligible for a non-bank offer if the total order value including SuperCoins meets the offer value as defined in the terms and conditions. Bank offers - An order will be eligible for a bank offer if the total order value excluding SuperCoins meets the offer value as defined in the terms and conditions.",
    },
    {
      id: 6,
      heading: "How will the SuperCoins earned be calculated if I choose to buy a product using 'SuperCoins Price'?",
      decs: "In case you choose to buy a product using 'SuperCoins Price', SuperCoins earned will be based on the actual amount paid for the product excluding the SuperCoins.",
    },
    {
      id: 7,
      heading: "How can I redeem 'SuperCoins Rewards'?",
      decs: "'SuperCoins Rewards' can be redeemed as per the guidelines mentioned in the SuperCoin Zone.",
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

export default FlipkartPlus;