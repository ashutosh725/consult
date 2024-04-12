"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Box = () => {
  const router = useRouter();

  const handlebtn1 = ()=>{
    router.push('/')
  }
  const handlebtn2 = ()=>{
    router.push('/')
  }
  const handlebtn3 = ()=>{
    router.push('/')
  }
  const handlebtn4 = ()=>{
    router.push('/')
  }
  const handlebtn5 = ()=>{
    router.push('/')
  }

  return (
    <div className='pt-16 pb-8'>
      <div className='container mx-auto'>
        <div className='flex lg:justify-between justify-center items-center gap-5 flex-wrap'>
            <div>
                <button onClick={handlebtn1} className='bg-[#fb641b] hover:scale-105 duration-500 transition-all rounded-md text-center px-5 lg:w-[195px] w-full h-full py-3 lg:py-0 lg:h-[84px] text-white text-[20px]'>UG Medical & Denta Counselling</button>
            </div>
            <div>
                <button onClick={handlebtn2} className='bg-[#7f19e6] hover:scale-105 duration-500 transition-all rounded-md text-center px-5 lg:w-[195px] w-full h-full py-3 lg:py-0 lg:h-[84px] text-white text-[20px]'>PG Medical counselling</button>
            </div>
            <div>
                <button onClick={handlebtn3} className='bg-[#e619a1] hover:scale-105 duration-500 transition-all rounded-md text-center px-5 lg:w-[195px] w-full h-full py-3 lg:py-0 lg:h-[84px] text-white text-[20px]'>PG Dental Counselling</button>
            </div>
            <div>
                <button onClick={handlebtn4} className='bg-[#00b300] hover:scale-105 duration-500 transition-all rounded-md text-center px-5 lg:w-[195px] w-full h-full py-3 lg:py-0 lg:h-[84px] text-white text-[20px]'>UG AYUSH Counselling</button>
            </div>
            <div>
                <button onClick={handlebtn5} className='bg-[#fb641b] hover:scale-105 duration-500 transition-all rounded-md text-center px-5 lg:w-[195px] w-full h-full py-3 lg:py-0 lg:h-[84px] text-white text-[20px]'> PG AYUSH Counselling</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Box
