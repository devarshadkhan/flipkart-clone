import './App.css';
import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from './Components/Pages/Electronics/Electronics.js';
import Men from './Components/Pages/Men/Men.js';
import Women from './Components/Pages/Women/Women.js';
import Tvappliance from './Components/Pages/TV&Appliance/Tvappliance.js';
import Home from './Components/Pages/Home/Home.js';
import Buynow from './Components/Buynow';
import Payments from './Components/Payments';
import Login from './Components/Login';
import Offer from './Components/Offer';
import Delivery from './Components/Delivery';
import Deliverystatus from './Components/Deliverystatus';
import Laptop from './Components/Laptop';
import Filterpage2 from './Components/Filterpage2';
import Asidefilter from './Components/Asidefilter';
import Desktop from './Components/Desktop';
import Pagecount from './Components/Pagecount';
import Cartdetails from './Components/Cartdetails';
// import store from './store';
// import { Provider } from 'react-redux';
import ErrorPage from './Components/ErrorPage';

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
          <Route path="/payments" element={<Payments />} />
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
