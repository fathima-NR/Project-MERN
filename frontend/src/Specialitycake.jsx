import React from 'react'
import Navbar from './component/Navbar';
function Specialitycake() {

  let Scake = [
{
cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/AfterNineCake2Large.webp',
cakename:'After Nine Cake'

},{
cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Chocolate_Nougatine_Cake_3_Large_6b24a6e7-df97-44cb-bd7f-8875ca6b9c31.webp',
cakename:'Almond Nougatine Cake'

},
{
cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Cappuccino_Cake_3_Large_29fb614e-7145-4c47-9eeb-9eeab5cd8cc9.webp',
cakename:'Cappuccino Cake'

},
{
  cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/CarrotCake3Large.webp',
  cakename:'Carrot Cake'
  
  },
  {
    cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/ChocolatemousseCake3Large.webp',
    cakename:'Chocolate Mousse Cake'
    
    },
    {
      cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Chocolate_Oreo_Cake_2_Large_c4138f7d-1958-44d2-a1a2-77053aaef51b.webp',
      cakename:'Chocolate Oreo Cake'
      
      },
      {
        cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Dense_Loaf_Truffle_Cake_2_Large_75eb11a2-2fb6-4468-a706-187a01ebeef2.webp',
        cakename:'Dense Loaf Truffle Cake'
        
        },
        {
          cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Freshfruitandcreamcake1.webp',
          cakename:'Fresh Fruit & Cream Cake'
          
          },
          {
            cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Lemon_mountain_Cake_1_Large_9b7a4b19-1ee3-4d24-995c-a0be99f5f4d4.webp',
            cakename:'Lemon Mountain Cake'
            
            },
            {
              cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/NYBakedCheeseCake2Large.webp',
              cakename:'New York Style Baked Cheesecake'
              
              },
              {
                cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Opera_Cake_2_Large_1f547d58-0b32-4840-91d5-488cd09abc96.webp',
                cakename:'Opera Cake'
                
                },
                {
                  cakeimg:'https://raw.githubusercontent.com/fathima-NR/Project-MERN/assets/Tiramisu_Cake_1_Large_0387576f-5fdf-4ff8-bb91-cf5138ec8b6f.webp',
                  cakename:'Tiramisu Cake'
                  
                }
 ]
  return (


  <>
  <Navbar/>
 <div style={{backgroundColor:"#fff0f7"}}>
<h1 className='text-center fw-bold fs-1 p-3'style={{color:"#6C0345",fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>Speciality Cakes</h1>
<p className='text-center lh-lg pb-4'style={{letterSpacing:"2px"}}>Our made-to-order range of speciality cakes is here to make any celebration great! <br /> From Theobroma classic cakes to gourmet cakes to customized theme cakes, <br /> we have something for every special occasion.</p>
 </div>
<div className="row ms-3">
  {Scake.map((scake,index)=>(

<div className="col-sm-3 mt-5 ">
<img className='img-fluid' src={scake.cakeimg} alt="" />
<h5 className='text-center mt-4 mb-3' style={{color:'#6C0345'}}>{scake.cakename}</h5>
</div>

  ))}

</div>
  </>
  )
}

export default Specialitycake 