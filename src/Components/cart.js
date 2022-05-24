import React, { Component } from 'react'
import Header from './header'
import Subheader from './subheader'
import Subfooter from './subfooter'
export default class cart extends Component {
  render() {
    return (
    <>
        <Header/>
      <Subheader/>
      <h1>Shopping Cart</h1>

      <Subfooter/>
      
    </>
    )
  }
}
