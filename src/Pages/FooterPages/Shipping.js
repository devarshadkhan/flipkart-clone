import React from "react";
import Header from "../Header";
import Subfooter from "../Subfooter";
import Subheader from "../Subheader";
const Shipping = () => {
  return (
    <>
      <Header />
      <Subheader />
      <div className="wrap-28">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bin-30 mt-4">
                <h6 className="mb-4">Shipping</h6>
              </div>
              <div className="bin-30 mt-4">
                <h5>What are the delivery charges?</h5>
                <p>Delivery charge varies with each Seller.</p>
                <p>
                  Sellers incur relatively higher shipping costs on low value
                  items. In such cases, charging a nominal delivery charge helps
                  them offset logistics costs. Please check your order summary
                  to understand the delivery charges for individual products.
                </p>
                <p>
                  For Products listed as Flipkart Plus, a Rs 40 charge for
                  delivery per item may be applied if the order value is less
                  than Rs 500. While, orders of Rs 500 or above are delivered
                  free.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>
                  Why does the delivery date not correspond to the delivery
                  timeline of X-Y business days?
                </h5>
                <p>
                  It is possible that the Seller or our courier partners have a
                  holiday between the day your placed your order and the date of
                  delivery, which is based on the timelines shown on the product
                  page. In this case, we add a day to the estimated date. Some
                  courier partners and Sellers do not work on Sundays and this
                  is factored in to the delivery dates.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>What is the estimated delivery time?</h5>
                <p>
                  Sellers generally procure and ship the items within the time
                  specified on the product page. Business days exclude public
                  holidays and Sundays.
                </p>
                <p>Estimated delivery time depends on the following factors:</p>
                <ul>
                  <li>
                    <p>The Seller offering the product</p>
                  </li>
                  <li>
                    <p>Product's availability with the Seller</p>
                  </li>
                  <li>
                    <p>
                      The destination to which you want the order shipped to and
                      location of the Seller.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="bin-30 mt-4">
                <h5>
                  Are there any hidden costs (sales tax, octroi etc) on items
                  sold by Sellers on Flipkart?
                </h5>
                <p>
                  There are NO hidden charges when you make a purchase on
                  Flipkart. List prices are final and all-inclusive. The price
                  you see on the product page is exactly what you would pay.
                </p>
                <p>
                  Delivery charges are not hidden charges and are charged (if at
                  all) extra depending on the Seller's shipping policy.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>
                  Why does the estimated delivery time vary for each seller?
                </h5>
                <p>
                  You have probably noticed varying estimated delivery times for
                  sellers of the product you are interested in. Delivery times
                  are influenced by product availability, geographic location of
                  the Seller, your shipping destination and the courier
                  partner's time-to-deliver in your location.
                </p>
                <p>
                  Please enter your default pin code on the product page (you
                  don't have to enter it every single time) to know more
                  accurate delivery times on the product page itself.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>Seller does not/cannot ship to my area. Why?</h5>
                <p>
                  Please enter your pincode on the product page (you don't have
                  to enter it every single time) to know whether the product can
                  be delivered to your location.
                </p>
                <p>
                  If you haven't provided your pincode until the checkout stage,
                  the pincode in your shipping address will be used to check for
                  serviceability.
                </p>
                <p>Whether your location can be serviced or not depends on</p>
                <ul>
                  <li>
                    <p>Whether the Seller ships to your location</p>
                  </li>
                  <li>
                    <p>
                      Legal restrictions, if any, in shipping particular
                      products to your location
                    </p>
                  </li>
                  <li>
                    <p>
                      The availability of reliable courier partners in your
                      location
                    </p>
                  </li>
                </ul>
                <p>
                  At times Sellers prefer not to ship to certain locations. This
                  is entirely at their discretion.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>Why is the CoD option not offered in my location?</h5>
                <p>
                  Availability of CoD depends on the ability of our courier
                  partner servicing your location to accept cash as payment at
                  the time of delivery.
                </p>
                <p>
                  Our courier partners have limits on the cash amount payable on
                  delivery depending on the destination and your order value
                  might have exceeded this limit. Please enter your pin code on
                  the product page to check if CoD is available in your
                  location.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>
                  I need to return an item, how do I arrange for a pick-up?
                </h5>
                <p>
                  Returns are easy. Contact Us to initiate a return. You will
                  receive a call explaining the process, once you have initiated
                  a return.
                </p>
                <p>
                  Wherever possible Ekart Logistics will facilitate the pick-up
                  of the item. In case, the pick-up cannot be arranged through
                  Ekart, you can return the item through a third-party courier
                  service. Return fees are borne by the Seller.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>
                  What do the different tags like "In Stock", "Available" mean?
                </h5>
                <h6>'In Stock'</h6>
                <p>
                  FFor items listed as "In Stock", Sellers will mention the
                  delivery time based on your location pincode (usually 2-3
                  business days, 4-5 business days or 4-6 business days in areas
                  where standard courier service is available). For other areas,
                  orders will be sent by Registered Post through the Indian
                  Postal Service which may take 1-2 weeks depending on the
                  location.
                </p>
                <h6>'Available'</h6>
                <p>
                  The Seller might not have the item in stock but can procure it
                  when an order is placed for the item. The delivery time will
                  depend on the estimated procurement time and the estimated
                  shipping time to your location.
                </p>
                <h6>'Preorder' or 'Forthcoming'</h6>
                <p>
                  Such items are expected to be released soon and can be
                  pre-booked for you. The item will be shipped to you on the day
                  of it's official release launch and will reach you in 2 to 6
                  business days. The Preorder duration varies from item to item.
                  Once known, release time and date is mentioned. (Eg. 5th May,
                  August 3rd week)
                </p>
                <h6>'Out of Stock'</h6>
                <p>
                  Currently, the item is not available for sale. Use the 'Notify
                  Me' feature to know once it is available for purchase.
                </p>
                <h6>'Imported'</h6>
                <p>
                  Sometimes, items have to be sourced by Sellers from outside
                  India. These items are mentioned as 'Imported' on the product
                  page and can take at least 10 days or more to be delivered to
                  you.
                </p>
                <h6>'Back In Stock Soon'</h6>
                <p>
                  The item is popular and is sold out. You can however 'book' an
                  order for the product and it will be shipped according to the
                  timelines mentioned by the Seller.
                </p>
                <h6>'Temporarily Unavailable'</h6>
                <p>
                  The product is currently out of stock and is not available for
                  purchase. The product could to be in stock soon. Use the
                  'Notify Me' feature to know when it is available for purchase.
                </p>
                <h6>'Permanently Discontinued'</h6>
                <p>
                  This product is no longer available because it is obsolete
                  and/or its production has been discontinued.
                </p>
                <h6>'Out of Print'</h6>
                <p>
                  This product is not available because it is no longer being
                  published and has been permanently discontinued.
                </p>
              </div>
              <div className="bin-30 mt-4">
                <h5>Does Flipkart deliver internationally?</h5>
                <p>
                  As of now, Flipkart doesn't deliver items internationally.
                </p>
                <p>
                  You will be able to make your purchases on our site from
                  anywhere in the world with credit/debit cards issued in India
                  and 21 other countries, but please ensure the delivery address
                  is in India.
                </p>
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