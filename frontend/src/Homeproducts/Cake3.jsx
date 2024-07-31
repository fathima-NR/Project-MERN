import React from 'react'
import Navbar from '../component/Navbar'
import { FaShoppingCart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

function Cake3() {
    let Cake3 = [
        {cakeimg:'https://flowera.in/uploads/tempDir/2-kg-kitkat-cake-300X300.jpg',
            cakename:'Kitkat Cake',
            price:'850'
      
          },
          {cakeimg:'https://flowera.in/uploads/tempDir/Precious-Cake-1-300X300.jpg',
            cakename: 'Precious Cake',
            price:'750'
          },
          {cakeimg:'https://flowera.in/uploads/tempDir/Smoothy-Cake-300X300.png',
            cakename:'Delicious Kitty Cake',
        price:'800'       
      }
      

      
    ]
  return (
<>
<Navbar/>

<div>
<ul style={{ display: "flex", flexWrap: "wrap" }}>
            {Cake3.map((Cake3,index) => (
              <li className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
                
                  <div className="card mt-5" style={{ width: '15rem' }}>
                    <img src={Cake3.cakeimg} className="card-img-top" alt="Placeholder Image" />
                    <div className="card-body">
                      <h5 className="card-title">{Cake3.cakename}</h5>
                      <p className="card-text"><FaRupeeSign />{Cake3.price}/-  <span className='ms-5 fs-4 text-white bg-black p-1' style={{ borderRadius: 10 }}><FaShoppingCart /></span></p>
                      <p className='card-text fw-bold'>Earliest Delivery: <span className='text-success fw-bold'>Today</span></p>
                      <p className='card-text '><span><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></span> <span className='ms-2'> 233 reviews</span></p>
                    </div>
                  </div>
           
              </li>
            ))}
          </ul>
</div>
<div className='mt-5 mx-4'>
<h5 className='text-muted'>Order Lip Smacking Delicious Kitkat Cake From Flowera</h5>
<p className='mt-4'>
Who doesn't love Kitkat? How can someone think of denying a juicy, spongy, sweet delight, dipped in creamy milk? It is the most loved dessert that's enjoyed by 
all at special occasions and celebrations, but if rasmalai is on the dessert menu some day, the day itself becomes the occasion. But have you ever thought about  combining the delicious flavors of rasmalai with the indulgence of cake? trust us - it's a match made in dessert heaven.
</p>

A fluffy, moist cake that's infused with the sweet, creamy flavors of Kitkat - that's exactly what Rasmalai cake offers. The cake itself is typically a sponge cake, soaked in a mixture of sweetened milk and fragrant cardamom, which gives it a uniquely rich and indulgent taste. Then, it's layered with a creamy, smooth rasmalai filling, made from thickened milk, sugar, and soft, spongy rasmalai balls. Finally, it's topped with a generous layer of whipped cream and garnished with pistachios or other nuts for added texture and flavour.

<h5 className='text-muted mt-4'>Get Kitkat cake on every occasion online and indulge in its deliciousness forever</h5>
<p>One of the best things about Rasmalai cake is its versatility. It can be enjoyed as a dessert for special occasions like birthdays, weddings, and anniversaries, or simply as a treat to indulge in during a cozy evening at home. It's also a great way to introduce people to the delicious flavors of rasmalai who may not be familiar with the traditional dessert.</p>

<p>Another perk of Rasmalai cake is that it can be customized to suit your personal preferences. You can opt for a smaller, individual-sized cake or a larger one to serve a crowd. You can also adjust the sweetness and flavor profile to suit your liking - some people prefer a stronger cardamom flavor, while others might want to add a touch of saffron or rosewater for an extra hint of indulgence.</p>

<p>If you're a fan of Indian desserts and cakes, then Rasmalai cake is definitely worth trying. With its delicious combination of sweet, creamy, and indulgent flavors, it's sure to satisfy your cravings and leave you feeling thoroughly satisfied.</p>

</div>

</>
  )
}

export default Cake3