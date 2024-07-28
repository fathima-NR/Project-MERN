import React from 'react';
import OrderSuccessModal from './OrderSuccessModal';
import Navbar from '../component/Navbar';

function Checkout({ total, CartProduct }) {

  console.log(CartProduct);

  return (
    <>
      <Navbar />
      <h5 className="text-start fw-bold ms-3">Receiver details</h5>
      <div className="row ms-2">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Receiver's Name *
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" />
                  </div>
                  <div className="col-md-6">
                    <form action="">
                      <label htmlFor="name" className="form-label">
                        Contact Number *
                      </label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <input type="text" className="form-control" style={{ maxWidth: 60 }} placeholder="+91" />
                        </div>
                        <input type="text" className="form-control" placeholder="Enter your mobile number" />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Receiver's Country *
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Receiver's Pin Code *
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Receiver's State *
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Receiver's Town/City *
                    </label>
                    <input type="text" className="form-control" id="phone" placeholder="" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea className="form-control" id="address" rows="4" placeholder="Enter your address" required></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-3">
            <h5 className="text-start fw-bold">Sender Details</h5>
            <div className="card">
              <div className="card-body" style={{ backgroundColor: "#fff0f7" }}>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input type="text" className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Email id *
                      </label>
                      <input type="text" className="form-control" id="phone" placeholder="E-mail" />
                    </div>
                    <div className="col-md-6">
                      <form action="">
                        <label htmlFor="name" className="form-label">
                          Contact Number *
                        </label>
                        <div className="input-group input-group-sm">
                          <div className="input-group-prepend">
                            <input type="text" className="form-control" style={{ maxWidth: 60 }} placeholder="+91" />
                          </div>
                          <input type="text" className="form-control" placeholder="Enter your mobile number" />
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Town/City *
                      </label>
                      <input type="text" className="form-control" id="phone" placeholder="" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card" style={{ backgroundColor: "#fff0f7" }}>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th className="fs-5" style={{ backgroundColor: "#fff0f7" }}>
                      PRODUCT
                    </th>
                    <th className="fs-5" style={{ backgroundColor: "#fff0f7" }}>
                      AMOUNT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CartProduct.map((product, index) => (
                    <tr key={index}>
                      <td className="fw-bold">{product.Name}</td>
                      <td  className="fw-bold">{product.price}/-</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="fw-bold">Total</td>
                    <td  className="fw-bold">{total}/-</td>
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
              <form>
               
                <div className="form-check ">
                  <input className="form-check-input" type="radio" name="paymentMethod" id="cod" defaultValue="cod" required />
                  <label className="form-check-label fw-bold" htmlFor="cod">
                    Cash on Delivery (COD)
                  </label>
                </div>
              </form>
              <h6 className="mt-4 fw-bold">Pay via UPI, Net Banking, Debit Card, Credit Card and Wallets</h6>
              <p className="mt-2">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <br />{' '}
                <a href="">privacy policy</a>
              </p>
              <OrderSuccessModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
