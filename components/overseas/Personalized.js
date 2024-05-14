import React from 'react'

const Personalized = () => {
  return (
    <div className='bg-white shadow-lg py-20'>
      <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-3'>
            <h3 className='text-[22px]  font-Montserrat font-semibold text-[#4a1e75] '>{`Personalized Counselling:`}</h3>
            <span className='w-[150px] h-[5px] bg-[#4a1e75]'></span>
            <form className='flex flex-col gap-5 pt-10'>
            <div className='flex flex-col gap-1'>
                <label>Full Name *</label>
                <input type='text' placeholder='Enter your name' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
            <div className='flex justify-center items-center gap-3'>
            <div className='flex flex-col gap-1'>
                <label>Email *</label>
                <input type='text' placeholder='Enter your email' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>
Phone *</label>
                <input type='text' placeholder='Enter your mobile no' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
            </div>
            <div className='flex justify-center items-center gap-3'>
            <div className='flex flex-col gap-1'>
                <label>NEET Score</label>
                <input type='text' placeholder='NEET Score' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label>

                Course</label>
                <input type='text' placeholder='Course' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
           
            </div>
            <div className='flex flex-col gap-1'>
                <label>
                Message
                </label>
                <input type='text' placeholder='Message' className='outline-none py-2 border-b border-b-gray-400'/>
            </div>
            <div className='my-5'>
        <button className='text-[18px] hover:bg-white font-Jost tracking-wide rounded-ss-[20px] rounded-br-[20px] font-bold hover:text-[#4a1e75] border-[1px] border-[#4a1e75] md:py-[20px] md:px-[40px] py-[16px] px-[32px] bg-[#4a1e75] text-white shadow-xl'>Send</button>
      </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Personalized
