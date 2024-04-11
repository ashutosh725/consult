import React from 'react'
import Www from '../../public/2166079.jpg'
import Image from "next/image";
import T1 from '../../public/tt.png'
import T2 from '../../public/ee.png'
import T3 from '../../public/mm.png'
import T4 from '../../public/nn.png'
const Adavantages = () => {
  return (
    <div className={`bg-[url('/family-doctor-background-15.png')]  bg-center pt-10 lg:pt-0 pb-20`}>
    <div className='container mx-auto'>
        <h3 className='text-center lg:text-[45px] text-[20px] font-bold text-[#333333]'>Adavantages of CPS & FCPS<br/> Courses</h3>
        <div className='flex flex-col lg:flex-row justify-center items-center pt-7 gap-10'>
           <div className='lg:w-[30%] w-full'>
           <div className='flex justify-center items-center'>
                <Image src={Www} alt='' className='w-[320px] h-[474px] object-cover'/>
            </div>
           </div>
            <div className='flex flex-col gap-5 lg:w-[70%] w-full'>
                <div className='flex gap-3'>
                  
                   <div>
                        <Image src={T1} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Specialized Expertise</h5>
                        <p className='text-[14px] tracking-wide'>CPS and FCPS courses provide in-depth knowledge and specialized expertise in specific medical disciplines, allowing healthcare professionals to become experts in their chosen field.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T2} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Career Advancement</h5>
                        <p className='text-[14px] tracking-wide'>CPS and FCPS qualifications open up new career opportunities and improve prospects for career advancement, including access to higher-level positions, leadership roles, and academic positions.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T3} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Recognized Credentials</h5>
                        <p className='text-[14px] tracking-wide'>Completion of CPS or FCPS courses enhances professional credibility and provides recognized credentials that are valued by employers, institutions, and the medical community.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T4} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Continued Professional Development</h5>
                        <p className='text-[14px] tracking-wide'>These courses offer a platform for continuous learning and professional development, enabling healthcare professionals to stay updated with the latest advancements, research, and best practices in their respective fields.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </div>
  )
}

export default Adavantages
