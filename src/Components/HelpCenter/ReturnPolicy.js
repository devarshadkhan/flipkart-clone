import React from "react";
import Header from "../Header";
import Subfooter from "../Subfooter";
import Subheader from "../Subheader";
const ReturnPolicy = () => {
  // let a = 10;
  // let b = 20;
  // const c = a;
  // a = b;
  // b = c;
  // console.log("yftigh", c);
  const data = [
    {
      id: 1,
      name: "Home: Pet Supplies & Rest of Home. (Except Home décor, Furnishing, Home Improvement Tools, Household Items)",
      decs: "10 days Refund or Replacement",
    },
    {
      id: 1,
      name: "Lifestyle: Watch, Winter Wear (Blazer, Sweatshirt, Scarf, Shawl, Jacket, Coat, Sweater, Thermal, Kid’s Thermal, Track Pant, Shrugs), T-Shirt, Footwear, Sari, Short, Dress, Kid’s (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt, Formals, Jeans, Clothing Accessory), Women’s (Ethnic Wear, Fabric, Blouse Jean, Skirt, Trousers, Bra), Bags, Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase, Luggage, etc... Lifestyle: Jewellery, Footwear Accessories, Travel Accessories, Watch Accessories, etc.",
      decs: "10 days Refund or Replacement",
    },
    {
      id: 1,
      name: "Medicine (Allopathy & Homeopathy)",
      decs: "2 days Refund",
    },
    {
      id: 1,
      name: "Books (All books) Sports Equipments (Racquet, ball, support, gloves, bags etc.) Exercise & Fitness Equipments (Home Gym combos, dumbbell etc.) Auto Accessories - Car and Bike accessories (helmets, car kit, media players etc.)",
      decs: "7 days Replacement only Free replacement will be provided within 7 days if the product is delivered in defective/damaged condition or different from the ordered item. Please keep the product intact, with original accessories, user manual and warranty cards in the original packaging at the time of returning the product.",
    },
    {
      id: 1,
      name: "Toys (Remote controlled toys, Learning toys, Stuffed toys etc.) Stationary (Pens, Diary notebooks, Calculators etc.) Musical Instruments (Microphones & Accessories, Guitars, Violins etc.)",
      decs: "7 days Replacement only Free replacement will be provided within 7 days if the product is delivered in defective/damaged condition or different from the ordered item. Please keep the product intact, with original accessories, user manual and warranty cards in the original packaging at the time of returning the product. Non-Returnable - All Wind Instruments (Harmonicas, Flutes etc.) This item is non-returnable due to hygiene and personal wellness.In case these products are delivered in damaged/defective condition or different from the ordered item, we will provide a free replacement.",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
    {
      id: 1,
      name: "Home: Home Improvement Tools, Household Items, Home décor, Furnishing      ",
      decs: "7 days Refund",
    },
  ];
  return (
    <>
      <Header />
      <Subheader />
      <div className="wrap-31">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bin-34">
                <h2>Returns Policy</h2>
                <p>
                  Returns is a scheme provided by respective sellers directly
                  under this policy in terms of which the option of exchange,
                  replacement and/ or refund is offered by the respective
                  sellers to you. All products listed under a particular
                  category may not have the same returns policy. For all
                  products, the returns/replacement policy provided on the
                  product page shall prevail over the general returns policy. Do
                  refer the respective item's applicable return/replacement
                  policy on the product page for any exceptions to this returns
                  policy and the table below
                </p>
                <p>
                  The return policy is divided into three parts; Do read all
                  sections carefully to understand the conditions and cases
                  under which returns will be accepted.
                </p>
                <p>Part 1 – Category, Return Window and Actions possible</p>
              </div>
              <div className="bin-35">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>
                        Returns Window, Actions Possible and Conditions (if any)
                      </th>
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>{e.name}</td>
                            <td>{e.decs}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bin-30 mt-4">
                <h5>Part 3 - General Rules for a successful Return</h5>
                <p>
                  For any products for which a refund is to be given, the refund
                  will be processed once the returned product has been received
                  by the seller.
                </p>
                <ul>
                  <li>
                    <p>In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.</p>
                  </li>
                  <li>
                    <p>In cases where a product accessory is found missing/damaged/defective, the seller may either process a replacement of the particular accessory or issue an eGV for an amount equivalent to the price of the accessory, at the seller’s discretion.</p>
                  </li>
                  <li>
                    <p>During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund (on the spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except for manufacturing defects. In such cases, these category-specific replacement/return general conditions will be applicable. Click here to know more about Open Box Delivery</p>
                  </li>
                  <li>
                    <p>For products where installation is provided by Flipkart's service partners, do not open the product packaging by yourself. Flipkart authorised personnel shall help in unboxing and installation of the product.</p>
                  </li>
                  <li>
                    <p>For Furniture, any product-related issues will be checked by authorised service personnel (free of cost) and attempted to be resolved by replacing the faulty/ defective part of the product. Full replacement will be provided only in cases where the service personnel opines that replacing the faulty/defective part will not resolve the issue.</p>
                  </li>
                  <li>
                    <p>'In case the product was not delivered and you received a delivery confirmation email/SMS, report the issue within 7 days from the date of delivery confirmation for the seller to investigate.'</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subfooter />
    </>
  );
};

export default ReturnPolicy;