import Image from 'next/image';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../public/logo.png'
import Link from 'next/link';

const MainHeader = () => {
  return (
    <div className="">
     <div className='container mx-auto'>
     <div className='flex justify-between items-center h-20'>
    <div>
    {/* <Image src={Logo} alt="logo" className=" w-32 h-18 object-cover"/> */}
    </div>
    <ul className='flex justify-center items-center gap-6'>
        <li><Link href={'/'} className='hidden lg:flex  text-[15px] font-Roboto tracking-wide font-[400]  hover:text-primary duration-300 transition-all'>Home</Link></li>
        <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>About Us</Link></li>
      <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Services</Link></li>
       <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Blog </Link></li>
      
      <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Contact Us</Link></li>
      <li>
      <Link
                href={"/contact"}
                class="hover:text-primary  border hover:bg-transparent hover:border-primary border-white bg-primary text-white duration-500 transition-all font-medium shadow-md rounded-full lg:text-[16px] text-[12px] px-6 py-3 text-center flex justify-center items-start "

              >
              Get In Touch
              </Link>
      </li>
              <div className="lg:hidden flex" >
<GiHamburgerMenu className="text-[28px] cursor-pointer" />
</div>
    </ul>
   
</div>
     </div>
    </div>
  )
}

export default MainHeader
