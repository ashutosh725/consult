"use client"
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'
import { IoClose } from "react-icons/io5";

const StockModel = ({handleCloseStockModel, handleOpenStockModel, item}) => {

  return (
    <div>
       <div
        id="default-modal"
        className={`${
            handleOpenStockModel ? 'flex' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] bg-[rgba(0,0,0,0.40)] max-h-full`}
      >
       <div className='relative   bg-white md:p-12 p-8 rounded-md shadow-md'>
       
    <div className='flex   justify-center items-center pt-5 gap-10'>
   
  <div  className='w-full lg:w-[50%]'>
    <div>
        <Image src={item.img} alt='' className='w-full h-full object-cover'/>
    </div>
  </div>
  <div  className='w-full lg:w-[50%]'>
    <h4 className='text-[25px] font-semibold font-Jost'>Neet UG 2024 {item.Title} Counselling Guidance E-Book</h4>
    <p>{item.description}</p>
    <p className='py-3'>{item.price}</p>
    <div className='flex justify-center items-center mt-6 gap-10'>
      <button  className='py-2 px-5 bg-black text-white rounded-md'>Add To Cart</button>
      <button  className='py-2 px-5 bg-black text-white rounded-md'>Download E-Book</button>
    </div>
  </div>

    </div>
       <div className='absolute top-2 right-1 ' >
        <IoClose onClick={handleCloseStockModel}   className='text-[30px] font-bold cursor-pointer'/>
       </div> 
       </div>
       
   
      </div>
    </div>
  )
}

export default StockModel
