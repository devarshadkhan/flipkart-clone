import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import Header from '../../header.js'
import Subheader from '../../subheader.js'
import Footer from '../../subfooter.js';
import Slide from '../../slide.js'
import OwlCarousel from 'react-owl-carousel';
// import Heart from "react-animated-heart";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../../Images/img1.webp"
import img2 from "../../Images/img2.webp"
import img3 from "../../Images/img3.webp"
import img4 from "../../Images/img4.webp"
import img5 from "../../Images/img5.webp"
import img6 from "../../Images/img6.webp"
import img7 from "../../Images/img7.webp"
import img8 from "../../Images/img8.webp"
import img9 from "../../Images/img9.webp"
import img10 from "../../Images/img10.webp"
import img11 from "../../Images/img11.webp"
import img12 from "../../Images/img12.webp"
import img13 from "../../Images/img13.webp"
import img14 from "../../Images/img14.webp"
import img15 from "../../Images/img15.webp"
import img16 from "../../Images/img16.webp"
import img17 from "../../Images/img17.webp"
import img18 from "../../Images/img18.webp"
import img19 from "../../Images/img19.webp"
import img20 from "../../Images/img20.webp"
import img21 from "../../Images/img21.webp"
import img22 from "../../Images/img22.webp"
import img23 from "../../Images/img23.webp"
import img24 from "../../Images/img24.webp"
import img25 from "../../Images/img25.webp"
import img26 from "../../Images/img26.webp"
import img27 from "../../Images/img27.webp"
import img28 from "../../Images/img28.webp"
import img31 from "../../Images/img31.webp"
import img30 from "../../Images/img30.webp"
import img32 from "../../Images/img32.webp"
import img33 from "../../Images/img33.webp"
import img34 from "../../Images/img34.webp"
import img35 from "../../Images/img35.webp"
import img36 from "../../Images/img36.webp"
import img37 from "../../Images/img37.webp"
import img38 from "../../Images/img38.webp"
import img39 from "../../Images/img39.webp"
import img40 from "../../Images/img40.webp"
// import $ from 'jquery';
require ("react-owl-carousel")


export default class home extends Component {
  // state = {
  //   date: new Date()
  // }
  
  // componentDidMount() {
  //   this.timerId = setInterval(() => this.tick(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }
    
  // tick() {
  //   // this.state.date = new Date(); - wrong way
  //   this.setState({date: new Date()});
  // }
  
  render() {
    // const [isClick, setClick] = useState(false);
    return (
        <>
        <Header/>
        <Subheader/>
        <Slide/>
        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Suggest For You</h2>
              <p>Based on Your Activity</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >
    <div class='item'>
    <div class="thumb-wrapper">
                    <span class="wish-icon" id="heart"><i class="fa fa-heart-o" id='heart'></i></span>
                    <div class="img-box">
                      <img src={img1} class="img-responsive img-fluid" alt="" className='bag-6'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Best of Brands</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>	
                    					
                  </div> 
              </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o" id='heart'></i></span>
                    <div class="img-box">
                      <img src={img2} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Tops Dressed</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img3} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Trimmer</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img4} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Designer Bedsheets</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img5} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Containers</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img6} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Bath Soap</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
</OwlCarousel>
            </div>
          </div>
        </div>





        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Suggest For You</h2>
              <p>Based on Your Activity</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >
    <div class='item'>
    <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img7} class="img-responsive img-fluid" alt="" className='bag-6'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Bra & Bikini's</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>	
                    					
                  </div> 
              </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img8} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Watches</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img9} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>CookWare's Sets</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img10} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Steamer Vaporiser</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img11} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Sparks, Burton & More</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img12} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Selling Footware</h4>		
                      <p>Lorem ipsum dolor sit amet consectetur.</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
