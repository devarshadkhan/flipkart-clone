import "./App.css";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from "./Components/Pages/Electronics/Electronics.js";
import Men from "./Components/Pages/Men/Men.js";
import Women from "./Components/Pages/Women/Women.js";
import Tvappliance from "./Components/Pages/TV&Appliance/Tvappliance.js";
import Home from "./Components/Pages/Home/Home.js";
import Buynow from "./Components/Buynow";
import Payments from "./Components/Payments";
import Login from "./Components/Login";
import Offer from "./Components/Offer";
import Delivery from "./Components/Delivery";
import Deliverystatus from "./Components/Deliverystatus";
import Laptop from "./Components/Laptop";
import Orderstatus from "./Components/Orderstatus";
import Asidefilter from "./Components/Asidefilter";
import Desktop from "./Components/Desktop";
import Pagecount from "./Components/Pagecount";
import Cartdetails from "./Components/Cartdetails";
import "bootstrap-icons/font/bootstrap-icons.css";
// import store from './store';
// import { Provider } from 'react-redux';
import ErrorPage from "./Components/ErrorPage";
import Orderpage from "./Components/Orderpage";
import Addtocart from "./Components/Addtocart";
import Buynow1 from "./Components/Buynow1";
import User from "./Components/UserProfile/User";
import PanCard from "./Components/UserProfile/PanCard";
import ManageAddress from "./Components/UserProfile/ManageAddress";
import Checkout from "./Components/Checkout/Checkout";
import LoginRegister from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";
import About from "./Components/About/About";
import Wishlist from "./Components/Wishlist/Wishlist";
import Payment from "./Components/FooterPages/Payments"
import Shipping from "./Components/FooterPages/Shipping";
import HelpCenter from "./Components/HelpCenter/FlipkartPlus";
import Sidebar from "./Components/HelpCenter/Sidebar";
import Order from "./Components/HelpCenter/Order";
import Cancellationandreturn from "./Components/HelpCenter/Cancellationandreturn";
import CardPayments from "./Components/HelpCenter/Payments";
import Shippings from "./Components/HelpCenter/Shipping";
import ReturnPolicy from "./Components/HelpCenter/ReturnPolicy";
import Termofuse from "./Components/HelpCenter/Termofuse";
import Security from "./Components/HelpCenter/Security";
import PrivacyPolicy from "./Components/HelpCenter/PrivacyPolicy";
import Contact from "./Components/Pages/Contact/Contact";
// import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvappliance" element={<Tvappliance />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/payments" element={<Payments />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/offer" element={<Offer />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/deliverystatus" element={<Deliverystatus />} />
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/Orderstatus" element={<Orderstatus />} />
          <Route path="/asidefilter" element={<Asidefilter />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/pagecount" element={<Pagecount />} />
          <Route path="/cartdetails" element={<Cartdetails />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/orderpage" element={<Orderpage />} />
          <Route path="/Addtocart" element={<Addtocart />} />
          <Route path="/buynow1" element={<Buynow1 />} />
          <Route path="/user-profile" element={<User />} />
          <Route path="/user-pan-card" element={<PanCard />} />
          <Route path="/user-address" element={<ManageAddress />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/flipkart-plus" element={<HelpCenter />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cancellationandreturn" element={<Cancellationandreturn />} />
          <Route path="/card-payments" element={<CardPayments />} />
          <Route path="/shippings" element={<Shippings />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/term-&-condition" element={<Termofuse />} />
          <Route path="/security" element={<Security />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;