import React, { Component } from 'react'
import {  Link } from "react-router-dom";
export default class Breadcum extends Component {
  render() {
    return (
     <><div className="wrap-5">
         <div className="container">
         <div className="row">
         <div className="col-md-12">
	<ul class="breadcrumb">
		<li>
			<Link to="/">
				<i class="fa fa-home"></i>
			</Link>
		</li>
        / 
		<li>
			<Link to="/">
				BuyNow
			</Link>
		</li>
	</ul>
    </div>
    </div>
    </div>
    </div>
     </>
    )
  }
}
