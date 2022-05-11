import React, { Component } from 'react'
import Header from './header.js'
import Subheader from './subheader.js'
// import Breadcum from './breadcum.js'
// import Slide from './slide.js'
export default class buynow extends Component {
  render() {
    return (
      <>
      <Header/>
        <Subheader/>
        {/* <Breadcum/> */}
        {/* <Slide/> */}
          <div class="product-card">
  <div class="product-details">
    <h1>Product title</h1>
    <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
    <button type="button" class="btn">Buy Now</button>
  </div>
  {/* <div class="product-image">
    <img src="http://www.aendesign.co.uk/images/hc%20t-shirt%20mock-up%20front%401-crop-u22496.png?crc=114384536"/>
  </div> */}
</div>
      </>
    )
  }
}
