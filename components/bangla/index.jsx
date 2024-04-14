import React from 'react'
import Image from "next/image";
import Dd from '../../public/Screenshot_41-removebg-preview.png'
import T1 from '../../public/doc.png'
import T2 from '../../public/doc2.png'
import T3 from '../../public/family-doctor-icon-2-green.png'


const Bangla = () => {
  return (
    <div className='bg-[#f9f6f5] py-20'>
    <div className='container mx-auto'>
<div className='flex flex-col justify-between items-center gap-10 lg:flex-row '>
    <div className='lg:w-[50%] w-full'>
        <h3 className='lg:text-[55px] text-[20px] font-extrabold text-[#005450]'>MBBS in Bangladesh</h3>
        <p className='text-[16px] font-medium tracking-wide'>{`Explore a world of medical opportunities abroad. Unlock global perspectives, top-notch education, and a rewarding international medical career.`}</p>
        <div className='flex flex-col justify-center items-start gap-5 py-7 w-full'>
                <div className='flex gap-3'>
                  
                   <div>
                        <Image src={T1} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Be a Human Supporter</h5>
                        <p className='text-[16px] font-medium tracking-wide'>Become a doctor and be a compassionate human supporter, providing care, comfort, and healing to those in need.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T2} alt='' className=' w-[160px] h-[160px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Prestigious Career</h5>
                        <p className='text-[16px] font-medium tracking-wide'>Holding an MBBS degree is a mark of prestige and signifies your dedication and expertise in the field of medicine. It provides a strong foundation for a fulfilling and respected career as a healthcare professional.</p>
                    </div>
                </div>
               
                
            </div>
    </div>
   <div className='lg:w-[50%] lg:pl-20 pl-0 w-full'>
   <div>
        <Image src={Dd} alt='' className='w-[351px] h-[457px] object-cover'/>
    </div>
   </div>
</div>
    </div>
    </div>
  )
}

export default Bangla
