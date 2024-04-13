"use client"
import Link from 'next/link'
import { useState } from "react";

import Logo1 from '../../public/kkkk.png'
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
    <div className='bg-[#0d4d4c] text-white py-10'>
      <div className='container mx-auto'>
 <div className='flex flex-wrap gap-10 justify-between items-center '>
 <ul className='flex flex-col justify-center items-start gap-3'>
        <div>
          <Image src={Logo1} alt='' className='w-[180px] h-[100px] object-contain'/>
        </div>
        <p className='text-[13px]'>©4 Apr, 2024 Nscx Education India</p>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs'}>MBBS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/md-ms-in-india'}>MD/MS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>CPS/FCPS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/contact'}>Contact US</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#india'}>MBBS in India</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#bangladesh'}>MBBS in Bangladesh</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#nepal'}>MBBS in Nepal</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MBBS in Philippines</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#kazakhsthan'}>MBBS in Kazakhstan</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#uzbekistan'}>MBBS in Uzbekistan</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#poland'}>MBBS in Poland</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MBBS in Russia</Link></li>
    </ul>
    <form  ref={form}
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
    </form>
   
 </div>
      </div>
    </div>
  )
}

export default Footer
