// import React, { Component } from "react";
// import payment from "./Images/payment.svg";
// import { Link } from "react-router-dom";
// import Logo from "./Images/logo.png";
// import Datafetch from './Datafetch'
// // import Payment from '../../payment.js';

// export default class subfooter extends Component {
//   render() {
//     return (
//       <footer class="footer-section">
//         <div class="container-fluid">
//           <div class="footer-cta pt-3 pb-3">
//           {
//             Datafetch.map((element =>{
//               return (
//                 <>
//               <div class="row bag-14" key={element.id15}>
//               <div class="col-xl-4 col-md-4 mb-30">
//                 <div class="single-cta">
//                   <i class="fas fa-map-marker-alt"></i>
//                   <div class="cta-text">
//                     <h4>{element.sname}</h4>
//                     <span>{element.Address}</span>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-xl-4 col-md-4 mb-30">
//                 <div class="single-cta">
//                   <i class="fas fa-phone"></i>
//                   <div class="cta-text">
//                     <h4>{element.cname}</h4>
//                     <span>{element.PhoneNum}</span>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-xl-4 col-md-4 mb-30">
//                 <div class="single-cta">
//                   <i class="far fa-envelope-open"></i>
//                   <div class="cta-text">
//                     <h4>{element.mname}</h4>
//                     <span>{element.email}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//               </>
//               )
//             }))
//           }
//           </div>
//           <div class="footer-content pt-5 pb-5">
//             {
//               Datafetch.map((element => {
//                 return (
//                   <>
//                   <div class="row bag-14" key={element.id15}>
//               <div class="col-xl-4 col-lg-4 mb-50">
//                 <div class="footer-widget">
//                   <div class="footer-logo">
//                     <Link to="">
//                       <img src={Logo} class="img-fluid" alt="logo" />
//                     </Link>
//                   </div>
//                   <div class="footer-text">
//                     <p>
//                     {element.content}
//                     </p>
//                   </div>
//                   <div class="footer-social-icon">
//                     <span>Follow us</span>
//                     <Link to="">
//                       <i class="fab fa-facebook-f facebook-bg"></i>
//                     </Link>
//                     <Link to="">
//                       <i class="fab fa-twitter twitter-bg"></i>
//                     </Link>
//                     <Link to="">
//                       <i class="fab fa-google-plus-g google-bg"></i>
//                     </Link>
//                     <Link to="">

//                       <i class="fab fa-instagram instagram instagram-bg"></i>

