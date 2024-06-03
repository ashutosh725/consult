import Link from 'next/link';
import React from 'react'
import { IoClose } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
const EnquryForm2 = ({handleCloseForm2Model, handleForm2Model}) => {
  return (
    <div>
       <div
        id="default-modal"
        className={`${
            handleForm2Model ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative bg-white h-full  md:p-12 p-8 rounded-md shadow-md'>
       <div className='flex justify-center items-center flex-col gap-3'>
         <IoCall className='text-[30px] font-bold text-[#1b5fc1] '/>
        <h3 className='text-[22px] text-[#1b5fc1] text-center font-Poppins'>GET A CALL BACK</h3>
       </div>
  <div>
    <form className=' flex flex-col gap-5 p-5'>
        <div className='flex flex-col gap-2'>
           
            <input type='text' placeholder='Name' className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div className='flex flex-col gap-2'>
        
            <input type='number' placeholder={`Mobile Number (10Digit)`} className='outline-none bg-[#1b5fc1] p-3 placeholder:text-gray-400 rounded-xl '/>
        </div>
        <div>
            <button className='text-white w-full bg-green-500  py-2 rounded-xl hover:bg-pink-500'>Send</button>
        </div>
    </form>
    <div>
        <h3 className='text-[40px] text-center pt-6'>
            OR
        </h3>
    </div>
    <div className='mt-10'>
    <Link href="tel:+917742727811" className='text-white w-full bg-black/50  py-2 rounded-xl '>Click here To Call Directly</Link>
    </div>
  </div>
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseForm2Model}   className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default EnquryForm2
