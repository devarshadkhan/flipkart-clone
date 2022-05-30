import React from 'react';
import Table from 'react-bootstrap/Table';
import Img14 from "./Images/img14.webp";
import Header from './Header1';
import Subheader from './Subheader1';
import Subfooter from './Subfooter1';

function Cartdetails1() {



  return (
    <>
       <Header/>
    <Subheader/>
    <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
                <div className="items_img">
              <img src={Img14} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Items</strong>  : </p>
                    <p> <strong>Price</strong>  : ₹</p>
                    <p> <strong>Quantity</strong>  : </p>
                    <p> <strong>Total</strong>  :₹  </p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} >-</span>
                    <span style={{fontSize:22}}></span>
                    <span style={{fontSize:24}} >+</span>
                    </div>
                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
            </div>
            </section>
            </div>
            <Subfooter/>
    </>
  )
}

export default Cartdetails1