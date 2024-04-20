"use client"
import Slider from "react-slick";
import Slide1 from '../../public/learn.png'
import Slide2 from '../../public/learn2.webp'
import Slide3 from '../../public/hero5.PNG'
import Slide4 from '../../public/hero6.PNG'
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
        <Image src={Slide1} alt="" className='h-full w-full object-cover'/>
      </Link>
      <Link href={'/contact'}>
        <Image src={Slide2} alt="" className='w-full h-full object-cover'/>
      </Link>
      <Link href={'/contact'}>
        <Image src={Slide3} alt="" className='h-full w-full object-cover'/>
      </Link>
      <Link href={'/contact'}>
        <Image src={Slide4} alt="" className='w-full h-full object-cover'/>
      </Link>
     
          </Slider>
     
    
    </div>
  )
}

export default HeroSection