//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
//                 <div class="footer-widget">
//                   <div class="footer-widget-heading">
//                     <h3>{element.sname1}</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       {/* <Link to="">MOBILES</Link> */}
//                       <Link to="">{element.link1}</Link>
//                     </li>
//                     <li>
//                       {/* <Link to="">LARGE APPLIANCES</Link> */}
//                       <Link to="">{element.link2}</Link>
//                     </li>
//                     <li>
//                       {/* <Link to="">IPHONE</Link> */}
//                       <Link to="">{element.link3}</Link>
//                     </li>
//                     <li>
//                       {/* <Link to="">CAMERA</Link> */}
//                       <Link to="">{element.link4}</Link>
//                     </li>
//                     {/* <li>
//                       <Link to="">LARGE APPLIANCES</Link>
//                     </li> */}
//                     <li>
//                       {/* <Link to="">CLOTHING</Link> */}
//                       <Link to="">{element.link5}</Link>
//                     </li>
//                     <li>
//                       {/* <Link to="">FOOTWEAR</Link> */}
//                       <Link to="">{element.link6}</Link>
//                     </li>
//                     <li>
//                       {/* <Link to="">GROCERIES</Link> */}
//                       <Link to="">{element.link7}</Link>
//                     </li>
//                     {/* <li>
//                       <Link to="">Contact us</Link>
//                       <Link to="">Contact us</Link>
//                     </li> */}
//                     <li>
//                       {/* <Link to="">BEST SELLING ON FLIPKAR</Link> */}
//                       <Link to="">{element.link8}</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
//                 <div class="footer-widget">
//                   <div class="footer-widget-heading">
//                     <h3>{element.sname2}</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <Link to="">{element.link9}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link10}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link11}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link12}</Link>
//                     </li>
//                     {/* <li>
//                       <Link to="">Contact</Link>
//                     </li> */}
//                     <li>
//                       <Link to="">{element.link13}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link14}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link15}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link16}</Link>
//                     </li>
//                     <li>
//                       <Link to="">{element.link17}</Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               {/* <div class="col-xl-4 col-lg-6 col-md-6 mb-50">
//                         <div class="footer-widget">
//                             <div class="footer-widget-heading">
//                                 <h3>Subscribe</h3>
//                             </div>
//                             <div class="footer-text mb-25">
//                                 <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
//                             </div>
//                             <div class="subscribe-form">
//                                 <form action="#">
//                                     <input type="text" placeholder="Email Address"/>
//                                     <button><i class="fab fa-telegram-plane"></i></button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div> */}
//             </div>
//                   </>
//                 )
//               }))
//             }
//           </div>
//         </div>
//         <div class="copyright-area">
//           <div class="container-fluid">
//             <div class="row bag-14">
//               <div class="col-xl-6 col-lg-6 text-center text-lg-left">
//                 <div class="copyright-text">
//                   <p>
//                     Copyright &copy; 2022, All Right Reserved{" "}
//                     <Link to="">Himotech Global Technologies</Link>
//                   </p>
//                 </div>
//               </div>
//               <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//                 <div class="footer-menu">
//                   <ul>
//                     <li>
//                       <Link to="/payments">
//                         <img src={payment} alt="" />
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }
import React from "react";
import { Link } from "react-router-dom";
const Subfooter = () => {
  const data = [
    {
      id: 1,
      name: "Contact Us",
    },
    {
      id: 1,
      name: "About Us",
      // link:"https://www.linkedin.com/feed/"
      link:"/about"
    },
    {
      id: 1,
      name: "Careers",
    },
    {
      id: 1,
      name: "Flipkart Stories",
    },
    {
      id: 1,
      name: "Press",
    },
    {
      id: 1,
      name: "Flipkart Wholesale",
    },
    {
      id: 1,
      name: "Corporate Information",
    },
  ];
  const data1 = [
    {
      id: 2,
      name: "Payments",
      link:"/payment"
    },
    {
      id: 2,
      name: "Shipping",
      link:"/shipping"
    },
    {
      id: 2,
      name: "Cancellation & Returns",
      link:"/flipkart-plus"
    },
    {
      id: 2,
      name: "FAQ",
    },
    {
      id: 2,
      name: "Report Infringement",
    },
  ];
  const data2 = [
    {
      id: 2,
      name: "Return Policy",
      link:"/return-policy"
    },
    {
      id: 2,
      name: "Terms Of Use",
      link:"/term-&-condition"
    },
    {
      id: 2,
      name: "Security",
      link:"/security"
    },
    {
      id: 2,
      name: "Privacy",
      link:"/privacy-policy"
    },
    {
      id: 2,
      name: "Sitemap",
    },
    {
      id: 2,
      name: "EPR Compliance",
    },
  ];
  const data3 = [
    {
      id: 2,
      name: "Facebook",
    },
    {
      id: 2,
      name: "Twitter",
    },
    {
      id: 2,
      name: "YouTube",
    },
  ];
  const data4 = [
    {
      id: 2,
      name: "Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India",
    },
  ];
  const data5 = [
    {
      id: 2,
      name: "B-01, 84, Block D, Sector 2, Noida, UP 201301 India",
    },
  ];
  const data6 = [
    {
      id: 2,
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K",
      name: "Become a seller",
    },
  ];
  const data7 = [
    {
      id: 2,
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
      name: "Gift Cards",
    },
  ];
  const data8 = [
    {
      id: 2,
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      name: "Advertise",
    },
  ];
  const data9 = [
    {
      id: 2,
      img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
      name: "Help Center",
    },
  ];
  const data10 = [
    {
      id: 2,
      img: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg",
    },
  ];
  return (
    <>
      <div className="wrap-25">
        <div className="container">
          <div className="row bag-14">
            <div className="col-md-2">
              <div className="bin-7">
                <h6>About</h6>
                {data.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          {/* <Link to={e.Link}>{e.name}</Link> */}
                          <a href={e.link}>{e.name}</a>
                          {/* <Link to="">{e.name}</Link> */}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bin-7">
                <h6>Help</h6>
                {data1.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <a href={e.link}>{e.name}</a>
                          {/* <a href={e.link}>{e.name}</a> */}
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bin-7">
                <h6>Policy</h6>
                {data2.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <a href={e.link}>{e.name}</a>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bin-7">
                <h6>Social</h6>
                {data3.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <a href="">{e.name}</a>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="col-md-2"
              style={{ borderLeft: "1px solid #454d5e" }}
            >
              <div className="bin-7">
                <h6>Mail Us</h6>
                {data4.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <p>{e.name}</p>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2">
              <div className="bin-7">
                <h6>Mail Us</h6>
                {data5.map((e) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <p>{e.name}</p>
                        </li>
                      </ul>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="wrap-26">
      <div className="container">
            <div className="row bag-14">
              <div className="col-md-2 mt-2">
                {data6.map((e) => {
                  return (
                    <>
                      <div className="bin-8">
                        <img src={e.img} alt="" />
                        <a href="">{e.name}</a>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-md-2 mt-2">
                {data7.map((e) => {
                  return (
                    <>
                      <div className="bin-8">
                        <img src={e.img} alt="" />
                        <a href="">{e.name}</a>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-md-2 mt-2">
                {data8.map((e) => {
                  return (
                    <>
                      <div className="bin-8">
                        <img src={e.img} alt="" />
                        <a href="">{e.name}</a>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-md-2 mt-2">
                {data9.map((e) => {
                  return (
                    <>
                      <div className="bin-8">
                        <img src={e.img} alt="" />
                        <a href="">{e.name}</a>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-md-2 mt-2">
                      <div className="bin-8">
                        <a>&copy; 2007-2022 Flipkart.com</a>
                      </div>
              </div>
              <div className="col-md-2 mt-2">
                {data10.map((e) => {
                  return (
                    <>
                      <div className="bin-9">
                        <img src={e.img} alt="" className="gtjhn"/>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Subfooter;
// import React from "react";
// import Header from "../Header";
// import Subfooter from "../Subfooter";
// import Subheader from "../Subheader";
// const Payments = () => {
//   return (
//     <>
//       <Header />
//       <Subheader />
//       <div className="wrap-28">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="bin-30 mt-5">
//                 <h6 className="mb-4">Payments</h6>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">How do I pay for a Flipkart purchase?</h5>
//                 <p>
//                   Flipkart offers you multiple payment methods. Whatever your
//                   online mode of payment, you can rest assured that Flipkart's
//                   trusted payment gateway partners use secure encryption
//                   technology to keep your transaction details confidential at
//                   all times.
//                 </p>
//                 <p>
//                   You may use Internet Banking, Gift Card, Cash on Delivery and
//                   Wallet to make your purchase.
//                 </p>
//                 <p>
//                   Flipkart also accepts payments made using Visa, MasterCard,
//                   Maestro and American Express credit/debit cards in India and
//                   21 other countries.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                   Are there any hidden charges (Octroi or Sales Tax) when I make
//                   a purchase on Flipkart?
//                 </h5>
//                 <p>
//                   There are NO hidden charges when you make a purchase on
//                   Flipkart. The prices listed for all the items are final and
//                   all-inclusive. The price you see on the product page is
//                   exactly what you pay.
//                 </p>
//                 <p>
//                   Delivery charges may be extra depending on the seller policy.
//                   Please check individual seller for the same. In case of seller
//                   WS Retail, the ₹50 delivery charge is waived off on orders
//                   worth ₹500 and over.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">What is Cash on Delivery?</h5>
//                 <p>
//                   If you are not comfortable making an online payment on
//                   Flipkart.com, you can opt for the Cash on Delivery (C-o-D)
//                   payment method instead. With C-o-D you can pay in cash at the
//                   time of actual delivery of the product at your doorstep,
//                   without requiring you to make any advance payment online.
//                 </p>
//                 <p>
//                   The maximum order value for a Cash on Delivery (C-o-D) payment
//                   is ₹50,000. It is strictly a cash-only payment method. Gift
//                   Cards or store credit cannot be used for C-o-D orders. Foreign
//                   currency cannot be used to make a C-o-D payment. Only Indian
//                   Rupees accepted.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">How do I pay using a credit/debit card?</h5>
//                 <p>
//                   We accept payments made by credit/debit cards issued in India
//                   and 21 other countries.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">Credit cards</h5>
//                 <p>
//                   We accept payments made using Visa, MasterCard and American
//                   Express credit cards.
//                 </p>
//                 <p>
//                   To pay using your credit card at checkout, you will need your
//                   card number, expiry date, three-digit CVV number (found on the
//                   backside of your card). After entering these details, you will
//                   be redirected to the bank's page for entering the online 3D
//                   Secure password.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">Debit cards</h5>
//                 <p>
//                   We accept payments made using Visa, MasterCard and Maestro
//                   debit cards.
//                 </p>
//                 <p>
//                   To pay using your debit card at checkout, you will need your
//                   card number, expiry date (optional for Maestro cards),
//                   three-digit CVV number (optional for Maestro cards). You will
//                   then be redirected to your bank's secure page for entering
//                   your online password (issued by your bank) to complete the
//                   payment.
//                 </p>
//                 <p>
//                   Internationally issued credit/debit cards cannot be used for
//                   Flyte, Wallet and eGV payments/top-ups.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                   Is it safe to use my credit/debit card on Flipkart?
//                 </h5>
//                 <p>
//                   Your online transaction on Flipkart is secure with the highest
//                   levels of transaction security currently available on the
//                   Internet. Flipkart uses 256-bit encryption technology to
//                   protect your card information while securely transmitting it
//                   to the respective banks for payment processing.
//                 </p>
//                 <p>
//                   All credit card and debit card payments on Flipkart are
//                   processed through secure and trusted payment gateways managed
//                   by leading banks. Banks now use the 3D Secure password service
//                   for online transactions, providing an additional layer of
//                   security through identity verification.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                   What steps does Flipkart take to prevent card fraud?
//                 </h5>
//                 <p>
//                   Flipkart realizes the importance of a strong fraud detection
//                   and resolution capability. We and our online payments partners
//                   monitor transactions continuously for suspicious activity and
//                   flag potentially fraudulent transactions for manual
//                   verification by our team.
//                 </p>
//                 <p>
//                   In the rarest of rare cases, when our team is unable to rule
//                   out the possibility of fraud categorically, the transaction is
//                   kept on hold, and the customer is requested to provide
//                   identity documents. The ID documents help us ensure that the
//                   purchases were indeed made by a genuine card holder. We
//                   apologise for any inconvenience that may be caused to
//                   customers and request them to bear with us in the larger
//                   interest of ensuring a safe and secure environment for online
//                   transactions.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">What is a 3D Secure password?</h5>
//                 <p>
//                   The 3D Secure password is implemented by VISA and MasterCard
//                   in partnership with card issuing banks under the "Verified by
//                   VISA" and "Mastercard SecureCode" services, respectively.
//                 </p>
//                 <p>
//                   The 3D Secure password adds an additional layer of security
//                   through identity verification for your online credit/debit
//                   card transactions. This password, which is created by you, is
//                   known only to you. This ensures that only you can use your
//                   card for online purchases.
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                   How can I get the 3D Secure password for my credit/debit card?
//                 </h5>
//                 <p>
//                   You can register for the 3D Secure password for your
//                   credit/debit card by visiting your bank's website. The
//                   registration links for some of the banks have been provided
//                   below for easy reference:
//                 </p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <table class="table">
//                   <thead>
//                     <tr>
//                       <th>State Bank of India</th>
//                       <th>ICICI Bank</th>
//                       <th>HDFC Bank</th>
//                       <th>Punjab National Bank</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Axis Bank</td>
//                       <td>Corporation Bank</td>
//                       <td>Andhra Bank</td>
//                       <td>Bank of Baroda</td>
//                     </tr>
//                     <tr>
//                       <td>Standard Chartered India</td>
//                       <td>Union Bank of India</td>
//                       <td>Central Bank of India</td>
//                       <td>Citibank</td>
//                       {/* <td>Doe</td> */}
//                     </tr>
//                     <tr>
//                       <td>Deutsche Bank</td>
//                       <td>Dhanlakshmi Bank</td>
//                       <td>IDBI Bank</td>
//                       <td>Canara Bank</td>
//                     </tr>
//                     <tr>
//                       <td>IndusInd Bank</td>
//                       <td>Federal Bank</td>
//                       <td>Kotak Mahindra Bank</td>
//                       <td>Karur Vysya Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Oriental Bank of Commerce</td>
//                       <td>South Indian Bank</td>
//                       <td>Vijaya Bank</td>
//                       <td>-</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                 Can I use my bank's Internet Banking feature to make a payment?
//                 </h5>
//                 <p>
//                 Yes. Flipkart offers you the convenience of using your bank's Internet Banking service to make a payment towards your order. With this you can directly transfer funds from your bank account, while conducting a highly secure transaction.
//                 </p>
//                 <p>We accept payment through Internet Banking for the following banks:</p>
//                 <table class="table">
//                   <thead>
//                     <tr>
//                       <th>ABN Amro Bank</th>
//                       <th>Axis Bank</th>
//                       <th>Allahabad Bank</th>
//                       <th>Andhra Bank</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>Bank of Bahrain and Kuwait</td>
//                       <td>Bank of Baroda</td>
//                       <td>Bank of India</td>
//                       <td>Bank of Maharashtra</td>
//                     </tr>
//                     <tr>
//                       <td>Bank of Rajasthan	</td>
//                       <td>Central Bank of India	</td>
//                       <td>Citibank</td>
//                       <td>City Union Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Corporation Bank</td>
//                       <td>Deutsche Bank</td>
//                       <td>Development Credit Bank</td>
//                       <td>Dhanlaxmi Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Federal Bank</td>
//                       <td>HDFC Bank</td>
//                       <td>ICICI Bank</td>
//                       <td>IDBI Bank</td>
//                     </tr>
//                     <tr>
//                       <td>ING Vysya Bank</td>
//                       <td>Indian Overseas Bank</td>
//                       <td>Indian Bank</td>
//                       <td>IndusInd Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Jammu & Kashmir Bank</td>
//                       <td>Karnataka Bank</td>
//                       <td>Karur Vysya Bank</td>
//                       <td>Kotak Mahindra Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Lakshmi Vilas Bank</td>
//                       <td>Oriental Bank of Commerce</td>
//                       <td>Punjab National Bank</td>
//                       <td>Royal Bank of Scotland</td>
//                     </tr>
//                     <tr>
//                       <td>South Indian Bank</td>
//                       <td>Standard Chartered Bank</td>
//                       <td>State Bank of Hyderabad</td>
//                       <td>State Bank of India</td>
//                     </tr>
//                     <tr>
//                       <td>State Bank of Mysore</td>
//                       <td>State Bank of Travancore</td>
//                       <td>Syndicate Bank</td>
//                       <td>Tamilnad Mercantile Bank</td>
//                     </tr>
//                     <tr>
//                       <td>Union Bank of India</td>
//                       <td>United Bank of India</td>
//                       <td>Vijaya Bank</td>
//                       <td>YES Bank</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5 className="">
//                 Can I make a credit/debit card or Internet Banking payment on Flipkart through my mobile?
//                 </h5>
//                     <p>Yes, you can make credit card payments through the Flipkart mobile site and application. Flipkart uses 256-bit encryption technology to protect your card information while securely transmitting it to the secure and trusted payment gateways managed by leading banks.</p>
//               </div>
//               <div className="bin-30 mt-4">
//                 <h5>
//                 How does 'Instant Cashback' work?
//                 </h5>
//                 <p>The 'Cashback' offer is instant and exclusive to Flipkart.com. You only pay the final price you see in your shopping cart.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Subfooter />
//     </>
//   );
// };

// export default Payments;