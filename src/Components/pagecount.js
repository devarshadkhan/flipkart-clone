import React, { Component } from 'react'
import $  from "jquery"
import { Link } from 'react-router-dom';
export default class pagecount extends Component {
  render() {
    let current = 0;

    let loadCurrent = (number) => {
      $('#current').text(number);
    }
    
    $('.previous').click(() => {
      if(current > 1) {
        current--;  
      }
      loadCurrent(current);
    });
    
    $('.next').click(() => {
      if(current < 5) { 
        current++; 
      }
      loadCurrent(current);
    });
    
    loadCurrent(current);
    return (
      <>
          <div className="cantainer">
              <div className="row">
                  <div className="col-md-12">
                  <div className="previous" >
                <Link to=""><i class="fa fa-caret-left"></i></Link>
            </div>
            <div class="box" id="current"></div>
            <div className="next" >
                <Link to=""><i class="fa fa-caret-right"></i></Link>
            </div>
                  </div>
              </div>
          </div>
      </>
    )
  }
}
