import Link from 'next/link'
import React from 'react'
import Hero from '../../public/herosection1.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='bg-secondary text-white md:h-[580px] h-full py-10 flex justify-center items-center' >
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center'>
          <div className='w-full md:w-[50%] '>
<div className='flex flex-col justify-center lg:items-start items-center gap-5'>
<h5 className='text-primary md:text-[20px] text-[18px] font-Poppins text-start font-semibold tracking-wide'>{`India's No 1 Smartest Counselling Platform`}</h5>
            <h1 className='md:text-[40px] text-[25px] font-Jost text-start  font-bold leading-[45px]'>{`Study MBBS, MD/MS, BDS, MDS And Other Medical Courses`}</h1>
            <h2 className=' text-[20px] font-Poppins md:font-bold font-medium tracking-wide'>{`Build Career In Medical Profession`}</h2>
</div>
<div className='flex justify-start flex-col lg:flex-row  lg:items-center gap-7 my-16'>
  <div>
    <input type='text' placeholder='Enter your email' className='placeholder:text-primary bg-transparent outline-none w-full border-b-2 border-b-primary py-3'/>
  </div>
  <div >
        <Link href={'/contact'} className='text-[18px] font-Jost tracking-wide rounded-ss-[20px] rounded-br-[20px] font-bold text-[#4a1e75] border-[1px] border-[#4a1e75] md:py-[20px] md:px-[40px] py-[16px] px-[32px] bg-primary hover:bg-transparent hover:border-primary hover:text-white shadow-xl'>Contact Us</Link>
      </div>
</div>
          </div>
          <div className='w-full md:w-[50%]'>
           <div className='bg-primary rounded-full flex justify-center items-center px-4'>
            <Image src={Hero} alt='hero' className='w-full h-full object-cover '/>
           </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default HeroSection
