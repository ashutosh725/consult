import React from 'react'
import Image from "next/image";
import Dd from '../../public/family-doctor-04-1.jpg'
import T1 from '../../public/family-doctor-icon-3-green.png'
import T2 from '../../public/family-doctor-icon-13-green.png'
import T3 from '../../public/family-doctor-icon-2-green.png'


const Eligibility = () => {
  return (
    <div className='bg-[#f9f6f5] py-20'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row '>
    <div className='lg:w-[45%] w-full'>
        <h3 className='lg:text-[40px] text-[20px] font-bold text-[#005450]'>Eligibility Criteria for FCPS and CPS Admission</h3>
        <p className='text-[16px]'>{`It’s important to note that specific admission criteria may vary slightly between different institutions or specialties, so it’s recommended to consult the official websites or admissions offices for accurate and up-to-date information.`}</p>
        <div className='flex flex-col justify-start items-center gap-5 py-7 w-full'>
                <div className='flex gap-3'>
                  
                   <div>
                        <Image src={T1} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>MBBS Degree</h5>
                        <p className='text-[14px] tracking-wide'>The applicant must have an MBBS degree or an equivalent degree recognized by the Medical Council of India.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T2} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Clinical Experience</h5>
                        <p className='text-[14px] tracking-wide'>Many CPS and FCPS programs require candidates to have a minimum period of clinical experience, typically in the form of an internship or post-graduate training, to demonstrate practical exposure and competence in their field of study.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T3} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Entrance Exams</h5>
                        <p className='text-[14px] tracking-wide'>Applicants are required to clear the entrance examination conducted by the respective colleges or institutions offering CPS or FCPS programs. </p>
                    </div>
                </div>
                
            </div>
    </div>
   <div className='lg:w-[55%] w-full'>
   <div>
        <Image src={Dd} alt='' className='w-full h-full object-cover'/>
    </div>
   </div>
</div>
    </div>
    </div>
  )
}

export default Eligibility
