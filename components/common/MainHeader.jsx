"use client"
import React, { useState } from 'react';


import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo1 from "../../public/logos.png";
import Link from "next/link";
import MobileNav from './Mobilenav';

const MainHeader = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="border-2 border-secondary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center lg:h-20 h-[70px]">
          <div>
            <Image
              src={Logo1}
              alt="Image description"
              className="lg:w-32 lg:h-18 w-24 h-18 object-cover"
            />
          </div>
          <ul className="flex justify-center items-center lg:gap-6 md:gap-2">
            <li>
              <Link
                href={"/"}
                className={`hidden lg:flex text-[15px] font-Roboto tracking-wide font-semibold hover:text-secondary duration-300 transition-all ${activeLink === '/' ? 'text-secondary' : ''}`}
                onClick={() => handleSetActiveLink('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`hidden lg:flex text-[15px] font-Roboto text-secondary font-semibold tracking-wide  hover:text-secondary duration-300 transition-all ${activeLink === '/about' ? 'text-secondary' : ''}`}
                onClick={() => handleSetActiveLink('/about')}
              >
                About Us
              </Link>
            </li>
            <li>
              <div className="hidden lg:flex relative group px-3 py-2">
                <div className="flex justify-center items-center space-x-3">
                  <div
                  
                    className={`hidden lg:flex text-[15px] font-Roboto tracking-wide font-semibold text-secondary  hover:text-secondary duration-300 transition-all ${activeLink === '/mbbs' ? 'text-secondary' : ''}`}
                 
                  >
                    Services
                  </div>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 text-secondary"
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
                <div
                  className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}
                >
                  <div className="relative top-8  bg-gray-200  rounded-ss-[20px] rounded-br-[20px] shadow-md  w-full">
                    <div className="relative z-10 ">
                      <div className="">
                        <Link
                          href={"/career-counselling"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b hover:rounded-ss-[20px]   border-b-secondary hover:bg-secondary hover:text-white ${activeLink === '/career-counselling' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/career-counselling')}
                        >
                         Career Counselling
                        </Link>
                        <Link
                          href={"/subscription-plans"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b  border-b-secondary hover:rounded-br-[20px] hover:bg-secondary hover:text-white ${activeLink === '/subscription-plans' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/subscription-plans')}
                        >
                        Subscription Plans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="hidden lg:flex relative group px-3 py-2">
                <div className="flex justify-center items-center space-x-3">
                  <div
                  
                    className={`hidden lg:flex text-[15px] font-Roboto tracking-wide text-secondary font-semibold  hover:text-secondary duration-300 transition-all ${activeLink === '/mbbs' ? 'text-secondary' : ''}`}
                 
                  >
                    Courses
                  </div>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 text-secondary"
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
                <div
                  className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}
                >
                  <div className="relative top-8  bg-gray-200  rounded-ss-[20px] rounded-br-[20px] shadow-md   w-full">
                    <div className="relative z-10 ">
                      <div className="">
                        <Link
                          href={"/mbbs"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b hover:rounded-ss-[20px]   border-b-secondary hover:bg-secondary hover:text-white ${activeLink === '/mbbs' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/mbbs')}
                        >
                       UG Courses - MBBS
                        </Link>
                        <Link
                          href={"/md-ms-in-india"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b  border-b-secondary hover:rounded-br-[20px] hover:bg-secondary hover:text-white ${activeLink === '/md-ms-in-india' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/md-ms-in-india')}
                        >
                        PG Courses - MD MS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li>
              <Link
                href={"/cps-fcps"}
                className={`hidden lg:flex text-secondary text-[15px] font-Roboto tracking-wide font-[700] hover:text-secondary duration-300 transition-all ${activeLink === '/cps-fcps' ? 'text-secondary' : ''}`}
                onClick={() => handleSetActiveLink('/cps-fcps')}
              >
                CPS/FCPS
              </Link>
            </li> */}
            <li>
            <div className="hidden lg:flex relative group px-3 py-2">
<div className="flex justify-center items-center space-x-3">
  <Link
    href={"/md-ms-in-india"}
    className={`hidden lg:flex text-[15px] text-secondary font-Roboto  font-semibold tracking-wide hover:text-secondary duration-300 transition-all ${activeLink === '/md-ms-in-india' ? 'text-secondary' : ''}`}
    onClick={() => handleSetActiveLink('/md-ms-in-india')}
  >
   Medical In India

  </Link>
  <svg
    className="w-2.5 h-2.5 ms-2.5 text-secondary"
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
<div
  className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform `}
>
  <div className="relative top-8  bg-gray-200  rounded-ss-[20px] rounded-br-[20px] shadow-md ">
    <div className="relative z-10 ">
      <div className="">
        <Link
          href={"/mbbs-in-india"}
          className={`block py-2 font-medium text-secondary  text-center border-b hover:rounded-ss-[20px] font-Jost  border-b-secondary hover:bg-secondary hover:text-white ${activeLink === '/mbbs-in-india' ? 'text-secondary' : ''}`}
          onClick={() => handleSetActiveLink('/mbbs-in-india')}
        >
      Study MBBS in India
        </Link>
        <Link
          href={"/md-ms"}
          className={`block py-2 font-medium text-secondary  text-center border-b hover:rounded-br-[20px] font-Jost  border-b-secondary hover:bg-secondary hover:text-white ${activeLink === '/md-ms' ? 'text-secondary' : ''}`}
          onClick={() => handleSetActiveLink('/md-ms')}
        >
      Study MD MS in India
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
            </li>
            {/* <li>
              <Link
                href={"/contact"}
                className={`hidden lg:flex text-[15px] text-secondary font-Roboto tracking-wide font-[700] hover:text-secondary duration-300 transition-all ${activeLink === '/contact' ? 'text-secondary' : ''}`}
                onClick={() => handleSetActiveLink('/contact')}
              >
                CONTACT US
              </Link>
            </li> */}
              {/* <li>
            <div className="hidden lg:flex relative group px-3 py-2">
<div className="flex justify-center items-center space-x-3">
  <Link
    href={"/md-ms-in-india"}
    className={`hidden lg:flex text-[15px] text-secondary font-Roboto tracking-wide font-[700] hover:text-secondary duration-300 transition-all ${activeLink === '/md-ms-in-india' ? 'text-secondary' : ''}`}
    onClick={() => handleSetActiveLink('/md-ms-in-india')}
  >
Study Medical Abroad

  </Link>
  <svg
    className="w-2.5 h-2.5 ms-2.5 text-secondary"
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
<div
  className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform `}
>
  <div className="relative top-8 p-6 bg-white  border-t-4 border-secondary  w-full">
    <div className="relative z-10 ">
      <div className="">
        <Link
          href={"/application"}
          className={`block py-1 font-bold text-secondary hover:text-secondary text-start md:mx-2 ${activeLink === '/application' ? 'text-secondary' : ''}`}
          onClick={() => handleSetActiveLink('/application')}
        >
      Study MBBS in India
        </Link>
        <Link
          href={"/application"}
          className={`block py-1 font-bold text-secondary hover:text-secondary text-start md:mx-2 ${activeLink === '/application' ? 'text-secondary' : ''}`}
          onClick={() => handleSetActiveLink('/application')}
        >
      Study MD MS in India
        </Link>
      </div>
    </div>
  </div>
</div>
</div>
            </li> */}
              <li>
              <div className="hidden lg:flex relative group px-3 py-2">
                <div className="flex justify-center items-center space-x-3">
                  <div
                  
                    className={`hidden lg:flex text-[15px] font-Roboto tracking-wide font-semibold text-secondary  hover:text-secondary duration-300 transition-all ${activeLink === '/mbbs' ? 'text-secondary' : ''}`}
                 
                  >
                    Ebook
                  </div>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 text-secondary"
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
                <div
                  className={`absolute top-0 -left-7 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform `}
                >
                  <div className="relative top-8  bg-gray-200  rounded-ss-[20px] rounded-br-[20px] shadow-md  w-full">
                    <div className="relative z-10 ">
                      <div className="">
                        <Link
                          href={"/ebook/ini-cet"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b hover:rounded-ss-[20px]   border-b-secondary hover:bg-secondary hover:text-white ${activeLink === '/ebook/ini-cet' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/ebook/ini-cet')}
                        >
                       INI-CET
                        </Link>
                        <Link
                          href={"/ebook/"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b  border-b-secondary  hover:bg-secondary hover:text-white ${activeLink === '/ebook/' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/ebook/')}
                        >
                     NEET-PG
                        </Link>
                        <Link
                          href={"/ebook/neet-ug"}
                          className={`block py-2 font-medium font-Jost text-secondary  text-center border-b  border-b-secondary hover:rounded-br-[20px] hover:bg-secondary hover:text-white ${activeLink === '/ebook/neet-ug' ? 'text-secondary' : ''}`}
                          onClick={() => handleSetActiveLink('/ebook/neet-ug')}
                        >
                    NEET-UG
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            

          </ul>
          <div className="flex justify-center items-center gap-3">
            <div className="hidden lg:flex">
              <Link
                href={"/neet-result-2023"}
                className="hover:text-secondary border hover:bg-transparent hover:border-secondary border-white bg-secondary text-white duration-500 transition-all font-bold shadow-md rounded-full lg:text-[14px] text-[12px] px-6 py-3 text-center flex justify-center uppercase items-start "
              >
                neet result 2023
              </Link>
            </div>
            <div className="lg:hidden bg-secondary rounded-md hover:bg-primary text-white p-1 flex" onClick={toggleMobileNav}>
              <GiHamburgerMenu className="text-[25px] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}
    </div>
  );
};

export default MainHeader;


















