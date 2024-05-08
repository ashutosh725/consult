"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";


const MobileNav = ({ onLinkClick }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(true);

  const [isCourses1DropdownOpen, setCourses1DropdownOpen] = useState(true);
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCourses1DropdownOpen(false);
 
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);

   
  };

  const handleLinkClick1 = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setCoursesDropdownOpen(false);
 
  };
  const handleCourses1DropdownToggle = () => {
    setCourses1DropdownOpen(!isCourses1DropdownOpen);

   
  };

 
  return (
    <div className="  z-50 top-[160px]      w-full  lg:py-0 shadow">
      <div className="container mx-auto">
        <ul className="lg:hidden bg-primary/80 text-white relative mx-6 flex flex-col justify-center items-start gap-5 p-5 ">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
            Home
          </Link>
          <Link
    href={"/#about-us"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
      About
          </Link>
          <div 
            onClick={handleCoursesDropdownToggle}
        data-dropdown-toggle="servicesDropdown"
        className="text-white flex items-center font-medium text-[17px]"
       >
        MBBS
        <svg
         onClick={handleCoursesDropdownToggle}
          className={`w-2.5 h-2.5 ms-3 ${
              isCoursesDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
       </div>
       
       <div
                  id="servicesDropdown"
                  className={`z-10 ${
                      isCoursesDropdownOpen ? "block" : "hidden"
                  }  divide-y divide-gray-100`}
                >
                  <ul
                    class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-white dark:text-gray-200"
                    aria-labelledby="servicesDropdown"
                  >
                    
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#india"}
                                 
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                          INDIA
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs-in-bangladesh"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
     BANGLADESH
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#nepal"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                                 NEPAL
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#russia"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                             RUSSIA
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#poland"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                              POLAND
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#uzbekistan"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                             UZBEKISTAN
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#kazakhsthan"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                          KAZAKHSTAN
                                </Link>
                                <Link
                                       onClick={handleLinkClick}
                                       href={"/mbbs#philippines"}
                                
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                          PHILIPPINES
                                </Link>
                                
                             
                  </ul>
                </div>
         
          <Link
        href={"/cps-fcps"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
      CPS/FCPS
          </Link>
          <div 
onClick={handleCoursesDropdownToggle}
data-dropdown-toggle="servicesDropdown"
className="text-white flex items-center font-medium text-[17px]"
>
MD/MS IN INDIA
<svg
onClick={handleCoursesDropdownToggle}
className={`w-2.5 h-2.5 ms-3 ${
  isCoursesDropdownOpen ? "rotate-180" : ""
}`}
aria-hidden="true"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 10 6"
>
<path
stroke="currentColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
d="m1 1 4 4 4-4"
/>
</svg>
</div>

<div
      id="servicesDropdown"
      className={`z-10 ${
          isCoursesDropdownOpen ? "block" : "hidden"
      }  divide-y divide-gray-100`}
    >
      <ul
        class=" flex flex-col justify-start items-start gap-3  py-2 text-sm text-white dark:text-gray-200"
        aria-labelledby="servicesDropdown"
      >
        
                    <Link
                           onClick={handleLinkClick}
                           href={"/application"}
                     
                      className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                    >
                      ENROLL NOW
                    </Link>
                   
                    
                 
      </ul>
    </div>
          <Link
          href={"/contact"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
       CONTACT US
          </Link>
         
        


         
        </ul>
        {/* <div className="lg:hidden flex absolute top-4 right-3 ">
          <span onClick={handleLinkClick}><IoClose className="text-4xl cursor-pointer"/></span>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;


