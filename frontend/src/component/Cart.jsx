import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { MdDelete } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Cart = ({Total, CartProduct}) => {
  const [cakeInfo, setCakeInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  CartProduct(cakeInfo)

  useEffect(() => {
    axios.get("http://localhost:8000/Cart")
      .then((res) => {
        setCakeInfo(res.data);
         // Call CartProduct after data is fetched
      })
      .catch((e) => {
        console.log("Error To Fetch Cart Data!", e);
      });
  }, []);

  const handleClose = () => setShowModal(false);

  const fetchCartData = () => {
    axios.get("http://localhost:8000/Cart")
      .then((res) => {
        setCakeInfo(res.data);
        // Call CartProduct after data is fetched
      })
      .catch((e) => {
        console.log("Error To Fetch Cart Data!", e);
      });
  };

  const DeleteCart = (id) => {
    axios.delete("http://localhost:8000/deletecard", {
      data: { Pid: id }
    })
    .then((res) => {
      setModalMessage('Cart item removed successfully');
      setShowModal(true);
      fetchCartData(); // Refresh the cart data
    })
    .catch((e) => {
      setModalMessage('Error in removing cart item');
      setShowModal(true);
      console.log("Error to Failed", e);
    });
  }

  if (!cakeInfo || cakeInfo.length === 0) {
    return <div>Loading...</div>;
  }

  const totalPrice = cakeInfo.reduce((sum, cd) => sum + parseFloat(cd.price), 0);
  Total(totalPrice);

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#F6F5F5' }}>
        <div className="row ms-1">
          <div className="col-lg-7">
            <div className="card mt-3 border-0">
              <div className="body">
                <div className="card-title text-center fs-3 p-3 fw-bold ">
                  Shopping Cart
                </div>
              </div>
            </div>
            {cakeInfo.map((cd, index) => (
              <div className="card mt-2 border-0" key={index}>
                <div className="row ">
                  <div className="col-lg-3  m-3">
                    <img src={cd.Imgurl} alt="Cake" className='img-fluid' />
                  </div>
                  <div className="col-lg-5 mt-4">
                    <h6 className='fw-bold'>{cd.Name}</h6>
                    <h6 className='fw-bold'>{cd.price}/-  {cd.weight}kg </h6>
                    <h6 className='fw-bold'>Name On Cake:<span className='fw-normal'>{cd.cakeName} </span></h6>
                    <h6 className='fw-bold'>Delivery: <span className='fw-normal'>{cd.deliveryDate}</span></h6>
                    <h6 className='fw-bold'>Shipping Method <span className='fw-normal'>{cd.shippingMethod}</span></h6>
                    <h6 className='fw-bold'>Time: <span className='fw-normal'>{cd.timeSlot}</span></h6>
                  </div>
                  <div className="col-lg-3 mt-3 ms-3" >
                    <MdDelete onClick={() => DeleteCart(cd._id)} />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="col-lg-4 mt-3">
            <div className="card border-0">
              <div className="card-body">
                <form action="">
                  <div>
                    <input type="text" id="inputField" name="inputField" placeholder='Enter The Coupon Code' />
                    <button className='btn btn-warning btn-sm mb-1 ms-1' type="submit">Apply</button>
                    <p className='fs-6'>Get More Discounts Login / Register Now</p>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <div className="card mt-3 border-0">
                <div className="card-title">
                  <h3 className='text-start p-2 ms-3 fw-bold' style={{ color: '#6C0345' }}>Summary</h3>
                  <div className="card-body ms-2">
                    <h6>Subtotal: {totalPrice}/-</h6>
                    <h6>Total: {totalPrice}/-</h6>
                    <form action="">
                     <Link  to="/checkout" className='text-decoration-none'>
                     <button className='btn btn-warning btn-lg fw-bold fs-6 p-2 mt-3 rounded-3 d-block mx-auto w-100' type="submit">
                          CHECK OUT
                        </button>
                     </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card mt-4 border-0">
                <div className="card-body">
                  <h5 className='fw-bold'>Pay With</h5>
                </div>
                <hr />
                <p className='text-muted p-3'>Get full support if the item is not as described or if it is not delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
