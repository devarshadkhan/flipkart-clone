import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from './Components/Pages/Electronics/Electronics1.js';
import Men from './Components/Pages/Men/Men1.js';
import Women from './Components/Pages/Women/Women1.js';
import Tvappliance from './Components/Pages/TV&Appliance/Tvappliance1.js';
import Home from './Components/Pages/Home/Home1.js';
import Buynow from './Components/Buynow1';
import Payment from './Components/Payment';
import Login from './Components/Login1';
import Offer from './Components/Offer1';
import Delivery from './Components/Delivery1';
import Deliverystatus from './Components/Deliverystatus1';
import Laptop from './Components/Laptop1';
import Filterpage2 from './Components/Filterpage21';
import Asidefilter from './Components/Asidefilter1';
import Desktop from './Components/Desktop1';
import Pagecount from './Components/Pagecount1';
import Cartdetails from './Components/Cartdetails1';
// import store from './store';
// import { Provider } from 'react-redux';
import ErrorPage from './Components/ErrorPage1';

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
          <Route path="/Laptop" element={<Laptop />} />
          <Route path="/filterpage2" element={<Filterpage2 />} />
          <Route path="/asidefilter" element={<Asidefilter />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/pagecount" element={<Pagecount />} />
          <Route path="/cartdetails" element={<Cartdetails />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route store={store} element={<Provider />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
