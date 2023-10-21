import React,{useState} from "react";
import Subheader from "../Subheader";
import Header from "../Header";
import Sidebar from "../UserProfile/Sidebar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Wishlist = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <Subheader />
      <div className="wrap-28">
        <div className="container">
          <div className="row bag-14">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 mt-5">
              <div className="bin-21">
                <div className="bin-22">
                  <p>My Wishlist (16)</p>
                </div>
              </div>
              <div className="bin-21 d-flex">
                <div className="bin-23">
                  <img
                    src="https://rukminim1.flixcart.com/image/312/312/ksyz8280/computer/8/v/i/cb-11igl05-thin-and-light-laptop-lenovo-original-imag6fh8sqpuk3ts.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="bin-24">
                  <p>
                    Lenovo IdeaPad 3 Chromebook Celeron Dual Core - (4 GB/64 GB
                    EMMC Storage/Chrome OS) ideapad 3 cb 11igl...
                  </p>
                  <div className="bin-25 d-flex gap-2">
                    <div class="gUuXy- _2D5lwg">
                      <span
                        id="productRating_LSTCOMG6AKVN3KXNVY2LCOHHL_COMG6AKVN3KXNVY2_"
                        class="_1lRcqv"
                      >
                        <div class="_3LWZlK">
                          3.5
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                            class="_1wB99o"
                          />
                        </div>
                      </span>
                      <span class="_2_R_DZ">(964)</span>
                    </div>
                    <div class="_3T5d8x">
                      <img
                        height="21"
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      />
                    </div>
                  </div>
                  <div class="_16qZvh mt-3">
                    <div class="_25b18c d-flex gap-4 align-items-center">
                      <div class="_30jeq3 _1qGLe2">₹16,990</div>
                      <div class="_3I9_wc _1eAROs">₹24,840</div>
                      <div class="_3Ay6Sb">
                        <span>31% off</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bin-27">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLjUuNWgxNXYxNWgtMTV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0MyQzJDMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMSAxMy44MzNjMCAuOTE3Ljc1IDEuNjY3IDEuNjY3IDEuNjY3aDYuNjY2Yy45MTcgMCAxLjY2Ny0uNzUgMS42NjctMS42Njd2LTEwSDF2MTB6bTEwLjgzMy0xMi41SDguOTE3TDguMDgzLjVIMy45MTdsLS44MzQuODMzSC4xNjdWM2gxMS42NjZWMS4zMzN6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt=""
                    onClick={handleShow}
                  />
                  {/* <button type="button" class="btn btn-lg" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click me to toggle Popover</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item Check</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Camcel
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Yes, Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Wishlist;
