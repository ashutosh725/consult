import Image from 'next/image'
import React from 'react'
import AA from '../../public/family-doctor-04-1.jpg'
import Ak from '../../public/online-classroom-03.png'
import FaqList from './FaqList'

const Faq = () => {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div  className='lg:w-[50%] w-full h-full'>
          <div className=''>
            <Image src={AA} alt='' className='w-full h-full object-cover'/>
          </div>
        </div>
        <div  className='lg:w-[50%] flex flex-col justify-center items-center gap-5 w-full h-full '>
         <h3 className='lg:text-[40px] text-[25px] font-extrabold mx-10'>NEET Result – 2024
</h3>
<div className='mx-10'>
  <Image src={Ak} alt='' className='w-[244px] h-full object-cover'/>
</div>
<FaqList/>
        </div>
      </div>
    </div>
  )
}

export default Faq
