import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is imported
import Navbar from '../component/Navbar';

function Checkout({ total, CartProduct }) {
  // State for form inputs
  const [receiverName, setReceiverName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [country, setCountry] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [senderCity, setSenderCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showModal, setShowModal] = useState(false); // For managing modal visibility

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const paymentForm = {
      receiverName,
      contactNumber,
      country,
      pinCode,
      state,
      city,
      address,
      senderName,
      senderEmail,
      senderContact,
      senderCity,
      paymentMethod,
      total,
      CartProduct,
    };

    axios
      .post("http://localhost:8000/orderdetails", paymentForm)
      .then((res) => {
        console.log(res.data);
        console.log("orderdetails successfully posted");
        setShowModal(true); // Show modal on successful submission
      })
      .catch((e) => {
        console.log("error occurred ", e);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h5 className="text-start fw-bold ms-3">Receiver details</h5>
        <form onSubmit={handleSubmit}>
          <div className="row ms-2">
            {/* Form Fields for Receiver and Sender details */}
            <div className="col-lg-6">
              {/* Receiver Details */}
              <div className="card">
                <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                  <div className="row mb-3">
                    {/* Receiver's Name */}
                    <div className="col-md-6">
                      <label htmlFor="receiverName" className="form-label">Receiver's Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="receiverName"
                        placeholder="Full Name"
                        value={receiverName}
                        onChange={(e) => setReceiverName(e.target.value)}
                        required
                      />
                    </div>
                    {/* Contact Number */}
                    <div className="col-md-6">
                      <label htmlFor="contactNumber" className="form-label">Contact Number *</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <input
                            type="text"
                            className="form-control"
                            style={{ maxWidth: 60 }}
                            placeholder="+91"
                            value={contactNumber.slice(0, 3)}
                            onChange={(e) => setContactNumber(e.target.value)}
                          />
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your mobile number"
                          value={contactNumber.slice(3)}
                          onChange={(e) => setContactNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {/* Country */}
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Receiver's Country *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>
                    {/* Pin Code */}
                    <div className="col-md-6">
                      <label htmlFor="pinCode" className="form-label">Receiver's Pin Code *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pinCode"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        required
                      />
                    </div>
                    {/* State */}
                    <div className="col-md-6">
                      <label htmlFor="state" className="form-label">Receiver's State *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    {/* City */}
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">Receiver's Town/City *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    {/* Address */}
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows="4"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sender Details */}
              <div className="mt-3">
                <h5 className="text-start fw-bold">Sender Details</h5>
                <div className="card">
                  <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                    <div className="row mb-3">
                      {/* Sender's Name */}
                      <div className="col-md-6">
                        <label htmlFor="senderName" className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="senderName"
                          placeholder="Full Name"
                          value={senderName}
                          onChange={(e) => setSenderName(e.target.value)}
                          required
                        />
                      </div>
                      {/* Sender's Email */}
                      <div className="col-md-6">
                        <label htmlFor="senderEmail" className="form-label">Email id *</label>
                        <input
                          type="email"
                          className="form-control"
                          id="senderEmail"
                          placeholder="E-mail"
                          value={senderEmail}
                          onChange={(e) => setSenderEmail(e.target.value)}
                          required
                        />
                      </div>
                      {/* Sender's Contact */}
                      <div className="col-md-6">
                        <label htmlFor="senderContact" className="form-label">Contact Number *</label>
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <input
                              type="text"
                              className="form-control"
                              style={{ maxWidth: 60 }}
                              placeholder="+91"
                              value={senderContact.slice(0, 3)}
                              onChange={(e) => setSenderContact(e.target.value)}
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your mobile number"
                            value={senderContact.slice(3)}
                            onChange={(e) => setSenderContact(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      {/* Sender's City */}
                      <div className="col-md-6">
                        <label htmlFor="senderCity" className="form-label">Town/City *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="senderCity"
                          value={senderCity}
                          onChange={(e) => setSenderCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary and Payment Methods */}
            <div className="col-lg-6">
              <div className="card" style={{ backgroundColor: "#fff0f7" }}>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="fs-5" style={{ backgroundColor: "#fff0f7" }}>PRODUCT</th>
                        <th className="fs-5" style={{ backgroundColor: "#fff0f7" }}>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CartProduct.map((product, index) => (
                        <tr key={index}>
                          <td className="fw-bold">{product.Name}</td>
                          <td className="fw-bold">{product.price}/-</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="fw-bold">Total</td>
                        <td className="fw-bold">{total}/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-title fs-5 p-3 fw-bold" style={{ backgroundColor: "#fff0f7" }}>
                  PAYMENT METHODS
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="cod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                    />
                    <label className="form-check-label fw-bold" htmlFor="cod">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <h6 className="mt-4 fw-bold">Pay via UPI, Net Banking, Debit Card, Credit Card and Wallets</h6>
                  <p className="mt-2">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <br />{' '}
                    <a href="">privacy policy</a>
                  </p>
                  <div className="text-center mt-3">
                    <button type='submit' className="btn btn-warning btn-lg w-50">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {showModal && (
          <div className="modal fade show" id="orderSuccessModal" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="orderSuccessModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="orderSuccessModalLabel">Order Successful</h3>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Your order has been successfully placed.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning" onClick={() => setShowModal(false)}>Continue Shopping</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
