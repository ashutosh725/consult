"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'
const technologiesList =[
    {
       
        img: '/Nepal-Flag.png'
    },
    {
      
        img: '/Russia-Flag.png'
    },
    {
        
        img: '/Poland-Flag.png'
    },
    {
       
        img: '/Uzbekistan-.png'
    },
    {
        
        img: '/ok.png'
    },
    {
        
        img: '/Philippines.png'
    },
    {
       
        img: '/Bangladesh.png'
    },
    {
      
      img: '/flag-map-of-india-logo-C048427F9D-seeklogo.com_.png'
  },
  
    
    
]
const Fslider = () => {
    const settings = {
      
        infinite: true, // Set to true for infinite loop
        speed: 500,
        dots: true,
        arrows: false,
        slidesToShow: 4,
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
    <div className=''>
      <Slider {...settings}>
            {technologiesList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start py-10 px-10 cursor-pointer"
                  style={{ margin: '0 10px' }} 
                >
                  <div className='flex justify-center items-center'>
                    <Image src={item.img} width={120} height={85} alt='' className='object-cover' />
                  </div>
                 
                </div>
              );
            })}
          </Slider>
    </div>
  )
}

export default Fslider
