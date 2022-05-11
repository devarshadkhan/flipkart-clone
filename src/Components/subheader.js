import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
export default class subheader extends Component {
  render() {
    return (
      <>
          <section className="subheader">
          <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
          {/* <a href="/" className='fa fa-search bag-2'></a> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/electronics" >Electonics</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tvappliance">TV & Appliances</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/babykids">Baby & Kids</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men">Men</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/women">Women</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Grocery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Offer Zone</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Beauty Toys & More</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Flight</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Sports And Books</Link></li>
                <li><Link className="dropdown-item" to="/">Furniture</Link></li>
                <li><Link className="dropdown-item" to="/">Stationery</Link></li>
                <li><Link className="dropdown-item" to="/" >Crockrey</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          </section>
    <Outlet/>
      </>
    )
  }
}
