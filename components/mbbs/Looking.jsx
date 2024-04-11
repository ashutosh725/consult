import React from 'react'
import Image from "next/image";
import Dd from '../../public/Untitled-design-25.png'
import T1 from '../../public/family-doctor-icon-3-green.png'
import T2 from '../../public/family-doctor-icon-13-green.png'
import T3 from '../../public/family-doctor-icon-2-green.png'


const Looking = () => {
  return (
    <div className='bg-[#f9f6f5] py-20'>
    <div className='container mx-auto'>
<div className='flex flex-col lg:flex-row '>
    <div className='lg:w-[50%] w-full'>
        <h3 className='lg:text-[40px] text-[20px] font-bold text-[#005450]'>Looking for MBBS ?</h3>
        <p className='text-[16px]'>{`Explore a world of medical opportunities abroad. Unlock global perspectives, top-notch education, and a rewarding international medical career.`}</p>
        <div className='flex flex-col justify-start items-center gap-5 py-7 w-full'>
                <div className='flex gap-3'>
                  
                   <div>
                        <Image src={T1} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Be a Human Supporter</h5>
                        <p className='text-[14px] tracking-wide'>Become a doctor and be a compassionate human supporter, providing care, comfort, and healing to those in need.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T2} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Prestigious Career</h5>
                        <p className='text-[14px] tracking-wide'>Holding an MBBS degree is a mark of prestige and signifies your dedication and expertise in the field of medicine. It provides a strong foundation for a fulfilling and respected career as a healthcare professional.</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div>
                        <Image src={T3} alt='' className=' w-[90px] h-[90px] object-contain'/>
                  
                   </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-[#005450] text-[20px] font-bold'>Job Security</h5>
                        <p className='text-[14px] tracking-wide'>The demand for qualified doctors is ever-present, ensuring excellent job security for MBBS degree holders.</p>
                    </div>
                </div>
                
            </div>
    </div>
   <div className='lg:w-[50%] w-full'>
   <div>
        <Image src={Dd} alt='' className='w-full h-full object-cover'/>
    </div>
   </div>
</div>
    </div>
    </div>
  )
}

export default Looking