</OwlCarousel>
            </div>
          </div>
        </div>





        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Best of Laptops For Developer's</h2>
              <p>Devices and Accessories</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >
    <div class='item'>
    <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img13} class="img-responsive img-fluid" alt="" className='bag-6'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Dell Inspiron</h4>
                      <p>Core i5 11th Gen 8GB/256GB</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>	
                    					
                  </div> 
              </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img14} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>Lenevo IdeaPad</h4>		
                      <p>3 Core 11th Gen 8GB/256GB</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img15} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>ASUS VivoBook</h4>		
                      <p>Core i3 10th Gen 8GB/256GB</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img16} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>APPLE 2022</h4>		
                      <p>MacBook Air M1 8GB/256GB</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img17} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>HP Thin & Light</h4>		
                      <p>Core i3 11th Gen 8GB/256GB</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
                  <div className="item">
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img18} class="img-responsive img-fluid" alt="/" className='bag-6'/>									
                    </div>
                    <div class="thumb-content">
                      <h4>realme Book Slim</h4>		
                      <p>Core i3 11th Gen 8GN/256GB</p>								
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$400.00</strike><b>$369.00</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>						
                  </div>
               </div>
</OwlCarousel>
            </div>
          </div>
        </div>





        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Best of Electronics</h2>
              <p>Devices and Accessories</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >

                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img19} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>APPLE Iphone 11,12,13</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img20} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>RedMi All Set</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img21} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>OPPO All Set</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img22} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>SAMSUNG All Set</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img23} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>VIVO All Set</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img24} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>REALME All Set</h4>
                      <p>64GB ROM</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                
</OwlCarousel>
            </div>
          </div>
        </div>





        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Fashion For Women</h2>
              <p>Heavy Discount in Fashoin</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >

                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img25} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Ladies Undergarments</h4>
                      <p>Women with Hipster</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img26} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Ladies BRA</h4>
                      <p>Fit And Comfortable</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img27} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Highty</h4>
                      <p>Women Highty 4-Pcs</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img28} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Night Top</h4>
                      <p>Comfortable Sleeping</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img31} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Track Suit</h4>
                      <p>Women Track Suit</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img30} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Women Dress</h4>
                      <p>Jogging Dresses</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                
</OwlCarousel>
            </div>
          </div>
        </div>
       





        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Best Deals in Phones</h2>
              <p>Heavy Discount in Mobile</p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>            
              <div className="col-md-4">
                <Link to="/buynow">
                <img src={img32} alt="" className='bag-8'/>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/buynow">
                <img src={img33} alt="" className='bag-8'/>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="/buynow">
                <img src={img34} alt="" className='bag-8'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
       



        <div className="wrap-4">
          <div className="container-fluid">
            <div className="row">
           <div className="BorderBottom">
           <div className="col-md-6">
              <h2>Trending Offers</h2>
              <p>Heavy Discount offer left <span className='bag-9'></span></p>
            </div>
            <div className="col-md-6">
             <div className="bag-5">
             <a href="/" className='btn btn-primary' >VEIW ALL</a>
             </div>
            </div>
           </div>
            <OwlCarousel className='owl-theme' loop={true} margin={10} nav items={6} dots={false} responsive={false} >

                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img35} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Casual Shirt</h4>
                      <p>For Men</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img36} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Saree's</h4>
                      <p>For Women</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img37} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Designer Shirt Parties</h4>
                      <p>For Men</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img38} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Wrist Watch</h4>
                      <p>For Men</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img39} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>Wallet</h4>
                      <p>For Men</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>					
                  </div> 
              </div>
                  <div class='item'>
                  <div class="thumb-wrapper">
                    <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
                    <div class="img-box">
                      <img src={img40} class="img-responsive img-fluid" alt="" className='bag-7'/>
                    </div>
                    <div class="thumb-content">
                      <h4>American Tourister</h4>
                      <p>Luggagage Bag</p>									
                      <div class="star-rating">
                        <ul class="list-inline">
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star"></i></li>
                          <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                        </ul>
                      </div>
                      <p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                      <Link to="/buynow" class="btn btn-primary">Buy Now</Link>
                    </div>
                  </div> 
              </div>
</OwlCarousel>
            </div>
          </div>
        </div>

        <Footer/>
        </>
    );
  };
};
