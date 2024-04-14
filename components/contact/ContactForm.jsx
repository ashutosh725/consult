"use client"


import Link from "next/link";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import Image from 'next/image';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
   
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    emailjs.sendForm('service_2dvdge4', 'template_b8fpnsg', form.current, 'rHRprvUIzkhHX_RhB')
      .then((result) => {
        alert("Message sent successfully!");
  
        
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
      }, (error) => {
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-start'>
            <div className='lg:w-[50%] w-full p-6'>
                <p className='text-[14px] text-[#666666]'>Join us and embark on a transformative medical career journey. Experience the benefits of our expert guidance, extensive network, and ongoing support. Take the first step towards your professional success today.

</p>
<div className='flex justify-center items-start gap-3 pt-5'>
    <div>
        <FaLocationDot className='text-[20px]'/>
    </div>
    <div className='flex flex-col justify-start items-start gap-2'>
        <h5 className='text-[20px] font-bold text-[#333333]'> Address - Kolkata </h5>
        <p className='text-[14px] text-[#666666]'>232,E-Block,Eastern Metropolitan Bypass Link Rd, Baishnabghata Patuli Township, South End Garden, Kolkata, West Bengal 700094</p>

    </div>
</div>
<div className='flex justify-center items-start gap-3 pt-5'>
    <div>
        <FaLocationDot className='text-[20px]'/>
    </div>
    <div className='flex flex-col justify-start items-start gap-2'>
        <h5 className='text-[20px] font-bold text-[#333333]'> Address - Lucknow
 </h5>
        <p className='text-[14px] text-[#666666]'>Indranagar ,Lekhraj metro station ,goeal palace,Lekhraj market, Uttar Pradesh, 226016

</p>

    </div>
</div>
<div className='flex justify-center items-start gap-3 border-b border-b-[#333333] py-5'>
    <div>
        <FaLocationDot className='text-[20px]'/>
    </div>
    <div className='flex flex-col justify-start items-start gap-2'>
        <h5 className='text-[20px] font-bold text-[#333333]'> Address - Midnapur (W.B)
 </h5>
        <p className='text-[14px] text-[#666666]'>Gourishwar marketing complex 2nd floor, Ghatal, Kushpata, Paschim Medinipur, 721212, Ghatal, India, West Bengal

</p>

    </div>
</div>
<div className='flex justify-start items-start gap-3 border-b border-b-[#333333] py-5'>
    <div>
        <IoCall className='text-[20px]'/>
    </div>
    <div className='flex flex-col justify-start items-start gap-2'>
        <h5 className='text-[20px] font-bold text-[#333333]'> Phone
 </h5>
        <p className='text-[14px] text-[#666666]'>+917742727811

</p>

    </div>
</div>
<div className='flex justify-start items-start gap-3 py-5'>
    <div>
        <MdEmail className='text-[20px]'/>
    </div>
    <div className='flex flex-col justify-start items-start gap-2'>
        <h5 className='text-[20px] font-bold text-[#333333]'> Email
 </h5>
        <p className='text-[14px] text-[#666666]'>Nscxinfo@gmail.com

</p>

    </div>
</div>

            </div>
            <div className={`lg:w-[50%] w-full bg-black px-6 py-16`}>
             <h3 className='text-white font-extrabold lg:text-[48px] text-[25px]'>Get In Touch</h3>
             <form
             ref={form}
             onSubmit={sendEmail}
             className='flex flex-col gap-6'>
                <div>
                    <input
                    
                    name="user_name"
           
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    type='text' placeholder='Name' className='p-4 w-full bg-transparent border-[1.5px] placeholder-white text-white border-white out-of-range:'/>
                </div>
                <div>
                    <input
                    name="user_phone"
            
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type='text' placeholder='Phone' className='p-4 w-full bg-transparent border-[1.5px] placeholder-white text-white border-white out-of-range:'/>
                </div>
                <div>
                    <input
                    name="user_email"
            
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type='text' placeholder='Email Address' className='p-4 w-full bg-transparent border-[1.5px] placeholder-white text-white border-white out-of-range:'/>
                </div>
                <div>
                    <textarea
                     name="message"
            
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     required
                    type='text' placeholder='Message' cols={6} className='p-4 w-full bg-transparent border-[1.5px] row-span-6 placeholder-white text-white border-white out-of-range:'/>
                </div>

                <div className='flex justify-end items-end'>
                    <button type="submit" className='bg-[#ffd000] px-7 py-3  text-black text-[17px] font-medium uppercase'>SEND MESSAGE</button>
                </div>
             </form>
            </div>
        </div>
        <div className='flex py-20 lg:gap-[300px] ga-[200px]'>
<div>
    <Image src={'/renovation-30.png'} width={170} height={170} alt='' objectFit='contain'/>
</div>
            <div>
                <Image src={'/renovation-23.png'} width={170} height={170} alt='' objectFit='contain'/>
            </div>

        </div>
       
      </div>
      <div className='bg-black text-white flex flex-col lg:flex-row gap-20'>
            <div className=''>
                <Image src={'/STUDY-IN.png'} width={565} height={350} alt='' objectFit='contain'/>
            </div>
<div>
    <h3 className='lg:text-[48px] text-[25px] font-bold px-4'>Contact Us
</h3>
<div className='flex flex-col md:flex-row  gap-10 py-8 px-4'>
<div className='flex justify-start items-start gap-4'>
    <IoCall className='text-[25px] text-[#ffd000]'/>
    <div className='flex flex-col justify-start items-start gap-3'>
        <h5 className='text-[20px] font-bold'>Call</h5>
        <p className='text-[14px] '>+917742727811</p>
    </div>
</div>
<div className='flex justify-start items-start gap-4'>
    <MdEmail className='text-[25px] text-[#ffd000]'/>
    <div className='flex flex-col justify-start items-start gap-3'>
        <h5 className='text-[20px] font-bold'>Email</h5>
        <p className='text-[14px] '>
        Nscxinfo@gmail.com</p>
    </div>
</div>
</div>
<div className='mx-4 my-6'>
    <button className='bg-[#ffd000] py-4 px-8 uppercase font-bold text-[14px] text-black'>get a free quote</button>
</div>
</div>
        </div>
    </div>
  )
}

export default ContactForm
