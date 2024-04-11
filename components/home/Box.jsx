import React from 'react'

const Box = () => {
  return (
    <div className='pt-16 pb-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center gap-5 flex-wrap'>
            <div>
                <button className='bg-[#fb641b] hover:scale-105 duration-500 transition-all rounded-md text-center px-3 w-[195px] h-[84px] text-white text-[20px]'>UG Medical & Denta Counselling</button>
            </div>
            <div>
                <button className='bg-[#7f19e6] hover:scale-105 duration-500 transition-all rounded-md text-center px-3 w-[195px] h-[84px] text-white text-[20px]'>PG Medical counselling</button>
            </div>
            <div>
                <button className='bg-[#e619a1] hover:scale-105 duration-500 transition-all rounded-md text-center px-3 w-[195px] h-[84px] text-white text-[20px]'>PG Dental Counselling</button>
            </div>
            <div>
                <button className='bg-[#00b300] hover:scale-105 duration-500 transition-all rounded-md text-center px-3 w-[195px] h-[84px] text-white text-[20px]'>UG AYUSH Counselling</button>
            </div>
            <div>
                <button className='bg-[#fb641b] hover:scale-105 duration-500 transition-all rounded-md text-center px-3 w-[195px] h-[84px] text-white text-[20px]'> PG AYUSH Counselling</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Box
