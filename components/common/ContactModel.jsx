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
    const [course, setCourse] = useState('');
    const [city, setCity] = useState('');
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
       <div className='relative bg-gradient-to-r from-cyan-500 to-blue-700 md:p-12 p-8 rounded-md shadow-md'>
       <div className={` w-full  px-6 py-5`}>
            
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
                    type='text' placeholder='Your Name*' className='px-4 py-2 w-full bg-white   shadow-md rounded-md out-of-range: outline-none'/>
                </div>
               
                <div>
                    <input
                    name="user_email"
            
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type='text' placeholder='Your Email Address' className='px-4 py-2 w-full bg-white   shadow-md rounded-md out-of-range: outline-none'/>
                </div>
                <div>
                    <input
                    name="user_phone"
            
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type='text' placeholder='Your Mobile Number*' className='px-4 py-2 w-full bg-white   shadow-md rounded-md out-of-range: outline-none'/>
                </div>
                <div>
                <select
                  name='course_type'
                  id='course_type'
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className='ring-1 text-gray-500 ring-gray-300 w-full rounded-md px-4 py-2  outline-none focus:ring-2 focus:ring-teal-300'
                >
                  <option value='' hidden>
                   Select State
                  </option>
                  <option value='web-development'>Andaman and Nicobar</option>
                  <option value='Mern-Stack-Development'>Andhra Pradesh</option>
                  <option value='Graphic-Design'>Arunachal Pradesh</option>
                  <option value='Digital-Marketing'>Assam</option>
                  <option value='Mobile-App-Development'>Bihar</option>
                  <option value='Web-Design'>Chandigarh</option>
                  <option value='web-development'>Chhattisgrah</option>
                  <option value='web-development'>Dadra And Nagar Haveli</option>
                  <option value='web-development'>Daman And Diu</option>
                  <option value='web-development'>Delhi</option>
                  <option value='web-development'>Goa</option>
                  <option value='web-development'>Gujarat</option>
                  <option value='web-development'>Haryana</option>
                  <option value='web-development'>Himachal Pradesh</option>
                  <option value='web-development'>Jammu and Kashmir</option>
                  <option value='web-development'>Jharkhand</option>
                  <option value='web-development'>Karnataka</option>
                  <option value='web-development'>Kerala</option>
                  <option value='web-development'>Ladakh</option>
                  <option value='web-development'>Lakshadweep</option>
                  <option value='web-development'>Madhya Pradesh</option>
                  <option value='web-development'>Maharashtra</option>
                  <option value='web-development'>Manipur</option>
                  <option value='web-development'>Meghalaya</option>
                  <option value='web-development'>Mizoram</option>
                  <option value='web-development'>Nagaland</option>
                  <option value='web-development'>Odisha</option>
                  <option value='web-development'>Puducherry</option>
                  <option value='web-development'>Punjab</option>
                  <option value='web-development'>Rajasthan</option>
                    <option value='web-development'>Sikkim</option>
                  <option value='web-development'>Tamil Nadu</option>
                  <option value='web-development'>Telangana</option>
                  <option value='web-development'>Tripura</option>
                  <option value='web-development'>Uttar Pradesh</option>
                  <option value='web-development'>Uttarakhand</option>
                  <option value='web-development'>West Bengal</option>
                </select>
              </div>
              
              <div>
                    <input
                    name="user_phone"
            
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    type='text' placeholder='Enter Your City*' className='px-4 py-2 w-full bg-white   shadow-md rounded-md out-of-range: outline-none'/>
                </div>
              <div className="flex items-center ">
  <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="default-checkbox" className="ms-2 text-base font-medium text-white dark:text-gray-300">{`You Shall Receive Brochures, Fees Structure of Requested College or Country on WhatsApp & Email.`}</label>
</div>
<div>
  <p className="text-white pl-5"><span className="font-bold">Note :</span> Be Assured we Do not share your contact details, we respect your privacy.</p>
</div>

                <div className=''>
                    <button type="submit" className='bg-[#ffd000] px-7 py-3 w-full rounded-md text-black text-[17px] font-medium uppercase'>Submit</button>
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
