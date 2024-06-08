"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
const Latest = () => {
  return (
    <div className='bg-secondary text-white'>
        <div className='flex'>
<div>
    <button className='bg-primary w-[160px] text-[16px] font-semibold font-Poppins flex justify-center items-center  py-3 px-7 text-secondary'> Latest News</button>
</div>
<Marquee>
            <h3 className='text-primary pr-5'>Nscx Education is is a Medical Education Consultancy </h3>
            <h3 className='text-primary pr-5'>Nscx Education is is a Medical Education Consultancy </h3> <h3 className='text-primary pr-5'>Nscx Education is is a Medical Education Consultancy </h3>
        </Marquee>
        </div>
       
    </div>
  )
}

export default Latest
