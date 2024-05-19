"use client"
import React from 'react'
import Logo1 from '../../public/logos.png'
import Image from 'next/image'
import Link from 'next/link'


import { FaFacebookF,FaInstagram  ,FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#263238] text-white pt-10' >
    <div className='container mx-auto' >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-start items-start gap-10 pl-6 lg:pl-0'>
<div className='flex flex-col justify-start items-start gap-5'>
<div>
<Image src={Logo1} alt='' className='w-full h-[100px] object-contain'/>
</div>
<p className='font-Jost text-gray-300 text-[15px]'>Nscx Education is a Medical Education Consultancy providing a professional platform for students seeking career assistance, guidance and support. We assist students seeking admission to Medical PG and  Medical UG courses in India and Abroad. </p>
<ul className='flex justify-center items-center gap-3'>
       <Link href={'https://www.facebook.com/profile.php?id=100080881050247&mibextid=ZbWKwL'} target='_blank' className='bg-black/55 p-2 rounded-full'> <FaFacebookF className='hover:text-primary ease-in-out duration-200'/></Link>
        {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'><FaXTwitter className='hover:text-primary ease-in-out duration-200'/></Link> */}
        <Link href={'https://www.instagram.com/nscx_neet_pg?igsh=MTkzbndnbHZtazZ2ZA=='} target='_blank' className='bg-black/55 p-2  rounded-full'><FaInstagram className='hover:text-primary ease-in-out duration-200'/></Link>
      <Link href={'https://www.youtube.com/@helloNscx'} target='_blank' className='bg-black/55  p-2 rounded-full'>  <FaYoutube className='hover:text-primary ease-in-out duration-200'/></Link>
      {/* <Link href={'/'} className='bg-black/55  p-2 rounded-full'>  <FaYoutube className='hover:text-primary ease-in-out duration-200'/></Link> */}
        </ul>
</div>
<div className='flex flex-col justify-center items-start gap-5'>
  <h4 className='font-Jost text-[20px] font-semibold'>Useful Links</h4>
  <ul className='flex flex-col justify-start  items-start gap-2'>
    <li><Link href={'/'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Home</Link></li>
    <li><Link href={'/about'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>About us</Link></li>
    <li><Link href={'/cps-fcps'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>CPS - FCPS</Link></li>
    <li><Link href={'/mbbs'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>MBBS</Link></li>
    <li><Link href={'/md-ms-in-india'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>MD - MS</Link></li>
    <li><Link href={'/contact'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Contact us</Link></li>
  </ul>
</div>
<div className='flex flex-col justify-center items-start gap-5'>
  <h4 className='font-Jost text-[20px] font-semibold'>Counselling</h4>
  <ul className='flex flex-col justify-start  items-start gap-2'>
    <li><Link href={'/career-counselling'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Career Counselling</Link></li>
    <li><Link href={'/'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>NEET PG Counselling</Link></li>
    <li><Link href={'/career-counselling'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>NEET UG Counselling</Link></li>
    <li><Link href={'/neet-result-2023'} className='font-Jost text-[15px] text-gray-300 hover:text-primary ease-in-out duration-200'>Neet Result 2023</Link></li>
  </ul>
</div>
      </div>
      <hr className='mt-10'/>
      <div className='flex flex-col md:flex-row justify-between items-center gap-5 py-5'>
        <div className='flex justify-center items-center gap-3'>
          <Link href={'/privacy-policy'} className='font-Jost text-gray-300 text-[15px] hover:text-primary ease-in-out duration-200'>Privacy Policy</Link>
          <p>|</p>
          <Link href={'/refund-policy'} className='font-Jost text-gray-300 text-[15px] hover:text-primary ease-in-out duration-200'>Refund Policy</Link>
          <p>|</p>
          <Link href={'/terms-conditions'} className='font-Jost text-gray-300 text-[15px] hover:text-primary ease-in-out duration-200'>{`Terms & Conditions`}</Link>
        </div>
       <p className='font-Jost text-[15px] text-gray-300'>{`Copyright © 2024 Ashutosh. All Rights Reserved.`}</p>
      </div>
    </div>
    </div>
  )
}

export default Footer




// import Link from 'next/link'
// import { useState } from "react";

// 
// import Image from 'next/image'
// import emailjs from "@emailjs/browser";
// import React, { useRef } from "react";
// const Footer = () => {
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
  
    
  
//     emailjs.sendForm('service_2dvdge4', 'template_b8fpnsg', form.current, 'rHRprvUIzkhHX_RhB')
//       .then((result) => {
//         alert("Message sent successfully!");
  
        
//         setName('');
      
//         setPhone('');
//       }, (error) => {
//         alert("Error sending message. Please try again.");
//       });
//   };
//   return (
//     <div className='bg-secondary text-white py-10'>
//       <div className='container mx-auto'>
//  <div className='flex flex-col justify-start md:flex-row items-start md:flex-wrap md:gap-10 gap-7 md:justify-between md:items-center px-6 lg:px-0 '>
//  <ul className='flex flex-col justify-center items-start gap-3'>
//         <div>
//           <Image src={Logo1} alt='' className='md:w-[180px] w-[160px] md:h-[100px] object-contain'/>
//         </div>
//         <p className='text-[13px]'>©4 Apr, 2024 Nscx Education India</p>
//     </ul>
//     <ul className='flex flex-col justify-center items-start gap-3'>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs'}>Home</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/md-ms-in-india'}>About us</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>CPS/FCPS</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>Career Counselling</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/contact'}>Contact US</Link></li>
//     </ul>
//     <ul className='flex flex-col justify-center items-start gap-3'>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#india'}>MD ANESTHESIA</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs-in-bangladesh'}>MD DERMATOLOGY</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#nepal'}>MD RADIOLOGY</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MD GENERAL MEDICINE</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MD PAEDIATRICS</Link></li>
//     </ul>
//     <ul className='flex flex-col justify-center items-start gap-3'>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#kazakhsthan'}>MS Orthopaedics</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#uzbekistan'}>MS Obstetrics & Gynaecology</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#poland'}>MS Ophthalmology</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MD Pulmonary / Respiratory medicine</Link></li>
//         <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MS General Surgery</Link></li>
//     </ul>
//     {/* <form  ref={form}
//              onSubmit={sendEmail}>
//     <div className='flex flex-col gap-2'>
//      <input
//       name="user_name"
           
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       required
//      type='text' placeholder='Name'  className='bg-white p-3 placeholder-black rounded-md'/>
//      <input
//      name="user_phone"
            
//      value={phone}
//      onChange={(e) => setPhone(e.target.value)}
//      required
//      type='text' placeholder='Phone'  className='bg-white p-3 placeholder-black rounded-md'/>
//     </div>
//     <div className='mt-[13px] flex justify-end items-end'>
//       <button type='submit' className='bg-[#E02B20] text-[15px] rounded-full px-3 py-2  font-[600]'>Request Now</button>
//     </div>
//     </form> */}
   
//  </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
