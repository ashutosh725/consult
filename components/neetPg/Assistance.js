"use client"
import React, { useState } from "react";

import N1 from '../../public/Neet-pg-2023-768x519.jpg'
import C1 from '../../public/bellavita_icon1-150x150-1.png'
import C2 from '../../public/state-wise-eligibility.svg'
import C3 from '../../public/Expert-Counselling.svg'
import C4 from '../../public/Transparent-process-01.svg'
import C5 from '../../public/Personalised-Guidence.svg'
import C6 from '../../public/Alert-and-Notification-01.svg'
import S1 from '../../public/Alert-and-Notification-01.svg'
import P1 from '../../public/P1.png'
import P2 from '../../public/P2.png'
import P3 from '../../public/P3.png'
import P4 from '../../public/P4.png'
import P5 from '../../public/P5.png'
import P6 from '../../public/P6.png'
import P7 from '../../public/P7.png'
import P8 from '../../public/P8.png'
import P9 from '../../public/P9.png'
import P10 from '../../public/P10.png'
import P11 from '../../public/P11.png'
import P12 from '../../public/P12.png'
import P13 from '../../public/pp.jpeg'
import { IoMdPhonePortrait } from "react-icons/io";
import P14 from '../../public/ppp.jpeg'
import P16 from '../../public/pppp.jpg'
import P17 from '../../public/ppppp.jpg'
import P15 from '../../public/Alert-and-Notification-02.svg'
import k1 from '../../public/k1.png'
import k2 from '../../public/k2.png'
import k3 from '../../public/k3.png'
import k4 from '../../public/k4.png'
import k5 from '../../public/k5.png'
import k6 from '../../public/k6.png'
import Image from 'next/image'
import Link from 'next/link';
import CountrySlider from './CountrySlider';
import EnquryForm1 from "./EnquryForm1";
const Assistance = () => {
    const [form1, setFrom1] = useState(false);

      const handleForm1Model = () => {
        setFrom1(true);
      };
    
      const handleCloseForm1Model = () => {
        setFrom1(false);
      };
  
  return (
    <>
    <div className='bg-[#c6e2d8] pt-20'>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center '>
            <h3 className='text-[#28bd86] text-[25px] font-Open font-[500]'>Register today for end to end
NEET PG Counselling Assistance</h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mt-10'>
            <div className='w-full lg:w-[50%]'>
                <div>
                    <Image src={N1} alt='' className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-3 justify-start items-start gap-5 lg:gap-0'>
                <div onClick={handleForm1Model} className='bg-white lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center cursor-pointer items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>1</span>
                    <h5 className='text-[16px]  text-center font-Open font-semibold'>{`NEET PG Counselling Assistance`}</h5>
                    <p className='text-[14px] text-center'>{` All India Quota | State Quota | Private College & Deemed Universities`}</p>
                </div>
                <div onClick={handleForm1Model} className='bg-white cursor-pointer lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>2</span>
                    <h5 className='text-[16px] text-center font-Open font-semibold'>{`NRI/Management Quota Admissions`}</h5>
                    <p className='text-[14px] text-center'>{` NRI Quota | Management Quota | IP Quota`}</p>
                </div>
                <div onClick={handleForm1Model} className='bg-white cursor-pointer lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 px-7'>
                    <span className='bg-[#1b5fc1] text-white p-2 rounded-md'>3</span>
                    <h5 className='text-[16px] text-center font-Open font-semibold'>{`Low Budget MD/MS Admission`}</h5>
                    <p className='text-[14px] text-center'>{` Good Stipend | Pay Hostel Fees Only*`}</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5 mt-7'>
<button className='bg-[#1b5fc1] hover:bg-[#28bd86] px-7 py-2 rounded-full text-white'>Register Now</button>
<button className='bg-[#28bd86] hover:bg-[#1b5fc1] px-7 py-2 rounded-full text-white'>Get Call Back</button>
        </div>
        <CountrySlider/>
        {/* <div className='flex justify-center items-center'>
        <div className='lg:w-[1024px] md:w-[768px] xl:w-[1280px] w-full overflow-hidden mx-auto'>
          <Slider {...settings}>
            {technologiesList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start py-10 px-10 cursor-pointer"
                  style={{ margin: '0 10px' }} 
                >
                  <div className='flex justify-center items-center'>
                    <Image src={item.img} width={85} height={85} alt='' className='object-contain rounded-full' />
                  </div>
                  <h3 className='uppercase text-[16px] text-center font-medium pt-5'>{item.Technology}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 py-10'>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C1} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`COLLEGE PREDICTOR`}</h5>
<p className='text-[14px] text-center'>{`Get rank based college and course prediction`}</p>
            </div>
       
        <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C2} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`COUNSELLING ELIGIBILITY`}</h5>
<p className='text-[14px] text-center'>{`Check your eligibility for All India/State/ Private University Counselling`}</p>
            </div>
        <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C3} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`EXPERT COUNSELLORS`}</h5>
<p className='text-[14px] text-center'>{`Our team comprises of experts with more than a decade’s experience`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C4} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`TRANSPARENT PROCESS`}</h5>
<p className='text-[14px] text-center'>{`No beating around the bush. Get straight and transparent analysis.`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C5} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`PERSONOLISED GUIDANCE`}</h5>
<p className='text-[14px] text-center'>{`Each candidate is provided a personalised tailor made service`}</p>
            </div>
            <div className= ' h-[350px] bg-transparent shadow-2xl hover:shadow-[#1b5fc1] rounded-lg flex flex-col justify-center items-center gap-5 p-5'>
<div>
    <Image src={C6} alt='' className='w-full h-[100px] object-cover'/>
</div>
<h5 className='text-[15px] text-[#28bd86] text-center font-Open font-semibold'>{`ALERTS & NOTIFICATION`}</h5>
<p className='text-[14px] text-center'>{`Date, Time & Other NEET Updates & Notification on SMS & Email`}</p>
            </div>
            </div>
      </div>
    </div>
<div className='bg-[#F7FDFB] py-20'>
    <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='p-5 bg-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`Low Budget MD/MS College Admission`}</h3>
                <p className='text-[16px] text-center'>{`Filter your search for colleges and courses according to your budget`}</p>
                <div onClick={handleForm1Model} className='text-[#28bd86]'>Choose Now</div>
            </div>
            <div className='p-5 bg-[#28bd86] text-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`MD/MS Counselling Assistance`}</h3>
                <p className='text-[16px] text-center'>{`Not just by helping students, we also help parents to understand the ongoing trend in the medical profession & filter out the most suitable course as-well as colleges in your preferred budget. This will help them to choose the right course.

Get Consultation`}</p>
                <div onClick={handleForm1Model} className='text-[#fff]'>Get Consultation</div>
            </div>
            <div className='p-5 bg-[#1b5fc1] text-white rounded-md flex flex-col justify-center items-center gap-6 '>
                <h3 className='text-[18px] text-center font-semibold font-Open'>{`NRI/Management Quota PG Admission`}</h3>
                <p className='text-[16px] text-center'>{`Get proper guidance and documentation support required for NRI/Management quota PG counselling. Enroll now to get India’s best MD/MS admission assistance

Get Consultation`}</p>
                <div onClick={handleForm1Model} className='text-[#fff]'>Register</div>
            </div>
        </div>
    </div>
</div>

    <div className='bg-white py-20'>
<div className='container mx-auto'>
    <div className='flex flex-col justify-center items-center gap-2'>
        <h3 className='text-[25px] font-Open font-semibold'>{`NEET PG 2024 COUNSELLING PROCESS`}</h3>
        <p className='text-center text-[18px] font-Jost font-[500]'>{`PG medical counseling begins with basic registration and choice filling /choice locking with the concerned counselling authorities which is followed by seat allotment and reporting to the allotted institute.`}</p>
    </div>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-start items-start gap-5 pt-10 '>
                <div className='bg-[#28bd86] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>1</span>
                    <h5 className='text-[18px]  text-white text-center font-Open font-semibold'>{`Registration`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Based on eligibility of NEET score and    Domicile, participants can register with MCC and  State counselling authorities.`}</p>
                </div>
                <div className='bg-[#1b5fc1] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>2</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Choice filling`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Based on the marks and preferences the candidate may choose as many specialties and lock that choice.`}</p>
                </div>
                <div className='bg-[#28bd86] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white p-3 rounded-md'>3</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Seat allotment`}</h5>
                    <p className='text-[16px] text-center text-white'>{`Counselling authorities will allot the seat based on Merit and Preferences`}</p>
                </div>
                <div className='bg-[#1b5fc1] lg:h-[300px] h-full rounded-lg shadow-lg flex flex-col justify-start items-center gap-5 py-10 px-7'>
                    <span className='bg-white  p-3 rounded-md'>4</span>
                    <h5 className='text-[18px] text-white text-center font-Open font-semibold'>{`Reporting`}</h5>
                    <p className='text-[16px] text-white text-center'>{`Report to the allotted medical institute along with the required documents and DD and complete the joining formalities.`}</p>
                </div>
            </div>
</div>
    </div>

    <div className='bg-[#d1e4dd] py-20'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='w-full lg:w-[50%] flex flex-col justify-start items-start gap-3'>
                    <h2 className='text-[48px] font-Open font-bold  text-[#1b5fc1] '>Rounds of counselling</h2>
                    <h3 className='text-[28px] font-Open font-bold  text-[#28bd86] '>There are mainly three rounds of counselling followed by Stray round-</h3>
                    <span className='w-[150px] h-[5px] bg-[#28bd86] '></span>
                    <div className='mt-5'>
                        <button onClick={handleForm1Model} className='bg-[#1b5fc1] border-2 border-white py-2 px-7 rounded-md text-white'>Start Now</button>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] flex flex-col justify-start items-start gap-8'>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#28bd86] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>1</p>
                        </div>
<div>
<p className='font-bold text-[#28bd86] text-[28px]'>Round 1</p>
                        <p>{`The journey of dreams begins with round 1 counselling – Select your options wisely.`}</p>
                        <p className='text-[20px] text-[#eead55] pt-4'>{`Not satisfied with allotment – free exit is there`}</p>
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#eead55] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>2</p>
                        </div>
<div>
<p className='font-bold text-[#eead55] text-[28px]'>Round 2</p>
                        <p>{`Choose your options carefully –any mistakes can end your hope

`}</p>
                    
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#e68845] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>3</p>
                        </div>
<div>
<p className='font-bold text-[#e68845] text-[28px]'>Mop- Up Round</p>
                        <p>{`For participants who haven’t got any seats in earlier rounds can participate with limited available options.`}</p>
                    
</div>
                    </div>
                    <div className='flex justify-center items-start gap-3'>
                        <div className='bg-[#e68845] rounded-full text-black p-3 flex justify-center items-center '>
                            <p className='font-bold'>4</p>
                        </div>
<div>
<p className='font-bold text-[#e68845] text-[28px]'>Stray round</p>
                        <p>{`A college level counselling for left out residual seats`}</p>
                    
</div>
                    </div>
                </div>

            </div>
           
        </div>
        <div className='bg-[#28BD86] py-10 my-20'>
            <div className='container mx-auto'> 
            <div className='flex lg:flex-row flex-col justify-center items-center gap-5'>
                <div className='lg:w-[40%] w-full'>
<h3 className='text-white text-[30px] font-Poppins font-medium'>Score Based Seat Predictor</h3>
                </div>
                <div className='lg:w-[40%] w-full flex flex-col justify-center items-center lg:flex-row gap-3 '>
<div className='flex flex-col justify-center items-center lg:flex-row gap-3'>
<div>    <input type='text' placeholder='Neet Score (E.g 450, 600)' className='bg-white p-3 shadow-md rounded-full outline-none'/></div>
<div>    <input type='text' placeholder='Mobile' className='bg-white p-3 shadow-md rounded-full outline-none'/></div>
</div>
<div>
    <button className='bg-[#1B5FC1] py-3 px-7 text-white rounded-md'> Send</button>
</div>
                </div>
            </div>
            </div>
         
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='w-full lg:w-[50%]'>
                    <h1 className='text-[#2C5476] leading-[49px] font-bold font-Open text-[48px]'>TOP MD/MS SPECIALIZATIONS IN INDIA</h1>
                    <p className='text-[18px] font-Jost text-[#60748A] pt-5'>{`It is a dream for every MBBS graduate to study MD/MS in India since the postgraduate medical qualification not only boosts their career to the next level but it also helps them to be financially vigilant. Securing PG medical seats in India is not an easy nut to crack since more than 1.6 lakhs students appear in NEET-PG for 35 thousand (approx.) PG medical seats, student and seat ratio is very uneven so the competition is very high to secure PG medical seat which is further followed by complicated counselling and admission procedures. Here at Your Chanakya, we help you out to know the college and course prediction, cut-off and quota-based seat availability, MCC and State Counselling, eligibility, admission procedure, fees and documentation etc`}</p>
                </div>
                <div className='w-full lg:w-[50%] flex flex-col lg:flex-row justify-start items-center gap-7'>
                  <div className='flex flex-col justify-center items-start'>
                  <div className='flex justify-start items-center gap-4 border-b border-b-[#1B5FC1] w-full py-4'>
                        <div >
                            <Image src={P1} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Radiology</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P2} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>General Medicine</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P3} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>General Surgery</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P4} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Orthopedics</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P5} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Pulmonary Medicine
</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P6} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Psychiatry</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                  <div className='flex justify-start items-start w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P7} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Dermatology</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P8} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Pediatrics</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P9} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Anesthesia</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P10} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Opthalmology</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P11} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>OBS. & Gynaecology
</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={P12} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Pathalogy</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
         <div className='bg-[#d1d1e4]/30 py-20'>
         <div className='container mx-auto'>
          <div className='flex justify-center items-center flex-col gap-3'>
          <h3 className='text-black text-center text-[40px] font-Poppins font-medium'>{`Why Us for your MD/MS/MBBS ?`}</h3>
            <h4 className='text-[20px] text-center text-[#28BD86] font-bold font-Poppins'>{`You choose what you dream and with us you get what you have chosen.

`}</h4>
<p className='text-[15px] text-center'>{`With presence for over a decade in medical education we have fulfilled dreams of many parents and students. We are one of India’s Top education consultancies providing you with invaluable information, counselling and guidance to help you choose your career path wisely.`}</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            <div className='bg-[#1B5FC1] h-[350px] p-5 rounded-xl flex flex-col justify-start items-center gap-4'>
<div className='p-4 bg-green-500 rounded-full'>

</div>
<h4 className='text-[18px] text-center text-white font-bold'>{`Wide Choice`}</h4>
<p className='text-[16px] text-center text-white'>{`On choosing Your Chanakya college mapping and data analytics services, students will get a surprisingly wide choice of colleges and course selection options within prescribed budget.`}</p>
            </div>
            <div className='bg-[#e68845] h-[350px] p-5 rounded-xl flex flex-col justify-start items-center gap-4'>
<div className='p-4 bg-green-500 rounded-full'>

</div>
<h4 className='text-[18px] text-center text-white font-bold'>{`Unmatched Expertise
`}</h4>
<p className='text-[16px] text-center text-white'>{`With a plethora of experienced counselors and senior academicians' guidance, Students can get all their queries resolved satisfactorily.`}</p>
            </div>
            <div className='bg-[#1B5FC1] h-[350px] p-5 rounded-xl flex flex-col justify-start items-center gap-4'>
<div className='p-4 bg-green-500 rounded-full'>

</div>
<h4 className='text-[18px] text-center text-white font-bold'>{`Safe and Transparent`}</h4>
<p className='text-[16px] text-white text-center'>{`NEET counseling is all about marks and affordability so the process of choosing the right course and college is discussed thoroughly and well documented. No involuntary promises. Honest review of Individual profile and probability.`}</p>
            </div>
            <div className='bg-[#e68845] h-[350px] p-5 rounded-xl flex flex-col justify-start items-center gap-4'>
<div className='p-4 bg-green-500 rounded-full'>

</div>
<h4 className='text-[18px] text-center text-white font-bold'>{`Personalized Guidance`}</h4>
<p className='text-[16px] text-center text-white'>{`Each Individual has his own perceptions about counseling, college and course selection. Your Chanakya provides the right platform to discuss the
- Right college based on rank
-Proper financials planning for each course and colleges
-One on one strategy session of each counseling`}</p>
            </div>

          </div>
          </div>  
         </div>
        <div className='bg-[#f5f5f5]'>
        <div className='container mx-auto py-20'>
            <div className='flex items-center'>
                <div className='lg:w-[33%] w-full'>
                    <h3 className='lg:text-[40px] text-[28px] font-bold font-Poppins'>What People Say About Us</h3>
                </div>
                <div className='lg:w-[33%] w-full'>
                    <div>
                        <Image src={P13} alt='' className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div className='lg:w-[33%] w-full p-5 bg-[#f3f3f3] flex flex-col gap-5 justify-start items-start'>
                    <h5 className='font-Jost text-[20px] font-medium'>DR MEGHNA SINGH</h5>
                    <p className='text-[20px] font-Jost'>{`I had an excellent experience with Nscx Education as my MD/MS Counsellor. They provided comprehensive guidance, practical advice, and emotional support throughout the consulting process. Their deep understanding of the medical field and personalized approach helped me make informed decisions about my academic and career path. I highly recommend by Experts Mr. MANISH PINGOLIYA to anyone seeking expert and compassionate consulting services 
Thank you for your support for my journey to MD -  Radiology 😇 `}</p>
                </div>
            </div>
         </div>
         <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10'>
                <div className='bg-white rounded-lg p-5 flex flex-col gap-5'>
                    <div className='flex justify-start items-center gap-2'>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                    </div>
                    <p className='text-[18px] font-Jost  text-center'>{`A great and wonderful experience with Manish pingoliya. His team always updated me from their side and helped me getting OBGY branch at such a great institute.`}</p>
                    <div className='flex justify-start items-center gap-4'>
                       <div>
                       <Image src={P14} alt='' className='w-full h-[150px] object-cover rounded-full'/>
                       </div>
                       <p className='text-[20px] font-Jost'>	
                       Dr. Garima Keshav</p>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-5 flex flex-col gap-5'>
                    <div className='flex justify-start items-center gap-2'>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                    </div>
                    <p className='text-[18px] font-Jost  text-center'>{`Very efficient guidance by Mr. MANISH PINGOLIYA. I didn't imagined to Get MS ENT in such a at best institutions at my rank. Thank you for your support for my journey to MS - OTORHINOLARYNGOLOGY - head and neck`}</p>
                    <div className='flex justify-start items-center gap-4'>
                       <div>
                       <Image src={P16} alt='' className='w-full h-[150px] object-cover rounded-full'/>
                       </div>
                       <p className='text-[20px] font-Jost'>Dr Avisha Sharma </p>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-5 flex flex-col gap-5'>
                    <div className='flex justify-start items-center gap-2'>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                        <IoMdPhonePortrait/>
                    </div>
                    <p className='text-[18px] font-Jost  text-center'>{`Very efficient guidance by Mr. Manish Pingoliya. He predicted correct that i could get MS OBGY at my rank before councelling started. It helped me to get my Dream branch MS OBGY.`}</p>
                    <div className='flex justify-start items-center gap-4'>
                       <div>
                       <Image src={P17} alt='' className='w-full h-[150px] object-cover rounded-full'/>
                       </div>
                       <p className='text-[20px] font-Jost'>	
DHARMENDER GUPTA</p>
                    </div>
                </div>
            </div>
         </div>
        </div>
         <div className='bg-[#d1e4dd]'>
         <div className='container mx-auto py-20'>
<div>
    <h2 className='text-[40px] text-[#1B5FC1] font-bold font-Poppins text-center'>{`Confirm Admission - Direct Admission
Through MD MS Counselling`}</h2>
<p className='text-[19px] font-Jost font-medium text-center'>{`We understand the stress of a student, hence offer him/her with personalized guidance, support, and counselling, so that they realize their dream of studying at top medical colleges in India to fulfill their unambiguous career aspirations. We assist them at every step of counselling so that they can select the right course in the right college, starting from the college mapping, application process and required documents that leads successful admissions into desired MD MS courses through NEET-PG  counselling in Management and NRI quota seats. Our motive is to guide the pupil effortlessly towards their desired college/university in India.`}</p>
</div>
<div className='grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-5 lg:flex-row pt-10'>
<div className='p-5 flex bg-transparent shadow-2xl rounded-lg flex-col '>
    <div className='flex justify-center items-center'>
        <Image src={P15} alt='' className='w-[100px] h-[100px] object-contain'/>
    </div>
    <h3 className='text-[#1B5FC1] text-center text-[20px] font-Montserrat font-[600] pt-4'>COUNSELLING ASSISTANCE SERVICES</h3>
    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k1} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Date and Time Update via Email and SMS</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k2} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>State Wise Counselling Assistance</p>
                    </div>   
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k3} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>College, Course & Fee Details</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k4} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>College Mapping Based on Rank</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k5} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Application & Documentation Support</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#1B5FC1] py-4'>
                        <div >
                            <Image src={k6} alt='' className='w-full h-full object-cover'/>
                        </div>
                        <p className='text-[#1B5FC1] text-[20px]'>Personalised Guidance For Each Counselling</p>
                    </div>
                    <div className='mt-10'>
                        <button className='bg-[#1b5fc1] w-full border-2 border-white hover:bg-green-500 py-2 px-7 rounded-md text-white'>Book Now</button>
                    </div>
                    <div className='mt-5 flex justify-center items-center gap-5'>
                        <button className=' w-full border-2 border-white bg-green-500 py-2 px-7 rounded-md text-white'>Call <br/>+917742727811</button>
                        <button className=' w-full border-2 border-white bg-green-500 py-2 px-7 rounded-md text-white'>Whatsapp <br/>+917742727811</button>
                    </div>
</div>
<div className='p-5 flex bg-[#1B5FC1] text-white shadow-2xl rounded-lg flex-col '>
    <div className='flex justify-center items-center'>
        <Image src={P15} alt='' className='w-[100px] h-[100px] object-contain'/>
    </div>
    <h3 className='text-[#fff] text-center text-[20px] font-Montserrat font-[600] pt-4'>CONFIRM ADMISSION SERVICE</h3>
    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                       
                        <p className=' text-[20px]'>NRI Sponsored Quota Counselling Support</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                       
                        <p className=' text-[20px]'>NRI Documentation Support</p>
                    </div>   
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                       
                        <p className='text-[20px]'>Assistance In Offline MOP-UP And Stray Round Counselling</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                      
                        <p className=' text-[20px]'>Confirm Admission Based On College Choice</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                       
                        <p className=' text-[20px]'>Confirm Admission Based On Preferred Budget</p>
                    </div>
                    <div className='flex justify-start items-center w-full gap-4 border-b border-b-[#fff] py-4'>
                      
                        <p className=' text-[20px]'>Consultation Regarding All Branches Of MD MS Courses And Admission Process.</p>
                    </div>
                    <div className='mt-10'>
                        <button className='bg-white text-[#1B5FC1] w-full border-2 border-white hover:bg-green-500 py-2 px-7 rounded-md '>Book Now</button>
                    </div>
                    <div className='mt-5 flex justify-center items-center gap-5'>
                        <button className=' w-full border-2 border-white bg-green-500 py-2 px-7 rounded-md text-white'>Call <br/>+917742727811</button>
                        <button className=' w-full border-2 border-white bg-green-500 py-2 px-7 rounded-md text-white'>Whatsapp <br/>+917742727811</button>
                    </div>
</div>
</div>
         </div>
         </div>
       <div className='bg-white py-20'>
        <div className=' container mx-auto'>
            <div className='flex justify-center items-center flex-col gap-3'>
                <h2 className='text-[45px] font-Jost'>Get One Step Ahead With Nscx Education </h2>
                <p className='text-[22px] font-Jost'>Dont wait, make a move.</p>
                <div className='mt-5'>
                    <button className='py-2 px-6 bg-[#818a91] shadow-lg rounded-sm capitalize text-[#fff]'>make an appointment</button>
                </div>
            </div>
        </div>
       </div>
       <div className='bg-[#1b5fc1] '>
        <div className='container mx-auto'>
<div className='flex justify-center items-center gap-5 py-20'>
    <div className='lg:w-[50%] w-full flex justify-start gap-3 items-center'>
        <div className='bg-green-500 p-5 rounded-full'>

        </div>
        <div className='flex flex-col justify-start items-start gap-1'>
        <h3 className='text-white text-[35px] font-Jost'>Subsribe To Our Newsletter</h3>
            <p className='text-white text-[20px] font-Jost'>
Stay in touch with us to get latest news and special offers.</p>
        </div>
    </div>
    <div className='lg:w-[50%] flex justify-center items-center w-full'>
        <input type='text' placeholder='example@domain.com' className='bg-white rounded-l-lg p-4 outline-none w-full'/>
        <div>
        <button className='py-4 px-6 bg-green-500 shadow-lg rounded-r-lg text-[18px] font-bold capitalize text-[#fff]'>Subscribe</button>
        </div>
    </div>
</div>
        </div>
       </div>
       {form1 && <EnquryForm1 handleCloseForm1Model={handleCloseForm1Model} handleForm1Model={handleForm1Model}/>}
    </div>
    </>
  )
}

export default Assistance


