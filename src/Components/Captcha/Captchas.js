// import React from "react";
// import Captcha from "react-numeric-captcha";

// class Captcha extends React.Component {

//   render() {
//     const { captchaSuccess } = this.state;
//     return (
//       <div className="">
//         <h1>react-numeric-captcha</h1>
//         <form>
//           <Captcha
//             onChange={status => this.setState({ captchaSuccess: status })}
//           />
//           <br />
//           <button disabled={!captchaSuccess}>Submit Form</button>
//         </form>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react'
import Captcha from "react-numeric-captcha";
export default class Captchas extends Component {
    state = {
        captchaSuccess: false,

      };
    
      render() {
        const { captchaSuccess } = this.state;
        return (
          <div className="">
            {/* <h1>react-numeric-captcha</h1> */}
            <form>
              <Captcha
                onChange={status => this.setState({ captchaSuccess: status })}
              />
              <br />
              <button disabled={!captchaSuccess} className="rfghb btn btn-primary">Confirm Order</button>
            </form>
          </div>
          
        );
      }
}


