 
 'use client';
 import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
 import Image from 'next/image'
 import React from 'react'
 
 
 const technologiesList =[
     {
         id: 1,
        
         img: '/C1.jpg'
     },
     {
         id: 2,
      
         img: '/C2.jpg'
     },
     {
         id: 3,
       
         img: '/C3.jpg'
     },
     {
         id: 4,
         
         img: '/C4.jpg'
     },
     {
         id: 5,
       
         img: '/C5.jpg'
     },
     {
         id: 6,
       
         img: '/C6.jpg'
     },
     {
         id: 7,
       
         img: '/C7.jpg'
     },
     {
       id: 8,
       
       img: '/C8.jpg'
   },
   {
       id: 9,
     
       img: '/C9.jpg'
   },
   {
       id: 10,
      
       img: '/C10.jpg'
   },
    
   {
     id: 11,
    
     img: '/C11.jpg'
 },
 {
     id: 12,
  
     img: '/C12.jpg'
 },

     
     
 ]
 
 const CountrySlider = () => {
     const settings = {
       
         infinite: true, // Set to true for infinite loop
         speed: 500,
         slidesToShow: 6,
         slidesToScroll: 1,
         initialSlide: 0,
         autoplay: true, // Enable autoplay
         autoplaySpeed: 1000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
               infinite: true,
             
             },
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               initialSlide: 1,
             },
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
             },
           },
         ],
       };
   return (
     <div className={`bg-transparent rounded-[20px] shadow-2xl my-16 `}>
     <div className='container py-4 mx-auto'>
       <div className='flex justify-center items-center'>
         <div className='lg:w-[1024px] md:w-[768px] xl:w-[1280px] w-full overflow-hidden mx-auto'>
           <Slider {...settings}>
             {technologiesList.map((item, index) => {
               return (
                 <div
                   key={index}
                   className="flex flex-col justify-start items-start py-6 px-6 cursor-pointer"
                   style={{ margin: '0 10px' }} 
                 >
                   <div className='flex justify-center items-center'>
                     <Image src={item.img} width={90} height={90} alt='' className='object-cover' />
                   </div>
                  
                 </div>
               );
             })}
           </Slider>
         </div>
       </div>
     </div>
   </div>
   
   )
 }
 
 export default CountrySlider
 