import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import Navbar from './Navbar';
import { Link } from 'react-router-dom'


export const SingleProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  console.log(product);

  const [weight, setWeight] = useState('0.5'); // Defaulting to 0.5 kg
  const [cakeName, setCakeName] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [timeSlot, setTimeSlot] = useState('morning');

  useEffect(() => {
    axios.get(`http://localhost:8000/SingleProduct/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log("Error fetching single product:", error);
      });
  }, [id]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Prepare data object to send to backend or for local processing
    const formData = {
      weight,
      cakeName,
      deliveryPincode,
      deliveryDate,
      shippingMethod,
      timeSlot,
      Imgurl:product.ImgUrl,
      Name:product.CakeName,
      price:product.Price
    };
    // Example: Log form data to console
    console.log("Form Data:", formData);

    // Example: Send data to backend (you can modify this as per your backend API)
    axios.post('http://localhost:8000/Addtocart', formData)
      .then((response) => {
        console.log("Successfully added to cart:", response.data);
        // Optionally, perform additional actions after successful addition
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        // Handle error scenarios
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
  <>
  <Navbar/>
    <div className="container mt-3">
      <div className="row ">
        <div className="col-lg-6">
          <img src={product.ImgUrl} className="img-fluid" alt="Product" width={700} style={{position:'sticky',top:"10px"}}/>
         <p className='text-muted'>Disclaimer: Image is for representation only. Actual product design and icing may vary based on local availability.</p>
          </div>
          
        <div className="col-lg-6">
          <div>
            <h2 className='text-start fw-bold' style={{ color: '#6C0345' }}>{product.CakeName}</h2>
            <p className='card-text '><span><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></span> <span className='ms-2'> 233 reviews</span></p>
            <h1 className='fw-bold'><FaRupeeSign />{product.Price}/-</h1>
            <p className='text-muted'>inclusive of all taxes</p>
          </div>
          <div className="mt-4">
            <h4 className='text-start fw-bold' style={{ color: '#6C0345' }}>Customize Your Product</h4>
            <form onSubmit={handleAddToCart}>
              <div className='border border-dark mt-4 p-3' style={{ borderRadius: 10 }}>
                <h5 className='text-start fw-bold pt-2 ps-3' style={{ color: '#6C0345' }}>Customize Your Weight</h5>
                <div className="d-flex mt-2">
                  <label className='fw-bold'><input className='ms-2 ' type="radio" name="weight" value="0.5" checked={weight === '0.5'} onChange={(e) => setWeight(e.target.value)} /> 0.5 kg</label>
                  <label className='fw-bold'><input className='ms-2' type="radio" name="weight" value="1" checked={weight === '1'} onChange={(e) => setWeight(e.target.value)} /> 1 kg</label>
                  <label className='fw-bold'><input className='ms-2' type="radio" name="weight" value="2" checked={weight === '2'} onChange={(e) => setWeight(e.target.value)} /> 2 kg</label>
                </div>
              </div>
              <div className='border border-muted mt-4 p-3' style={{ borderRadius: 5 }}>
                <input type="text" className="form-control mt-2" id="cake-name" name="cake-name" value={cakeName} onChange={(e) => setCakeName(e.target.value)} placeholder="Name On The Cake" required />
              </div>
              <div className='border border-muted mt-4 p-3'>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" id="delivery-pincode" name="delivery-pincode" value={deliveryPincode} onChange={(e) => setDeliveryPincode(e.target.value)} placeholder="Enter Delivery Pincode" required/>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="date" className="form-control" id="delivery-date" name="delivery-date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} placeholder="Select Delivery Date" aria-describedby="calendar-icon" required />
                      
                    </div>
                  </div>
                  <div className="col-md-6">
                    <select className="form-select" id="shipping-method" name="shipping-method"  value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}placeholder="Shipping method"  required >
                      <option value="standard">Free Delivery</option>
                      <option value="express">Fixed Time Delivery (Rs.45/-)</option>
                      <option value="same-day">Mid Night Delivery (Rs.199/-)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select className="form-select" id="time-slot" name="time-slot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} placeholder="Select Time Slot">
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 3pm)</option>
                      <option value="evening">Evening (3pm - 6pm)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                 
                  <button className='btn btn-warning btn-lg fw-bold fs-5 p-2 d-block mx-auto w-100' type="submit">
                    Add To Cart
                  </button>
                  
                  
                </div>
              </div>
            </form>
            {/* for describtion */}
            <div>
              <h4  className='text-start fw-bold' style={{ color: '#6C0345' }}>Product Description:</h4>

               <p>
                  {product.Desc}
               </p>
            </div>
          </div>
        </div>
      </div>
      <div>

      <p className='text-muted mt-3'style={{fontSize:11}}>Disclaimer: Image is for representation only. Actual product design and icing may vary based on local availability.</p>
      </div>
      {/* refunt botton */}

   <div className="mt-4">
  <button className="btn btn-warning mx-auto w-40 d-flex justify-content-center fw-bold ">Refund &amp; Delivery Policy</button>
</div>
<hr />
{/* description for refund */}
<div className='mt-5'>
  <h5 className='text-muted'>Returns and Refunds:</h5>
 <p>Refunds are allowed only under the following conditions:</p>
 <ul>
  <li>Mismatch or defective product delivery.</li>
  <li>If the order is cancelled from our side.</li>
  <li>Refunds will not be issued if the receiver denies accepting the order.</li>
  </ul>
  <h5 className='text-muted'>Cancellation:</h5>
  <p>Orders can be cancelled up to 24 hours before the scheduled delivery time. In case of an emergency, please contact us at care@flowera.in.</p>
  <h5 className='text-muted'>Product Variations:</h5>
  <p>Minor changes in the product are not considered as product changes. As these are handmade products, slight variations from the images may occur</p>
  <h5 className='text-muted'>Refund Process:</h5>
  <p>Online refunds will be processed through the same payment method used by the customer. Refunds may take 7-10 business days to reflect in your account.</p>
  <h5 className='text-muted'>Policy Changes:</h5>
  <p>Flowera reserves the right to change the Refund and Cancellation Policy at any time.

For any questions regarding our Refund and Cancellation Policy, please reach out to us at care@flowera.in</p>
</div>
    </div>

    </>
  );
};
