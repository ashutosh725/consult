import React from 'react'
import { FaFacebookF, FaInstagram ,FaWhatsapp , FaYoutube  } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import { IoCall } from "react-icons/io5";
const TopHeader = () => {
  return (
    <div className='h-[82px] flex justify-center items-center bg-[#000000] text-white'>
<div className='container mx-auto'>
<div className='flex justify-between items-center'>
    <ul className='flex justify-center items-center gap-7'>
<li className='cursor-pointer'>
    <FaFacebookF className='text-[#0693e3]'/>
</li>
<li className='cursor-pointer'>
    <FaInstagram className='text-[#f78da7]'/>
</li>
<li className='cursor-pointer'>
    <FaWhatsapp className='text-[#00d084]'/>
</li>
<li className='cursor-pointer'>
    <FaYoutube className='text-[#cf2e2e]'/>
</li>
    </ul>
    <div className='flex justify-center items-center gap-3 '>
 <div className='flex justify-center items-center gap-2'>
    <p className='text-[#cf2e2e]'><IoCall/></p>
    <p className='text-[14px] tracking-wide font-bold'>+916367810052</p>
 </div>
 <div className='flex justify-center items-center gap-2'>
    <p className='text-[#cf2e2e]'><IoMailOutline/></p>
    <p className='text-[14px] tracking-wide font-bold'>ashutosharma50@gmail.com</p>
 </div>
    </div>
</div>
</div>
    </div>
  )
}

export default TopHeader
