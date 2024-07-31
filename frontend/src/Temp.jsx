import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home1';
import CakeForm from './CakeForm';
import About from '../src/about/About';
import Product from './Product';
import Footer1 from './component/Footer1';
import Navbar from './component/Navbar';
import ContactForm from './ContactForm';
import Specialitycake from './Specialitycake';
import { DetaileProd } from './component/DetaileProd';
import { SingleProduct } from './component/SingleProduct';
import { Cart } from './component/Cart';
import Checkout from './component/Checkout';
import ASCF from './ASCF';
import Cake1 from "../src/Homeproducts/Cake1"
import Cake2 from "../src/Homeproducts/Cake2"
import Cake3 from "../src/Homeproducts/Cake3"
import Cake4 from "../src/Homeproducts/Cake4"
import Cake5 from "../src/Homeproducts/Cake5"
export const Temp = () => {
  const [total, setTotal] = useState(0);
  const [CartData, setCartData] = useState([]);

  const Total = (newTotal) => {
    setTotal(newTotal);
  };

  const CartProduct = (CartD) => {
    setCartData(CartD);
  };

  useEffect(() => {
    if (CartData && CartData.length > 0) {
      CartData.forEach(({ Name }) => console.log("name", Name));
    }
  }, [CartData]);

  console.log(total);
  console.log(CartData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cake1" element={<Cake1 />}/>
          <Route path="/Cake2" element={<Cake2 />}/>
          <Route path="/Cake3" element={<Cake3 />}/>
          <Route path="/Cake4" element={<Cake4 />}/>
          <Route path="/Cake5" element={<Cake5 />}/>
          <Route path="/CF" element={<CakeForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Dp/:category" element={<DetaileProd />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart Total={Total} CartProduct={CartProduct} />} />
          <Route path="/checkout" element={<Checkout total={total} CartProduct={CartData}/>} />
          <Route path="/Dp/:category/ASCF" element={<ASCF />} />
          <Route path="/Specialitycake" element={<Specialitycake />} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </>
  );
};
