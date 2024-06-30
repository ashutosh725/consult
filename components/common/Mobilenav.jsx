"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ onLinkClick }) => {
  const [isServicessDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isEbookDropdownOpen, setEbookDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isUGCoursesDropdownOpen, setUGCoursesDropdownOpen] = useState(false);
  const [isPGCoursesDropdownOpen, setPGCoursesDropdownOpen] = useState(false);
  const [isMedicalsDropdownOpen, setMedicalDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setServicesDropdownOpen(false);
    setCoursesDropdownOpen(false);
    setUGCoursesDropdownOpen(false);
    setPGCoursesDropdownOpen(false);
    setEbookDropdownOpen(false)
    setMedicalDropdownOpen(false)
  };

  const handleServicesDropdownToggle = () => {
    setServicesDropdownOpen(!isServicessDropdownOpen);
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const handleUGCoursesDropdownToggle = () => {
    setUGCoursesDropdownOpen(!isUGCoursesDropdownOpen);
  };

  const handlePGCoursesDropdownToggle = () => {
    setPGCoursesDropdownOpen(!isPGCoursesDropdownOpen);
  };
  const handleEbookDropdownToggle = () => {
    setEbookDropdownOpen(!isEbookDropdownOpen);
  };
  const handleMedicalDropdownToggle = () => {
    setMedicalDropdownOpen(!isMedicalsDropdownOpen);
  };

  return (
    <div className="z-50 top-[160px] border-t bg-gray-100 border-t-secondary w-full lg:py-0 shadow">
      <div className="mx-auto">
        <ul className="lg:hidden text-secondary hover:text-white relative flex flex-col justify-center items-start">
          <li className="bg-secondary rounded-ss-[20px] border border-secondary group w-full px-5 py-1">
            <Link
              href={"/"}
              onClick={handleLinkClick}
              className="text-[15px] text-white font-medium"
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-secondary border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-1">
            <Link
              href={"/about"}
              onClick={handleLinkClick}
              className="text-[15px] text-secondary group-hover:text-white font-medium"
            >
              About
            </Link>
          </li>
          <div
            onClick={handleServicesDropdownToggle}
            data-dropdown-toggle="servicesDropdown"
            className="text-secondary w-full border duration-500 border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary hover:bg-secondary px-5 py-1 hover:text-white flex items-center font-medium text-[15px]"
          >
            Services
            <svg
              onClick={handleServicesDropdownToggle}
              className={`w-2.5 h-2.5 ms-3 duration-500 ${isServicessDropdownOpen ? "rotate-180" : ""}`}
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
            className={`z-10 transition-all duration-300 ease-in-out ${isServicessDropdownOpen ? "block" : "hidden"} divide-y  divide-gray-100 w-full`}
          >
            <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
              <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/career-counselling"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                  Career Counselling
                </Link>
              </li>
              <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/subscription-plans"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                  Subscription Plan
                </Link>
              </li>
            </ul>
          </div>

          <div
            onClick={handleCoursesDropdownToggle}
            data-dropdown-toggle="coursesDropdown"
            className="text-secondary w-full border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary hover:bg-secondary px-5 py-2 hover:text-white flex items-center font-medium text-[15px]"
          >
            Courses
            <svg
              onClick={handleCoursesDropdownToggle}
              className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ease-in-out ${isCoursesDropdownOpen ? "rotate-180" : ""}`}
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
            id="coursesDropdown"
            className={`z-10 transition-all duration-300 ease-in-out ${isCoursesDropdownOpen ? "block" : "hidden"} divide-y divide-gray-100 w-full`}
          >
            <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
              <div
                onClick={handleUGCoursesDropdownToggle}
                className="text-secondary w-full border-b border-b-secondary hover:bg-secondary px-5 py-2 hover:text-white flex items-center font-medium text-[15px]"
              >
                UG Courses
                <svg
                  onClick={handleUGCoursesDropdownToggle}
                  className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ease-in-out ${isUGCoursesDropdownOpen ? "rotate-180" : ""}`}
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
                className={`z-10 transition-all duration-300 ease-in-out ${isUGCoursesDropdownOpen ? "block" : "hidden"} divide-y divide-gray-100 w-full`}
              >
                <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/mbbs"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                      MBBS
                    </Link>
                  </li>
                 
                </ul>
              </div>

              <div
                onClick={handlePGCoursesDropdownToggle}
                className="text-secondary w-full hover:bg-secondary px-5 py-2 hover:text-white flex items-center font-medium text-[15px]"
              >
                PG Courses
                <svg
                  onClick={handlePGCoursesDropdownToggle}
                  className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ease-in-out ${isPGCoursesDropdownOpen ? "rotate-180" : ""}`}
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
                className={`z-10 transition-all duration-300 ease-in-out ${isPGCoursesDropdownOpen ? "block" : "hidden"} divide-y divide-gray-100 w-full`}
              >
                <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-anesthesia"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                      MD ANESTHESIA
                    </Link>
                    </li>
                    <li className="hover:bg-secondary  border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-dermatology"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                     MD DERMATOLOGY
                    </Link>
                  </li>
                  <li className="hover:bg-secondary  border-t border-t-secondary border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-radiodiagnosis-md-radiology"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                     MD RADIOLOGY
                    </Link>
                  </li>
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-general-medicine"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                    MD GENERAL MEDICINE
                    </Link>
                  </li>
                  <li className="hover:bg-secondary  border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-paediatrics"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                      MD PAEDIATRICS
                    </Link>
                  </li>
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/ms-orthopedics"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                    MS Orthopaedics
                    </Link>
                  </li>
                  <li className="hover:bg-secondary  border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/ms-obstetrics-gynaecology"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                   MS Obstetrics & Gynaecology
                    </Link>
                  </li>
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/ms-ophthalmology"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                     MS Ophthalmology
                    </Link>
                  </li>
                  <li className="hover:bg-secondary  border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/md-tuberculosis-respiratory-diseases-pulmonary-medicine"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                     MD Pulmonary
                    </Link>
                  </li>
                  <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                    <Link
                      onClick={handleLinkClick}
                      href={"/ms-general-surgery"}
                      className="block text-[14px] font-medium text-secondary hover:text-white"
                    >
                   MS General Surgery
                    </Link>
                  </li>

               
                </ul>
              </div>
            </ul>
          </div>

          <div
            onClick={handleMedicalDropdownToggle}
            data-dropdown-toggle="servicesDropdown"
            className="text-secondary w-full border border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary hover:bg-secondary px-5 py-1 hover:text-white flex items-center font-medium text-[15px]"
          >
            Medical in India
            <svg
              onClick={handleMedicalDropdownToggle}
              className={`w-2.5 h-2.5 ms-3 transition-all duration-300 ease-in-out ${isMedicalsDropdownOpen ? "rotate-180" : ""}`}
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
            className={`z-10 transition-all duration-300 ease-in-out ${isMedicalsDropdownOpen ? "block" : "hidden"} divide-y divide-gray-100 w-full`}
          >
            <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
              <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/mbbs-in-india"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                 Study MBBS in India
                </Link>
              </li>
              <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/md-ms"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                 Study MD MS in India
                </Link>
              </li>
            </ul>
          </div>

          <div
            onClick={handleEbookDropdownToggle}
            data-dropdown-toggle="servicesDropdown"
            className="text-secondary w-full border border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary hover:bg-secondary px-5 py-1 hover:text-white flex items-center font-medium text-[15px]"
          >
           E-Book
            <svg
              onClick={handleEbookDropdownToggle}
              className={`w-2.5 h-2.5 ms-3 ${isEbookDropdownOpen ? "rotate-180" : ""}`}
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
            className={`z-10 transition-all duration-300 ease-in-out ${isEbookDropdownOpen ? "block" : "hidden"} divide-y divide-gray-100 w-full`}
          >
            <ul className="flex flex-col w-full text-sm text-secondary hover:text-white dark:text-gray-200">
              <li className="hover:bg-secondary border-b border-b-secondary border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/ebook/ini-cet"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                  INI-CET
                </Link>
              </li>
              <li className="hover:bg-secondary border-l border-l-secondary border-r border-r-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                 Neet PG
                </Link>
              </li>
              <li className="hover:bg-secondary border border-secondary group w-full px-5 py-2">
                <Link
                  onClick={handleLinkClick}
                  href={"/ebook/neet-ug"}
                  className="block text-[14px] font-medium text-secondary hover:text-white"
                >
                 Neet UG
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
