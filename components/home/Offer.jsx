import Image from 'next/image'
import React from 'react'
import Co from '../../public/1IwLMfBKHaY_h_10iz5Shuw-2-957x1024.png'
import Link from 'next/link'
const Offer = () => {
  return (
    <div className={` py-20`}>
   <div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className='lg:w-[50%] w-full'>
                <div>
                        <Image src={Co} alt='' className='w-full h-full object-cover'/>
                </div>
        </div>
        <div className='lg:w-[50%] w-full bg-[#4a1e75] flex  flex-col justify-center items-start px-5 py-10'>
        <h3 className='font-Jost md:text-[28px] text-[24px] font-[500] text-white'>NEET UG Admisssion 2024</h3>
        <span className='w-[100px] h-[5px] bg-[#ffda00] my-4'></span>
        <h4 className='font-Jost md:text-[28px] text-[24px] font-[700] text-white'>State Wise Counselling Information</h4>
      <div className='flex flex-col justify-start items-start gap-3 pt-5'>
      <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>MCC NEET UG Counseling</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>UP NEET UG Choice Filling Guidelines.</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>UP NEET UG Counseling</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>Haryana NEET UG Counseling</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>Punjab NEET UG Counseling</Link>

           <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>MP NEET UG Counseling</Link>
           <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>Kerala NEET UG Counseling</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>KEA (Karnataka) NEET UG Counseling</Link>
        <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>Puducherry NEET UG Counseling</Link>

           <Link href={'/'} className='text-[#ffda00] text-[18px] font-[500] font-Poppins'>Tamil Nadu NEET UG Counseling</Link>
      </div>
        </div>
  </div>
   </div>
    </div>
  )
}

export default Offer
