import React from 'react'
import Image from "next/image";
import C1 from '../../public/kkk.png'
import C2 from '../../public/tele-health-care_icon.png'
import C3 from '../../public/tele-health-care_ico.png'
import C4 from '../../public/tele-health-care_i.png'
import C5 from '../../public/tele-health.png'
import C6 from '../../public/tele-health-car.png'
const Experience = () => {
  return (
    <div className='bg-[#abb8c3] py-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C1} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Comprehensive Support</h5>
<p className='text-[14px]'>We offer comprehensive support throughout the entire admission process, from university selection to application assistance, document preparation, and visa guidance.</p>
</div>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C2} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Extensive Experience
</h5>
<p className='text-[14px]'>We have years of experience in assisting students with MD/MS admissions, understanding the intricacies of the process and providing valuable guidance.</p>
</div>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C3} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Ongoing Assistance
</h5>
<p className='text-[14px]'>Our support doesn’t end with admission. We provide continuous assistance, including pre-departure guidance, accommodation support, and any additional help needed during your MD/MS journey.</p>
</div>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C4} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Strong Network
</h5>
<p className='text-[14px]'>We have established connections and collaborations with top medical universities, enabling us to recommend reputable institutions that offer quality MD/MS programs.</p>
</div>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C5} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Individual Attention
</h5>
<p className='text-[14px]'>We provide individual attention to each student, understanding their unique requirements and offering tailored solutions to maximize their chances of admission.</p>
</div>
<div className='bg-white flex flex-col justify-start items-start p-7 gap-5 rounded-md shadow-md'>
<div>
    <Image src={C6} alt='' className=' w-full h-full object-contain'/>
</div>
<h5 className='text-[#003e51] text-[15px] tracking-wide font-bold'>
Expert Guidance</h5>
<p className='text-[14px]'>Our team of expert consultants provides personalized guidance, ensuring that you make informed decisions and choose the right MD/MS program that aligns with your career goals.</p>
</div>

        </div>
      </div>
    </div>
  )
}

export default Experience
