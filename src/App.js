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
function App() {
  return (
     <div className='App'>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tvappliance" element={<Tvappliance />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/buynow" element={<Buynow />} />
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
