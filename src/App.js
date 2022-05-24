import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from './Components/Pages/Electronics/electronics.js';
import Men from './Components/Pages/Men/men.js';
import Women from './Components/Pages/Women/women.js';
import Tvappliance from './Components/Pages/TV&Appliance/tvappliance.js';
import Home from './Components/Pages/Home/home.js';
import Buynow from './Components/buynow';
import Payment from './Components/payment';
import Login from './Components/login';
import Offer from './Components/offer';
import Delivery from './Components/delivery';
import Deliverystatus from './Components/deliverystatus';
import Laptop from './Components/laptop';
import Filterpage2 from './Components/filterpage2';
import Asidefilter from './Components/asidefilter';
import Desktop from './Components/desktop';
import Pagecount from './Components/pagecount';
import Cart from './Components/cart';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvappliance" element={<Tvappliance />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/deliverystatus" element={<Deliverystatus />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/filterpage2" element={<Filterpage2 />} />
          <Route path="/asidefilter" element={<Asidefilter />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/pagecount" element={<Pagecount />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
