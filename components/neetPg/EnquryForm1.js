import Link from 'next/link';
import React from 'react'
import { IoClose } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

const EnquryForm1 = ({handleCloseForm1Model, handleForm1Model}) => {
  return (
    <div>
       <div
        id="default-modal"
        className={`${
            handleForm1Model ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative bg-white h-[600px] overflow-y-scroll  md:p-12 p-8 rounded-md shadow-md'>
       <div className='flex justify-center items-center flex-col gap-3'>
         <RiAdminLine className='text-[20px] font-bold text-[#1b5fc1] '/>
        <h3 className='text-[22px] text-[#1b5fc1] text-center font-Poppins'>ENQUIRY</h3>
       </div>
  <div>
    <form className=' flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>Name</label>
            <input type='text' placeholder='Name' className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>{`Mobile Number (10Digit)`}</label>
            <input type='number' placeholder={`Mobile Number (10Digit)`} className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>{`Email ID`}</label>
            <input type='text' placeholder='Email ID' className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>{`NEET Score`}</label>
            <input type='number' placeholder='NEET Score' className='outline-none bg-[#1b5fc1] p-3  placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>QUOTA</label>
            <div>
                <select
                  name='course_type'
                  id='course_type'
            
              
                  className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 text-gray-400 rounded-xl'
                >
                  <option value='' hidden>
                  MCC
                  </option>
                  <option value='web-development'>MCC</option>
                  <option value='Mern-Stack-Development'>ALL INDIA</option>
                  <option value='Graphic-Design'>DEEMED UNIVERCITY</option>
                  <option value='Digital-Marketing'>MANAGEMENT</option>
                  <option value='Mobile-App-Development'>NRI</option>
                  <option value='Web-Design'>{`(IP) INSTITUTION PREFERENCE BHU/AMU `}</option>
                </select>
              </div>
        </div>
        <div className='flex flex-col gap-2'>
            <label className='text-[18px] font-Poppins'>Counselling</label>
            <div>
                <select
                  name='course_type'
                  id='course_type'
            
              
                  className='outline-none bg-[#1b5fc1] p-3 w-full placeholder:text-gray-400 text-gray-400 rounded-xl'
                >
                  <option value='' hidden>
                  Radiology
                  </option>
                  <option value='web-development'>Radiology</option>
                  <option value='Mern-Stack-Development'>General Surgery</option>
                  <option value='Graphic-Design'>General medicine </option>
                  <option value='Digital-Marketing'>Pediatrics</option>
                  <option value='Mobile-App-Development'>OBS, & Gynaecology</option>
                  <option value='Web-Design'>{`Anaesthesia`}</option>
                  <option value='Web-Design'>{`Ophthalmology`}</option>
                  <option value='Web-Design'>{`Dermatology`}</option>
                  <option value='Web-Design'>{`TB & Chest`}</option>
                  <option value='Web-Design'>{`Non Clinical`}</option>
                  <option value='Web-Design'>{`Others`}</option>
                </select>
              </div>
        </div>
        <div>
            <button className='text-white w-full bg-green-500  py-2 rounded-xl hover:bg-pink-500'>Submit</button>
        </div>
    </form>
  </div>
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseForm1Model}   className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default EnquryForm1
