"use client"
import { useRouter } from 'next/navigation'
import Lg from '../../public/lg.png'
import Mg from '../../public/mg.png'
import Pg from '../../public/pg.png'
import Image from 'next/image'
const FeaturedSection = () => {
  const router = useRouter();
  const handlebtn7 = ()=>{
    router.push('/contact')
  }
  return (
    <div className={`bg-[url('/about-bg.jpg')] bg-cover pb-20 pt-5`}>
    <div className='container mx-auto'>
       <div className='flex flex-col justify-center items-center'>
       <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 '>
         <div className='bg-[#8300E9] text-white flex flex-col justify-center items-center gap-5 p-10'>
          <div>
            <Image src={Lg} alt='' className='w-full h-full object-contain'/>
            </div> 
          <h3 className='text-[22px] font-bold text-center'>MBBS ADMISSION GUIDANCE
</h3>
<p className='text-[14px] font-medium text-center'>Expert guidance for MBBS admissions. Unlock your potential, secure a spot in a reputable medical university.

</p>
         </div>
         <div className='bg-[#EDF000] text-[#000000] flex flex-col justify-center items-center gap-5 p-10'>
         <div>
            <Image src={Mg} alt='' className='w-full h-full object-contain'/>
            </div>
          <h3 className='text-[22px] font-bold text-center'>100% ADMISSION ASSURANCE
</h3>
<p className='text-[14px] font-medium text-center'>100% assurance for MBBS admission. Your dream of pursuing a medical career becomes a reality with our guarantee.

</p>
         </div>
         <div className='bg-[#0c1829] text-white flex flex-col justify-center items-center gap-5 p-10'>
         <div>
            <Image src={Pg} alt='' className='w-full h-full object-contain'/>
            </div>
          <h3 className='text-[22px] font-bold text-center'>OVEREAS ADMISSION
</h3>
<p className='text-[14px] font-medium text-center'>Expert guidance for overseas admissions. Unlock international opportunities and secure admission in prestigious universities with our assistance.

</p>
         </div>
        </div>
        <p className='text-[20px] font-bold text-center mb-8 pt-16'>EXPERIENCE OUR WORLD-CLASS MBBS ADMISSION GUIDANCE AND COMPREHENSIVE SUPPORT FOR PURSUING AFFORDABLE MBBS EDUCATION ABROAD. EXPLORE THE OPPORTUNITY TO STUDY MBBS ABROAD WITH OUR COST-EFFECTIVE PACKAGES.</p>
        <button onClick={handlebtn7} className='bg-[#8300E9] text-[16px] font-medium tracking-wide text-white rounded-full py-3 px-6'>CALL BACK REQUEST</button>
       </div>
    </div>
    </div>
  )
}

export default FeaturedSection
