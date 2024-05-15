"use client"
import Link from 'next/link'
import { useState } from "react";

import Logo1 from '../../public/logos.png'
import Image from 'next/image'
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
const Footer = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    
  
    emailjs.sendForm('service_2dvdge4', 'template_b8fpnsg', form.current, 'rHRprvUIzkhHX_RhB')
      .then((result) => {
        alert("Message sent successfully!");
  
        
        setName('');
      
        setPhone('');
      }, (error) => {
        alert("Error sending message. Please try again.");
      });
  };
  return (
    <div className='bg-secondary text-white py-10'>
      <div className='container mx-auto'>
 <div className='flex flex-col justify-start md:flex-row items-start md:flex-wrap md:gap-10 gap-7 md:justify-between md:items-center px-6 lg:px-0 '>
 <ul className='flex flex-col justify-center items-start gap-3'>
        <div>
          <Image src={Logo1} alt='' className='md:w-[180px] w-[160px] md:h-[100px] object-contain'/>
        </div>
        <p className='text-[13px]'>©4 Apr, 2024 Nscx Education India</p>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs'}>Home</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/md-ms-in-india'}>About us</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>CPS/FCPS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>Career Counselling</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/contact'}>Contact US</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#india'}>MD ANESTHESIA</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs-in-bangladesh'}>MD DERMATOLOGY</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#nepal'}>MD RADIOLOGY</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MD GENERAL MEDICINE</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MD PAEDIATRICS</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#kazakhsthan'}>MS Orthopaedics</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#uzbekistan'}>MS Obstetrics & Gynaecology</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#poland'}>MS Ophthalmology</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MD Pulmonary / Respiratory medicine</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MS General Surgery</Link></li>
    </ul>
    {/* <form  ref={form}
             onSubmit={sendEmail}>
    <div className='flex flex-col gap-2'>
     <input
      name="user_name"
           
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
     type='text' placeholder='Name'  className='bg-white p-3 placeholder-black rounded-md'/>
     <input
     name="user_phone"
            
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
     required
     type='text' placeholder='Phone'  className='bg-white p-3 placeholder-black rounded-md'/>
    </div>
    <div className='mt-[13px] flex justify-end items-end'>
      <button type='submit' className='bg-[#E02B20] text-[15px] rounded-full px-3 py-2  font-[600]'>Request Now</button>
    </div>
    </form> */}
   
 </div>
      </div>
    </div>
  )
}

export default Footer
