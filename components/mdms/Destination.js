import React from 'react'
import D1 from '../../public/d1.png'
import D2 from '../../public/d2.png'
import D3 from '../../public/d3.png'
import Image from 'next/image'
const Destination = () => {
  return (
    <div className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
            <div className='bg-secondary text-white border-2 border-primary py-10 px-5 rounded-md flex flex-col gap-5 justify-center items-center'>
<div >
<Image src={D1} alt='' className='w-full h-full object-cover'/>
</div>
<h4 className='text-[23px] font-Poppins font-[700]'>Top Destination</h4>
<p className='text-center text-[17px]'>MD/MS on india has always been first preference.</p>
            </div>
            <div className='bg-secondary py-10 px-5 text-white border-2 border-primary rounded-md flex flex-col gap-5 justify-center items-center'>
<div >
<Image src={D2} alt='' className='w-full h-full object-cover'/>
</div>
<h4 className='text-[23px] font-Poppins font-[700]'>India MD MS</h4>
<p className='text-center text-[17px]'>Having incredible record of successful students, Md/Ms in India is becoming top destination.</p>
            </div>
            <div className='bg-secondary py-10 px-5 text-white border-2 border-primary rounded-md flex flex-col gap-5 justify-center items-center'>
<div >
<Image src={D3} alt='' className='w-full h-full object-cover'/>
</div>
<h4 className='text-[23px] font-Poppins font-[700]'>A to Z Covered</h4>
<p className='text-center text-[17px]'>Our service includes from admission process, docuentation to visa and transportation.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
