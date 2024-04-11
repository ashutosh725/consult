import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import Logo1 from '../../public/CAREER-GUARDIAN-INDIA-LOGO.png'
const Whenever = () => {
  return (
    <div className={`bg-[url('/3985153.jpg')] bg-cover  bg-center `}>
        <div className='bg-[rgba(45,107,76,0.74)]  py-20 '>
<div className='container mx-auto'>
<div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
<div className='lg:w-[60%] w-full'>
    <h3 className='lg:text-[60px] text-[30px] text-center font-bold text-white'>{`We’re Here Whenever You Need Us`}</h3>
    <div className='grid  grid-cols-1 md:grid-cols-2 pt-10'>
        <div className='bg-[#aacd70] rounded-ss-[120px] px-10 py-10 flex flex-col justify-center items-center gap-3'>
            <div className='p-6 rounded-full bg-transparent/20'>
                <CiMail className='text-[20px] text-black'/>
            </div>
            <p className='text-black text-[16px] font-semibold'>Email</p>
            <h5 className='text-white text-[16px] font-bold'>careerguardianindia@gmail.com</h5>
            <div className='p-6 rounded-full bg-transparent/20'>
                <IoIosCall className='text-[20px] text-black'/>
            </div>
            <p className='text-black text-[16px] font-semibold'>Phone</p>
            <h5 className='text-white text-[16px] font-bold'>+91 76797 51281</h5>
        </div>
        <div className='bg-[#2e987d] py-10 px-10 flex flex-col justify-start items-center gap-3'>
            <div className='p-6 rounded-full bg-transparent/20'>
                <IoLocationOutline className='text-[20px] text-black'/>
            </div>
            <p className='text-white text-[16px] font-semibold'>Address</p>
            <h5 className='text-white text-[16px] font-bold'>Midnapur

</h5>
           
            
            <h5 className='text-white text-[16px] text-center font-bold'>Gourishwar marketing complex 2nd floor, Ghatal, Kushpata, Paschim Medinipur, 721212, Ghatal, India, West Bengal

</h5>
        </div>
        <div className='bg-[#002725] py-10 px-10 flex flex-col justify-start items-center gap-3'>
            <div className='p-6 rounded-full bg-transparent/50'>
                <IoLocationOutline className='text-[20px] text-white'/>
            </div>
            <p className='text-white text-[16px] font-semibold'>Address</p>
            <h5 className='text-white text-[16px] font-bold'>Kolkata

</h5>
           
            
            <h5 className='text-white text-[16px] text-center font-bold'>GODREJ WATERSIDE , DP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091



</h5>
        </div>
        <div className='bg-[#005450] rounded-ee-[120px] py-10 px-10 flex flex-col justify-start items-center gap-3'>
            <div className='p-6 rounded-full bg-transparent/50'>
                <IoLocationOutline className='text-[20px] text-white'/>
            </div>
            <p className='text-white text-[16px] font-semibold'>Address</p>
            <h5 className='text-white text-[16px] font-bold'>Delhi NCR

</h5>
           
            
            <h5 className='text-white text-[16px] text-center font-bold'>A-17 basement office number -1 , Sector -4
Noida – 201301 Gautam Budhha Nagar (U.P)



</h5>
        </div>
    </div>
</div>
<div className='lg:w-[40%] w-full'>
<Image src={Logo1} alt='' className='w-full h-full object-cover'/>
</div>
</div>

</div>
        </div>
    
    </div>
  )
}

export default Whenever
