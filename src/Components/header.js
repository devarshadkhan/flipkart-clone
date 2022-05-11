import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import Logo from './Images/logo.png'
export default class header extends Component {
  render() {
    return (
        <>
        <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
       <div className="col-md-2"> 
       <Link className="navbar-brand" to="/">
        <img src={Logo} alt="" className='bag-1'/>
        </Link></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search for products, brands, and more" aria-label="Search"  />
          </form>
          {/* <a href="/" className='fa fa-search bag-2'></a> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active bag-2" aria-current="page" to="/" >Login</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Become a Seller</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Notification Preferences</Link></li>
                <li><Link className="dropdown-item" to="/">24*7 Customer Care</Link></li>
                <li><Link className="dropdown-item" to="/">Advertise</Link></li>
                <li><Link className="dropdown-item" to="/" >Download App</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Affiliate</Link>
            </li>
          </ul>
         {/* <i className='fa fa-shopping-cart fa-3x '></i> */}
        </div>
      </div>
    </nav>
    </section>
    <Outlet/>
      </>
    )
  }
}
