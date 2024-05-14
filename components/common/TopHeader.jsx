import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram ,FaWhatsapp , FaYoutube  } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import { IoCall } from "react-icons/io5";
const TopHeader = () => {
  return (
    <div className='h-[75px] flex justify-center items-center bg-primary text-secondary'>
<div className='container mx-auto'>
<div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-2 lg:gap-0'>
    <ul className='flex justify-center items-center gap-7'>
<li className='cursor-pointer'>
 <Link href={'https://www.facebook.com/profile.php?id=100080881050247&mibextid=ZbWKwL'} target='_blank'>   <FaFacebookF className='text-secondary text-[20px] font-bold'/></Link>
</li>
<li className='cursor-pointer'>
   <Link href={'https://www.instagram.com/nscx_neet_pg?igsh=MTkzbndnbHZtazZ2ZA=='} target='_blank'> <FaInstagram className='text-secondary text-[20px] font-bold'/></Link>
</li>
<li className='cursor-pointer'>

<Link href={' https://api.whatsapp.com/send?phone=742727811'} target='_blank'>    <FaWhatsapp className='text-secondary text-[20px] font-bold'/></Link>
</li>
<li className='cursor-pointer'>
   <Link href={'https://www.youtube.com/@helloNscx'} target='_blank'> <FaYoutube className='text-secondary text-[20px] font-bold'/></Link>
</li>
    </ul>
    <div className='hidden lg:flex justify-center items-center gap-3 '>
 <div className='flex justify-center items-center gap-2'>
    <p className='text-[#fff]'><IoCall className='text-[25px] font-bold'/></p>
    <p className='text-[14px] tracking-wide font-medium'>+917742727811</p>
 </div>
 <div className='hidden lg:flex justify-center items-center gap-2'>
    <p className='text-[#fff]'><IoMailOutline className='text-[25px] font-bold'/></p>
    <p className='text-[14px] tracking-wide font-medium'>Nscxinfo@gmail.com</p>
 </div>
    </div>
    {/* <div className="flex lg:hidden">
              <Link
                href={"/neet-result-2023"}
                className="hover:text-primary  hover:bg-transparent  border-white bg-primary text-white duration-500 transition-all font-bold shadow-md rounded-full lg:text-[14px] text-[8px] px-3 py-2 text-center flex justify-center uppercase items-start hover:shadow-md"
              >
                neet result 2023
              </Link>
            </div> */}
</div>
</div>
    </div>
  )
}

export default TopHeader
