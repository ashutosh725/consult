import React from 'react'
import Cv from '../../public/cv.png'
import Image from "next/image";
const Mission = () => {
  return (
    <div className={`bg-[url('/family-doctor-031.png')] bg-cover  bg-center  py-20`}>
      <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
<div className='lg:w-[50%] w-full'>
<Image src={Cv} alt=' ' className='w-full h-full object-contain'/>
</div>
<div className='lg:w-[50%] w-full flex flex-col justify-start items-start gap-3'>
<h5 className='text-[#002725] text-[20px] font-bold'>Our Mission</h5>
<p className='text-[16px]'>Our mission is to empower aspiring medical professionals with the opportunity to pursue MBBS education abroad, providing them with a global perspective, exceptional education, and a platform to become compassionate healthcare leaders.

</p>
<h5 className='text-[#002725] text-[20px] font-bold'>Our  Vision</h5>
<p className='text-[16px]'>Our vision is to be a leading facilitator in connecting students with renowned international medical universities, enabling them to fulfill their dreams of studying MBBS abroad. We aim to contribute to the development of skilled and culturally diverse doctors who can make a positive impact on global healthcare.

</p>
<div>
<button className='bg-[#2e987d] rounded-full tracking-wide px-9 py-3 text-white text-[16px] font-medium'>JOIN WITH US</button>
</div>
</div>
</div>
      </div>
    </div>
  )
}

export default Mission
