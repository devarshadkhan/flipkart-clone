import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Header from './header';
import Subheader from './subheader';
import Subfooter from './subfooter';
// import $ from "jquery"
export default class filterpage2 extends Component {
  render() {
    
    return (
     <>
         <Header/>
         <Subheader/>

<div className="container-fluid">
         <div class="row">

<div class="col-md-4 ">
<div className="bag-31 shadow">

    
<div class="wrapper center-block hidden-xs">
    <div class="filters-text">
        {/* <span class="filter-span">Filters <small>(find product using filters below)</small></span> */}
        <input class="filter-span" placeholder='find product using filters below' type="text"></input>
        <span style={{float:"right"}}><i class="fa fa-filter"></i></span>
    </div>
    <nav class="navbar navbar-expand-lg bag-30">
  <div class="container-fluid">
    <div className="col-md-12">
    <div class="card mb-4">
    <div class="card-header">Categories</div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Desktop
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Laptop
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Storage
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tablets
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Smart Wearless
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Laptop Components
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mobile Accessories
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Smart Home Automation
          </Link>
          <ul class="dropdown-menu bag-33" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Desktop-1</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-2</Link></li>
            <li><Link class="dropdown-item" to="/">Desktop-3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>



  <div class="card">
				<div class="card-header">Filter</div>
				<div class="card-body p-1">
					<div class="card border-0 b-3">
						<div class="card-header p-2 bg-white" data-toggle="collapse" data-target="/collapseExample1" aria-expanded="false">
							<p class="m-0 h6">Brand</p>
						</div>
						<div class="card-body p-0 collapse show" id="collapseExample1">
							<ul class="list-group list-group-flush" style={{height:"200px",overflow:"auto;"}}>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Google</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Microsoft</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Apple</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Samsung</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Amazon</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Asus</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">LG</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Sony</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">MSI</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">HP</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Compact</label>
									</div>
									<span class="badge badge-secondary badge-pill">14</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="card border-0 b-3">
						<div class="card-header p-2 bg-white" data-toggle="collapse" data-target="/collapseExample2" aria-expanded="false">
							<p class="m-0 h6">Size</p>
						</div>
						<div class="card-body p-0 collapse show" id="collapseExample2">
							<ul class="list-group list-group-flush" style={{height:"200px",overflow:"auto;"}}>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">XXS</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">XS</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">S</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">M</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">L</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">XL</label>
									</div>
								</li>
								<li class="list-group-item p-2 d-flex justify-content-between align-items-center">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">XXL</label>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div class="card border-0 b-3">
						<div class="card-header p-2 bg-white" data-toggle="collapse" data-target="/collapseExample4" aria-expanded="false">
							<p class="m-0 h6">Price</p>
						</div>
						<div class="card-body p collapse show" id="collapseExample4">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label>Min</label>
									<input class="form-control bag-23" placeholder="$0" type="number"/>
								</div>
								<div class="form-group text-right col-md-6">
									<label>Max</label>
									<input class="form-control bag-23" placeholder="$1,0000" type="number"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div class="card-footer">
					<button type="button" class="custom-btn btn-3">Filter</button>
				</div> */}
                <Link className="custom-btn btn-3 bag-27" to="/buynow">
                        <span>Filter</span>
                      </Link>
			</div>
   
     
  </div>













  </div>
  
</nav>


    
    <div class="text-right refine"> <button class="btn btn-out btn-primary btn-square" id="button-filter">Refine Search</button> 
    </div>
</div>
</div>



  
</div>

















<div class="col-md-8">

  <div class="container-fluid py-5">
<div class="row">
    <div class="col-lg-12 mx-auto">
        <ul class="list-group shadow">
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row"> <img src={"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750338/Ecommerce/Laptop-3.jpg"} alt="" width="250" height="200" class="order-1 order-lg-1"/>
                    <div class="media-body order-2 order-lg-2 ml-lg-5">
                        <h5 class="mt-0 mb-1">Acer acreanon laptop with 16GB RAM/ 500GB HDD</h5>
                        <div class="product-rating mb-2"> <span class="badge23"><i class="fa fa-star"></i> 4 Star</span> <span class="rating-review mb-1">4 Ratings &amp; 3 Recommendations</span> </div> <span class="product_price price-new">₹ 22,186 </span>
                   
                        <div class="d-flex align-items-center justify-content-between mt-1">
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 8th Gen Intel Core i5-8250U processor</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 15.5 Inch | Antiglare Display</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 4GB RAM with Radeon 530 2GB Graphics</li>
                            </ul>
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> EMI Starts at 1726. No cost EMI available</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> Warranty: 6 Months Warranty</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> In Stock: 24 units sold this week</li>
                            </ul>
                            
                        </div>
                        <Link className="custom-btn btn-3 bag-32" to="/buynow">
                        <span>Add Cart</span>
                      </Link>
                        <hr class="mb-2 mt-1 seperator"/>

                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row"> <img src={"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750391/Ecommerce/hp-17-x061nr-white-background.jpg"} alt="" height="200" width="250" class="order-1 order-lg-1"/>
                    <div class="media-body order-2 order-lg-2 ml-lg-5">
                        <h5 class="mt-0 mb-1">HP Celeron laptop with 8GB RAM/ 250GB HDD</h5>
                        <div class="product-rating mb-2"> <span class="badge23"><i class="fa fa-star"></i> 5 Star</span> <span class="rating-review mb-1">4 Ratings &amp; 6 Recommendations</span> </div> <span class="product_price price-new">₹ 25,186 </span>
                        
                        <div class="d-flex align-items-center justify-content-between mt-1">
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 8th Gen Intel Core i5-8250U processor</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 15.5 Inch | Antiglare Display</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 4GB RAM with Radeon 530 2GB Graphics</li>
                            </ul>
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> EMI Starts at 1726. No cost EMI available</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> Warranty: 6 Months Warranty</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> In Stock: 24 units sold this week</li>
                            </ul>
                        </div>
                        <Link className="custom-btn btn-3 bag-32" to="/buynow">
                        <span>Add Cart</span>
                      </Link>
                        <hr class="mb-2 mt-1 seperator"/>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row"> <img src={"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750722/Ecommerce/acer-v-17-nitro-realsense.jpg"} alt="" height="200" width="250" class="order-1 order-lg-1"/>
                    <div class="media-body order-2 order-lg-2 ml-lg-5">
                        <h5 class="mt-0 mb-1">Acer Modifier laptop with 12GB RAM/ 500GB HDD</h5>
                        <div class="product-rating mb-2"> <span class="badge23"><i class="fa fa-star"></i> 4 Star</span> <span class="rating-review mb-1">3.5 Ratings &amp; 8 Recommendations</span> </div> <span class="product_price price-new">₹ 31,000 </span>
                        
                        <div class="d-flex align-items-center justify-content-between mt-1">
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 8th Gen Intel Core i5-8250U processor</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 15.5 Inch | Antiglare Display</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 4GB RAM with Radeon 530 2GB Graphics</li>
                            </ul>
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> EMI Starts at 1726. No cost EMI available</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> Warranty: 6 Months Warranty</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> In Stock: 24 units sold this week</li>
                            </ul>
                        </div>
                        <Link className="custom-btn btn-3 bag-32" to="/buynow">
                        <span>Add Cart</span>
                      </Link>
                        <hr class="mb-2 mt-1 seperator"/>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row"> <img src={"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750967/Ecommerce/ef192a21ec96.jpg"} alt="" width="250" height="200" class="order-1 order-lg-1"/>
                    <div class="media-body order-2 order-lg-2 ml-lg-5">
                        <h5 class="mt-0 mb-1">ASUS Modifier Gaming laptop with 12GB RAM/ 500GB HDD</h5>
                        <div class="product-rating mb-2"> <span class="badge23"><i class="fa fa-star"></i> 4 Star</span> <span class="rating-review mb-1">3.9 Ratings &amp; 8 Recommendations</span> </div> <span class="product_price price-new">₹ 41,186 </span>
                        <div class="d-flex align-items-center justify-content-between mt-1">
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 8th Gen Intel Core i5-8250U processor</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 15.5 Inch | Antiglare Display</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 4GB RAM with Radeon 530 2GB Graphics</li>
                            </ul>
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> EMI Starts at 1726. No cost EMI available</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> Warranty: 6 Months Warranty</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> In Stock: 24 units sold this week</li>
                            </ul>
                        </div>
                        <Link className="custom-btn btn-3 bag-32" to="/buynow">
                        <span>Add Cart</span>
                      </Link>
                        <hr class="mb-2 mt-1 seperator"/>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="media align-items-lg-center flex-column flex-lg-row"> <img src={"https://res.cloudinary.com/dxfq3iotg/image/upload/v1571751108/Ecommerce/laptop-dell-xps-15-computer-monitors-laptops.jpg"} alt="" width="250" height="200" class="order-1 order-lg-1"/>
                    <div class="media-body order-2 order-lg-2 ml-lg-5">
                        <h5 class="mt-0 mb-1">XPS Gaming laptop with 12GB RAM/ 500GB HDD / Graphics Card</h5>
                        <div class="product-rating mb-2"> <span class="badge23"><i class="fa fa-star"></i> 4 Star</span> <span class="rating-review mb-1">4 Ratings &amp; 3 Recommendations</span> </div> <span class="product_price price-new">₹ 65,000</span>
                        <div class="d-flex align-items-center justify-content-between mt-1">
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 8th Gen Intel Core i5-8250U processor</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 15.5 Inch | Antiglare Display</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> 4GB RAM with Radeon 530 2GB Graphics</li>
                            </ul>
                            <ul class="list-inline small">
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> EMI Starts at 1726. No cost EMI available</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> Warranty: 6 Months Warranty</li>
                                <li><img src={"https://img.icons8.com/material-outlined/10/000000/filled-circle--v1.png"} alt=""/> In Stock: 24 units sold this week</li>
                            </ul>
                        </div>
                        <Link className="custom-btn btn-3 bag-32" to="/buynow">
                        <span>Add Cart</span>
                      </Link>
                        <hr class="mb-2 mt-1 seperator"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</div>
  
</div>
 
</div>
</div>

         <Subfooter/>
     </>
    )
  }
}
