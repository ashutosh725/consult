"use client"
import Slider from "react-slick";
import Slide1 from '../../public/hero1.jpg'
import Slide2 from '../../public/hero2.jpg'
import Slide3 from '../../public/hero3.jpg'
import Slide4 from '../../public/hero4.jpg'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroSection = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000,
        arrows: false,
      };
  return (
    <div className='mx-auto '>
          <Slider {...settings}>
          <div>
        <Image src={Slide1} alt="" className='w-full h-full object-cover'/>
      </div>
      <div>
        <Image src={Slide2} alt="" className='w-full h-full object-cover'/>
      </div>
      <div>
        <Image src={Slide3} alt="" className='w-full h-full object-cover'/>
      </div>
      <div>
        <Image src={Slide4} alt="" className='w-full h-full object-cover'/>
      </div>
          </Slider>
     
    
    </div>
  )
}

export default HeroSection
