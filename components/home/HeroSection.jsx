"use client"
import Slider from "react-slick";
import Slide1 from '../../public/hero5.png'
import Slide2 from '../../public/hero6.png'

import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const HeroSection = () => {
    var settings = {
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
          <Link href={'/contact'}>
        <Image src={Slide1} alt="" className='w-[1349px] h-[800px] object-cover'/>
      </Link>
      <Link href={'/contact'}>
        <Image src={Slide2} alt="" className='w-full h-full object-cover'/>
      </Link>
     
          </Slider>
     
    
    </div>
  )
}

export default HeroSection
