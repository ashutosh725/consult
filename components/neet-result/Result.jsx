import React from 'react'

const Result = () => {
  return (
    <div className=' py-10'>
      <div className='container mx-auto'>
      <div>
                <h3 className='text-[23px] text-start font-[700] text-black tracking-wide  pt-5'>{`View Result`}</h3>
                <form className='flex flex-col gap-7 w-full py-3'>
                   <div className='flex justify-between items-center gap-10  w-full'>
                   <div className='w-full'>
                        <input type='text' placeholder='Name' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                        
                    </div>
                    
                    <div className='w-full'>
                        <input type='text' placeholder='Email Address' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                   </div>
                   <div className='flex justify-between items-center gap-10 w-full'>
                   <div className='w-full'>
                        <input type='text' placeholder='Phone' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                        
                    </div>
                    
                    <div className='w-full'>
                        <input type='text' placeholder='Date of Birth' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                   </div>
                    <div>
                        <input type='text' placeholder='Application Number'  className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                  
                </form>
                <div className='flex justify-end items-end my-5'>
<button  className='bg-primary rounded-full tracking-wide px-6 py-3 text-white text-[20px] shadow-lg font-medium'>Submit</button>
        </div>
                </div>
      </div>
    </div>
  )
}

export default Result
