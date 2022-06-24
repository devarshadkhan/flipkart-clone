import React,{useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import $ from 'jquery'
import { useSelector } from "react-redux";
import Menu from '@mui/material/Menu';
import { Badge } from "@mui/material";
import { useDispatch } from "react-redux";

const Subheader = ()=> {

// const getdata = useSelector((state)=> state.cartreducer.carts);
//         console.log(getdata);

//         const [anchorEl, setAnchorEl] = useState(null);
//         const open = Boolean(anchorEl);
//         const handleClick = (event) => {
//             setAnchorEl(event.currentTarget);
//         };
//         const handleClose = () => {
//             setAnchorEl(null);
//         };




      $(document).ready(function() {  
        $('#cartModal').modal('show');
      });

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });
});

    return (
      <>
        <section className="subheader">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* <Link to="/" className='fLink fa-search bag-2'></Link> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item  ">
                    <Link className="nav-link " aria-current="page" to="/">
                      <i class="fa-solid fa-house-chimney-crack"></i>
                    </Link>
                  </li>
                  <li  className="nav-item  dropdown">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/electronics"
                    >Electonics</Link> 
                        {/* Submwnu */}
                        <ul class="dropdown-menu">
                          <li>
                          <Link to="/"  className="dropdown-item">All</Link>
                          </li>
                            <li >
                            <Link to="/desktop"  className="dropdown-item" data-toggle="dropdown">Computers Pheripherals</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">All</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Monitors </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Printers </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Projectors </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Portable Projectors </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Toners </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Inkcatrigdes </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Ink Bottles </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Reciept Printers </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Laminations Machine </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Barcode Scanner </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Currency Detectors </Link></li>
                            </ul>
                            </li>
                            <li ><Link to="/laptop"  className="dropdown-item">Laptop Accessories</Link>
                            <ul className="dropdown-menu bag-22">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">All </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Mouse </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Laptop Keyboard </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Router </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Datacards </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">UPS </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">USB Gadgets </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Security Software </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Laptop Battery </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Laptop Adapter </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Processor </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Other Accessories </Link></li>
                            </ul></li>
                            <li><Link to="/"  className="dropdown-item">Camera & Accessories</Link>
                            <ul className="dropdown-menu bag-22">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">All </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">DSLR & Mirrorless </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Sports & Action </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Point & Shoot </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Instant Camera </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Camcorders </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Camera Tripods </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Drone </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Flashes </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Gimbals </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Gimocolores </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">All Accessories </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Power Bank</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Mobile Accessory</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Laptop And Desktop</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Smart Home Automation</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Smart Wearables</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Storage</Link>
                            <ul className="dropdown-menu bag-22">
                            <li><Link className="dropdown-item bag-2" to="/">Submenu</Link></li>
                            <li><Link className="dropdown-item" to="/">Submenu</Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                            <li><Link to="/"  className="dropdown-item">Tablets</Link>
                            <ul className="dropdown-menu bag-22">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                            </li>
                          </ul>
                       </li>
                

                  <li className="nav-item">
                    <Link className="nav-link" to="/tvappliance">
                      TV & Appliances
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/babykids">
                      Baby & Kids
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/men">
                      Men
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/women">
                      Women
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Grocery
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Offer Zone
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Beauty Toys & More
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Flight
                    </Link>
                    <ul className="dropdown-menu ">
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            <li className="dropdown-submenu"><Link className="dropdown-item " to="/">Submenu </Link></li>
                            </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/">
                          Sports And Books
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Furniture
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Stationery
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Crockrey
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    
                  </li>
                  <li className="nav-item">
                  {/* <Link to=""  onClick={handleClick}><i className="fa fa-cart-plus"></i>
                  </Link> */}
                  <Link to='/Addtocart'>
                 <Badge badgeContent={1} color="primary" id="basic-button"
                    >
                        <i className="fa fa-cart-plus"></i>
                  </Badge>
                 </Link>
                  </li>
                {/* <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                /> */}

                </ul>
              </div>
            </div>
          </nav>
        </section>

        <Outlet />
      </>
    );
  }







export default Subheader;