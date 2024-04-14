"use client"


import Link from "next/link";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import { IoClose } from "react-icons/io5";

const ContactModel = ({handleCloseContactModel, handleOpenContactModel}) => {
    
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
       <div
        id="default-modal"
        className={`${
            handleOpenContactModel ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative bg-black md:p-12 p-8 rounded-md shadow-md'>
       <div className={` w-full  px-6 py-5`}>
             <h3 className='text-white font-extrabold lg:text-[48px] text-[25px]'>Get In Touch</h3>
             <form
             ref={form}
             onSubmit={sendEmail}
             className='flex flex-col gap-3'>
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
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseContactModel}   className='text-[30px] text-white font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default ContactModel
