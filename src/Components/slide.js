import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import background from "./Images/bg1.jpeg";
import background1 from "./Images/bg2.jpg";
import background2 from "./Images/bg3.png";
import background3 from "./Images/bg4.png";
import background4 from "./Images/bg6.jpeg";

// import background5 from "./Images/bg8.webp"

// import required modules
import { Navigation } from "swiper";
export default class slide extends Component {
  render() {
    return (
      <>
        <div className="wrap-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide
                    style={{ backgroundImage: `url(${background})` }}
                    className="bag-3"
                  ></SwiperSlide>
                  <SwiperSlide
                    style={{ backgroundImage: `url(${background1})` }}
                    className="bag-3"
                  ></SwiperSlide>
                  <SwiperSlide
                    style={{ backgroundImage: `url(${background2})` }}
                    className="bag-3"
                  ></SwiperSlide>
                  <SwiperSlide
                    style={{ backgroundImage: `url(${background3})` }}
                    className="bag-3"
                  ></SwiperSlide>
                  <SwiperSlide
                    style={{ backgroundImage: `url(${background4})` }}
                    className="bag-3"
                  ></SwiperSlide>
                  {/* <SwiperSlide style={{ backgroundImage: `url(${background5})`}} className="bag-3"></SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
