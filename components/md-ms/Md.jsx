import React from 'react'
import Image from "next/image";
import Y1 from '../../public/yeye.png'

const Md = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-0 gap-5'>
<div className='lg:w-[50%] w-full justify-start items-start flex flex-col gap-4'>
    <h3 className='lg:text-[40px] text-[20px] text-black tracking-wide font-bold'>“MD/MS in India”: Advancing Medical Expertise and Career Opportunities</h3>
    <p className='text-[16px] font-medium'>Advance your medical career with MD/MS in India. Gain specialized expertise, advanced training, and diverse clinical exposure to excel in your chosen field.</p>
    <button className='bg-[#000000] rounded-full tracking-wide px-6 py-3 text-white text-[20px] font-medium'>Know More</button>
</div>
<div className='lg:w-[50%] w-full'>
    <div>
        <Image src={Y1} alt='' className='w-full h-full object-cover'/>
    </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Md
