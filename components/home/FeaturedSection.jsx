"use client"
import { useState } from 'react';
import Link from 'next/link'
 import Pg1 from '../../public/enroll-icon.png'
 import Pg2 from '../../public/faculty-icon.png'
 import Pg3 from '../../public/franchise-icon.png'
 import Pg4 from '../../public/ui-ux-icon.png'
import Image from 'next/image'
import ContactModel from '../common/ContactModel';
const FeaturedSection = () => {
  const [contactmodel, setContactModel] = useState(false);

    const handleOpenContactModel = () => {
      setContactModel(true);
    };
  
    const handleCloseContactModel = () => {
      setContactModel(false);
    };
  return (
    <div className={`py-20`}>
    <div className='container mx-auto'>
       <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
     <div className='lg:w-[40%] w-full flex flex-col lg:justify-start lg:items-start justify-center items-center'>
      <h3 className='text-[#4a1e75] font-Jost font-[600] md:text-[36px] text-[22px]'>Welcome to Nscx Education </h3>
      <p className='md:text-[16px] text-[14px] font-[400px] font-Poppins text-[#4a1e75] pt-5'>Nscx Education  is a <span className='font-bold'>Medical Education Consultancy</span> providing a professional platform for students seeking career assistance, guidance and support. We assist students seeking admission to Medical PG courses and Medical UG courses like <span className='font-bold'>MBBS, MS, MD, BDS, MDS</span> etc. in India and Abroad. </p>
      <div className='mt-9'>
        <Link href={'/about'} className='text-[18px] font-Jost tracking-wide rounded-ss-[20px] rounded-br-[20px] font-bold text-[#4a1e75] border-[1px] border-[#4a1e75] md:py-[20px] md:px-[40px] py-[16px] px-[32px] hover:bg-[#4a1e75] hover:text-white shadow-xl'>Learn More</Link>
      </div>
     </div>
     <div className='lg:w-[60%] w-full flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center'>
      <div className='lg:w-[50%] w-full bg-[#ffda00] flex flex-col justify-center items-center gap-5  rounded-tr-[40px]'>
<div className='pt-10'>
  <Image src={Pg1} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#4a1e75] text-[18px] font-Poppins'>NEET PG Counselling</p>
<div>
  <button  className='px-5 py-2 rounded-lg bg-[#4a1e75] text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
<div className='flex flex-col gap-5 justify-center items-center bg-[#4a1e75] w-full  rounded-tr-[40px]'>
<div className='pt-10'>
  <Image src={Pg2} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-white text-[18px] font-Poppins'>Overseas Medical Education</p>
<div className='pb-6'>
  <Link href={'/overseas-education'} className='px-5 py-2 rounded-lg bg-[#ffda00]  text-white shadow-lg font-bold text-[20px]'>{`>>`}</Link>
</div>
</div>
      </div>
      <div className='lg:w-[50%]   w-full  bg-[#4a1e75] flex flex-col justify-center items-center gap-5  rounded-tl-[40px]'>
      <div className='pt-10'>
  <Image src={Pg3} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#FFF] text-[18px] font-Poppins'>NEET UG Counselling</p>
<div>
  <button onClick={handleOpenContactModel} className='px-5 py-2 rounded-lg  bg-[#ffda00] text-white shadow-lg font-bold text-[20px]'>{`>>`}</button>
</div>
<div className='flex flex-col gap-5 justify-center items-center bg-[#ffda00] w-full  rounded-tl-[40px]'>
<div className='pt-10'>
  <Image src={Pg4} alt='' className='object-cover w-full h-full'/>
</div>
<p className='text-[#4a1e75] text-[18px] font-Poppins'>Enroll With Us</p>
<div className='pb-6'>
  <Link href={'/application'} className='px-5 py-2 rounded-lg bg-[#4a1e75]  text-white shadow-lg font-bold text-[20px]'>{`>>`}</Link>
</div>
</div>
      </div>
     </div>
       </div>
    </div>
    {contactmodel && <ContactModel handleCloseContactModel={handleCloseContactModel} handleOpenContactModel={handleOpenContactModel}/>}
    </div>
  )
}

export default FeaturedSection
