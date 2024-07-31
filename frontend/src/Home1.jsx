import React from 'react'
import Navbar from './component/Navbar'
import "../src/home.css"
import { Link } from 'react-router-dom'
import Childcomponent from './about/Childcomponent';
import CardRow from './CardRow';

function Home() {
//  let cakecard = [
// {
// cakeimg: 'https://flowera.in/uploads/tempDir/dessscM_06_6662e686bf80b-350X400.jpg',
// cakename:'DESIGNER CAKES'
// },
// {
//   cakeimg: 'https://flowera.in/uploads/tempDir/rassscM_06_6662dd87a8be5-350X400.jpg',
//   cakename:'RASAMALAI CAKES'
//   },
// {
//   cakeimg: 'https://flowera.in/uploads/tempDir/birsscM_06_6662de2704c15-350X400.jpg',
//   cakename:'BIRTHDAY CAKES'
//     },
// {
//   cakeimg: 'https://flowera.in/uploads/tempDir/annsscM_06_6662ea35cf21e-350X400.jpeg',
//   cakename:'ANNIVERSARY CAKES'
//       },
// {
//   cakeimg: 'https://flowera.in/uploads/tempDir/chosscM_06_6662f255c8cb6-350X400.jpg',
//   cakename:'CHOCOLATE TRUFFLE'
//       },
//       {
//         cakeimg: 'https://flowera.in/uploads/tempDir/rassscM_06_6662dd87a8be5-350X400.jpg',
//         cakename:'RASAMALAI CAKES'
//         }
// ]
// console.log(cakecard);
  return (
    <>
    <Navbar/>
      <div className='home'>
    <img src="https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/BannerImg_06_1719231380-1913X692.webp" alt=""  className='img-fluid homeimg'/>
   </div>
   
   <div style={{backgroundColor:'#fff0f7'}}>
   <div className="container " >
    <h3 className='text-center fw-bold p-4' style={{color:'#6C0345'}}>Best selling Cakes</h3>
  <div className="row align-items-center justify-content-center">
   
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 mb-4">
        <Link to="/Cake1" className='text-decoration-none' >
        <div className="card card1 mt-3">
          <img className="card-img-top img-fluid cakeimg-home" src="https://flowera.in/uploads/tempDir/rassscM_06_6662dd87a8be5-350X400.jpg" alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:14,fontWeight:900}} >Rasamalai Cake</h6>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 mb-4">
      <Link to="/Cake2" className='text-decoration-none' >
        <div className="card card1 mt-3">
          <img className="card-img-top img-fluid cakeimg-home" src="https://flowera.in/uploads/tempDir/chosscM_06_6662f255c8cb6-350X400.jpg" alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:14,fontWeight:900}} >Chocolate Truffle</h6>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 mb-4">
      <Link to="/Cake3" className='text-decoration-none' >
        <div className="card card1 mt-3">
          <img className="card-img-top img-fluid cakeimg-home" src="https://flowera.in/uploads/tempDir/2-kg-kitkat-cake-300X300.jpg" alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:14,fontWeight:900}} >KitKat Cake</h6>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 mb-4">
      <Link to="/Cake4" className='text-decoration-none' >
        <div className="card card1 mt-3">
          <img className="card-img-top img-fluid cakeimg-home" src="https://flowera.in/uploads/tempDir/Designer-football-cake-300X300.jpg" alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:14,fontWeight:900}} >Designer Cake</h6>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 mb-4">
      <Link to="/Cake5" className='text-decoration-none' >
        <div className="card card1 mt-3">
          <img className="card-img-top img-fluid cakeimg-home" src="https://flowera.in/uploads/tempDir/dessscM_06_6662e686bf80b-350X400.jpg" alt="Cake" />
          <div className="card-body">
            <h6 className="card-title text-center "style={{fontSize:14,fontWeight:900}} >Designer Cake</h6>
          </div>
        </div>
        </Link>
      </div>
   
  </div>
</div>
</div>
{/* safety,delivery */}
<div className='mt-5'>
<div className="row mt-5 ">
  <div className="col-sm-3  d-flex flex-column align-items-center justify-content-center"> < img src="https://flowera.in/uploads/tempDir/higPoint051715953717-200X200.png" alt="" width={60} className=''/>
    <h5 className=' text-center fw-bold '> Safety And Hygiene</h5>
    <p className='text-center ms-3'style={{fontSize:14}} > Our Bakery & Florist shop takes complete control over safety and hydgeine. We also follow proper covid safety guidelines.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">

<img src="https://flowera.in/uploads/tempDir/higPoint051715953701-200X200.png" alt="" width={60} />


    <h5 className='text-center fw-bold '>Express 3 Hour Delivery</h5>
    <p className='text-center ms-3'style={{fontSize:14}}>Get Flowers,cakes, gifts,chocolate same-day delivery in 3 hours. We guarantee ontime delivery.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">
  
<img src="https://flowera.in/uploads/tempDir/higPoint051715953686-200X200.png" alt="" width={60} />


    <h5 className= ' text-center fw-bold'>Delivery In 500+ Cities</h5>
    <p className='text-center ms-3'style={{fontSize:14}}>We bet, you will have the best experience of flowers & cakes in more the 600 cities in India.</p>
  </div>
  <div className="col-sm-3 d-flex flex-column align-items-center justify-content-center">

  <img src="https://flowera.in/uploads/tempDir/higPoint051715953671-200X200.png" alt=""width={60}/>

    <h5 className='text-center fw-bold'>Midnight Delivery</h5>
    <p className='text-center ms-3' style={{fontSize:14}}>Surprise your loved one with our reliable midnight flower delivery services.</p>
  </div>
</div>

</div>
{/* cakeproducts */}
{/* <div style={{backgroundColor:'pink'}}>
<h3 className='text-center fw-bold p-4' style={{color:'#6C0345'}}>Featured Products</h3>
  <Cakemenu/>
  
  </div> */}


{/* FEATURED PRODUCTS */}
<div style={{backgroundColor:'#fff0f7'}}><CardRow/></div>


{/* cake card */}




</>

  
  )
}

export default Home