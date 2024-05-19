import React from 'react'
import Ab1 from '../../public/three-couples-walking-after-school_329181-8459.jpg';
import Ab2 from '../../public/student-sharing-her-knowledge-with-her-colleagues_329181-8498.jpg';
import Image from 'next/image';
const AboutSection = () => {
  return (
    <div>
   <div className='container mx-auto'>
    <h2 className='text-center font-Jost font-bold text-[#4a1e75] md:text-[44px] text-[26px] py-5'>Welcome To Nscx Education</h2>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        <div className='lg:w-[50%] w-full'>
<p className='text-[14px] font-Poppins  text-justify'>{`Nscx Education  is a Medical Education Consultancy providing a professional platform for students seeking career assistance, guidance and support. We assist students seeking admission to Medical PG and  Medical UG courses in India and Abroad. `}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`We provide services like Career Counselling, University Selection, Overseas Education, Visa Assistance, Financial Assistance and Travel Assistance. With years of expertise and professional acumen we shape & pave the way for students seeking new avenue for higher studies.`}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`We as a team are dedicated for exploring various study abroad options for the students, having the desire to study overseas. Nscx Education  offers something for everyone who seeks to focus on developing new skills, increase their knowledge base and keep up to date with developments within their particular areas of expertise. We are specialized in the medical education and have many universities of repute as our partners. Nscx Education  is an exclusive platform for medical aspirants taking them to their destination.`}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`Being focused and dedicated in the field of education we also assists those who are looking for a medical qualification overseas that can be used as a stepping-stone as well as those looking to develop their skill set to enhance their career opportunities in today’s competitive global market.`}</p>
        </div>
        <div className='lg:w-[50%] w-full'>
<div>
    <Image src={Ab2} alt='' className='w-full h-full object-cover'/>
</div>
        </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6 py-10'>
    <div className='lg:w-[50%] w-full'>
<div>
    <Image src={Ab1} alt='' className='w-full h-full object-cover'/>
</div>
        </div>
        <div className='lg:w-[50%] w-full'>
<p className='text-[14px] font-Poppins  text-justify'>{`Nscx Education  tend to work with transparency help to solve all queries, providing personal guidance to the students for the right program and the right institution as per their choice, financial profile & future career plans, etc. We also assist parents and students with educational planning. `}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`The right institution is essential to your career development method we help to match you right.`}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`Nscx Education  has a very experienced and professional team of counselors who would help the students choose their field of interest in a friendly and informative way, right from application, we tend to look out of everything obtaining medical admissions abroad, the visa and all other formalities, travel arrangements, forex & day to day requirement within the institute. We serve the students and parents right from initial counseling, Institute / University selection stage to the ultimate admission. We also take responsibility of all necessary help as and when required till completion of the complete program. You plan your studies and rest of all will be taken care of.`}</p>
<p className='text-[14px] font-Poppins pt-5 text-justify'>{`We welcome you to the world of higher education to seek guidance from team Nscx Education .`}</p>
        </div>
       
    </div>
   </div>
    </div>
  )
}

export default AboutSection
