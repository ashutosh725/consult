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
        <ul className="lg:hidden bg-secondary text-white relative mx-6 flex flex-col justify-center items-start gap-5 p-5 ">
          <Link
            href={"/"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
            Home
          </Link>
          <Link
    href={"/about"}
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
        Services
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
                                       href={"/career-counselling"}
                                 
                                  className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                                >
                        Career Counselling
                                </Link>
                               
                                
                             
                  </ul>
                </div>
{/*          
          <Link
        href={"/cps-fcps"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
      CPS/FCPS
          </Link> */}
          <div 
onClick={handleCoursesDropdownToggle}
data-dropdown-toggle="servicesDropdown"
className="text-white flex items-center font-medium text-[17px]"
>
Courses
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
                           href={"/mbbs"}
                     
                      className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                    >
                                             MBBS

                    </Link>
                   
                    <Link
                           onClick={handleLinkClick}
                           href={"/md-ms-in-india"}
                     
                      className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                    >
                                                 MD MS

                    </Link>
                 
      </ul>
    </div>
          {/* <Link
          href={"/contact"}
            onClick={handleLinkClick}
            className="text-[17px] text-white font-medium"
          >
       CONTACT US
          </Link> */}
         
         <div 
onClick={handleCoursesDropdownToggle}
data-dropdown-toggle="servicesDropdown"
className="text-white flex items-center font-medium text-[17px]"
>
Medical In India
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
                           href={"/mbbs-in-india"}
                     
                      className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                    >
                                          Study MBBS in India

                    </Link>
                   
                    <Link
                           onClick={handleLinkClick}
                           href={"/md-ms"}
                     
                      className=" block border-b border-gray-100  text-[14px]  font-medium text-white hover:text-black md:mx-2"
                    >
                                               Study MD MS in India

                    </Link>
                 
      </ul>
    </div>


         
        </ul>
        {/* <div className="lg:hidden flex absolute top-4 right-3 ">
          <span onClick={handleLinkClick}><IoClose className="text-4xl cursor-pointer"/></span>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;


