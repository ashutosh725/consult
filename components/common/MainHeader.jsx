import Image from 'next/image';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo1 from '../../public/CAREER-GUARDIAN-INDIA-LOGO.png'
import Link from 'next/link';

const MainHeader = () => {
  return (
    <div className="border-b-2 border-b-black">
     <div className='container mx-auto'>
     <div className='flex justify-between items-center h-20'>
    <div>
    <Image src={Logo1} alt="logo" className=" w-32 h-18 object-cover"/>
    </div>
    <ul className='flex justify-center items-center gap-6'>
        <li><Link href={'/'} className='hidden lg:flex  text-[15px] font-Roboto tracking-wide font-[700]  hover:text-primary duration-300 transition-all'>Home</Link></li>
        <li><Link href={'/#about-us'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[700] hover:text-primary duration-300 transition-all'>About Us</Link></li>
        <div className="hidden lg:flex relative group px-3 py-2">
                  <div className="flex justify-center items-center space-x-3">
                    <Link href={'/mbbs'} className="hidden lg:flex text-[15px] font-Roboto tracking-wide font-[700] hover:text-primary duration-300 transition-all">
                    MBBS
                    </Link>
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                  <div className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform `}>
                    <div className="relative top-8 p-6 bg-black  border-t-4 border-primary  w-full">
                      {/* <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div> */}
                      <div className="relative z-10 ">
                        <div className="">
                          <Link
                           href={'/mbbs#india'}
                           
                            className=" block  py-1 font-bold text-white hover:text-primary text-start  md:mx-2"
                          >
                         INDIA
                          </Link>
                          <Link
                             href={'/mbbs#bangladesh'}
                          
                            className=" block  py-3 font-bold  text-white hover:text-primary text-start md:mx-2"
                          >
                           BANGLADESH
                          </Link>
                          <Link
                           href={'/mbbs#nepal'}
                        
                            className=" block  py-1 font-bold text-white hover:text-primary text-start md:mx-2"
                          >
                        NEPAL
                          </Link>
                          <Link
  href={'/mbbs#russia'}
                         
                            className=" block  py-3 font-bold text-white hover:text-primary text-start md:mx-2"
                          >
                           RUSSIA
                          </Link>
                          <Link
  href={'/mbbs#poland'}
                          
                            className=" block  py-1 font-bold text-white hover:text-primary text-start md:mx-2"
                          >
                            POLAND
                          </Link>
                          <Link
 href={'/mbbs#uzbekistan'}
                        
                            className=" block text-white hover:text-primary text-start py-3 font-bold  md:mx-2"
                          >
                          UZBEKISTAN
                          </Link>
                          <Link
 href={'/mbbs#kazakhsthan'}
                        
                            className=" block text-white hover:text-primary text-start py-1 font-bold  md:mx-2"
                          >
                        KAZAKHSTAN
                          </Link>
                          <Link
 href={'/mbbs#philippines'}
                        
                            className=" block  py-3 font-bold text-white hover:text-primary text-start md:mx-2"
                          >
                        PHILIPPINES
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      <li><Link href={'/cps-fcps'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[700] hover:text-primary duration-300 transition-all'>CPS/FCPS</Link></li>
       <li><Link href={'/md-ms-in-india'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[700] hover:text-primary duration-300 transition-all'>MD/MS IN INDIA </Link></li>
      
      <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[700] hover:text-primary duration-300 transition-all'>CONTACT US</Link></li>
     
    </ul>
   <div className='flex justify-center items-center gap-3'>
   <div className=''>
      <Link
                href={"/contact"}
                class="hover:text-primary  border hover:bg-transparent hover:border-primary border-white bg-primary text-white duration-500 transition-all font-bold shadow-md rounded-full lg:text-[14px] text-[12px] px-6 py-3 text-center flex justify-center uppercase items-start "

              >
            neet result 2024
              </Link>
      </div>
              <div className="lg:hidden flex" >
<GiHamburgerMenu className="text-[28px] cursor-pointer" />
</div>
   </div>
</div>



     </div>
    </div>
  )
}

export default MainHeader
