import React from 'react'
import { FaStar } from "react-icons/fa";

const HeroBanner = ({title, links}) => {
  return (
    <div className='bg-[#4a1e75] py-16' >
      <div className='container mx-auto'>
        <div className='flex flex-col justify-start items-start gap-4'>
            <h2 className='font-Jost md:text-[35px] text-[25px] font-[500] text-white'>{title}</h2>
            <p className='text-[#ffda00] font-[500] md:text-[18px] text-[16px] tracking-wide font-Poppins'>{links}</p>
            <div className='flex gap-1'>
                <FaStar className='text-[#ffda00] text-[16px] font-bold'/>
                <FaStar className='text-[#ffda00] text-[16px] font-bold'/>
                <FaStar className='text-[#ffda00] text-[16px] font-bold'/>
                <FaStar className='text-[#ffda00] text-[16px] font-bold'/>
                <FaStar className='text-[#ffda00] text-[16px] font-bold'/>
            </div>
            <p className='text-[#ffda00] font-[500] text-[15px] tracking-wide font-Poppins'>355 Ratings</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
