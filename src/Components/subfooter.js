import React, { Component } from 'react'

export default class subfooter extends Component {
  render() {
    return (
      <footer class="flex-rw">
  
      <ul class="footer-list-top">
        <li>
          <h4 class="footer-list-header">About Pavilion</h4></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW US</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">BECOME A RETAILER</a></li>
    
        <li><a href='/' itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>
    
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTS</a></li>
      </ul>
      <ul class="footer-list-top">
        <li>
          <h4 class="footer-list-header">The Gift Selection</h4></li>
    
    
        <li><a href='/' class="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor">HOME DECOR</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor">MUGS</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor">PET LOVER</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
      </ul>
      <ul class="footer-list-top">
        <li id='help'>
          <h4 class="footer-list-header">Please Help Me</h4></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a></li>
        <li><a href='/' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
        <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">STORE LOCATOR</a></li>
        <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">NEW USERS</a></li>
        <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
      </ul>
      <section class="footer-social-section flex-rw">
          <span class="footer-social-overlap footer-social-connect">
          CONNECT <span class="footer-social-small">with</span> US
          </span>
          <span class="footer-social-overlap footer-social-icons-wrapper">
          <a href="/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
          <a href="/" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
          <a href="/" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
          <a href="/" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
          <a href="/" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
          <a href="/" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
          </span>
      </section>
      <section class="footer-bottom-section flex-rw">
    <div class="footer-bottom-wrapper">   
    <i class="fa fa-copyright" role="copyright">
     
    </i> 2019 Pavilion in <address class="footer-address" role="company address">Bergen, NY</address><span class="footer-bottom-rights"> - All Rights Reserved - </span>
        </div>
        <div class="footer-bottom-wrapper">
        <a href="/" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacy</a>
          </div>
      </section>
    </footer>
    )
  }
}
