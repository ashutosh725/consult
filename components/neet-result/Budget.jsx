import React from 'react'
import Lkl from '../../public/lkl.jpg'
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Budget = () => {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row justify-center items-center '>
       <div className='lg:w-[50%] w-full h-full'>
       <div>
            <Image src={Lkl} alt='' className='w-full h-full lg:h-[827px] object-cover'/>
        </div>
       </div>
       <div className={`bg-[url('/online-classroom-22.jpg')] lg:h-[827px] h-full  bg-cover bg-center w-full lg:w-[50%] `}>
     <h3 className='lg:text-[42px] text-[25px] font-extrabold md:px-16 px-4 mt-10 mb-5'>MBBS in Affortable Budget !</h3>
     <div className='flex flex-col justify-start items-start gap-6 md:px-16 px-4'>
        <div className='flex justify-center items-center gap-7'>
            <IoCall  className='text-[16px]'/>
            <p className='text-[16px]'> +91 76797 51281</p>
        </div>
        <div className='flex justify-center items-center gap-7'>
            <IoMdMail  className='text-[16px]'/>
            <p  className='text-[16px]'>careerguardianindia@gmail.com</p>
        </div>
     </div>
     <form className='flex flex-col w-full gap-5 md:px-16 px-4 mt-5'>
<div>
    <input type='text' placeholder='Name' className='outline-none border border-black p-4 w-full placeholder-black bg-transparent' />
</div>
<div>
    <input type='text' placeholder='Email Address' className='outline-none border border-black p-4 w-full placeholder-black bg-transparent' />
</div>
<div>
    <input type='text' placeholder='Phone' className='outline-none border border-black p-4 w-full placeholder-black bg-transparent' />
</div>
<div className='flex justify-center items-center my-5'>
<button  className='bg-black tracking-wide px-6 py-3 text-white text-[20px] shadow-lg font-medium'>Submit</button>
        </div>
     </form>
       </div>
      </div>
    </div>
  )
}

export default Budget
