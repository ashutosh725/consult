import React from 'react'
import C1 from "../../public/1-1.png"
import C2 from "../../public/2-1.png"
import C3 from "../../public/3-1.png"


import Image from 'next/image'
const Counsiiting = () => {
  return (
    <div className='bg-red-100 py-20'>
      <div className='container mx-auto'>
        <div className='grid place-content-center place-items-start lg:grid-cols-3'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div>
                    <Image src={C1} className='w-full h-full object-cover'/>
                </div>
                <h5 className='text-[18px] font-bold text-center'>MBBS ADMISSION SUPPORT
</h5>
<p className='text-[14px] font-medium tracking-wide text-center'>Your trusted source for MBBS admission guidance, helping you achieve your dreams of becoming a doctor.

</p>
<button className='bg-[#000000] rounded-full tracking-wide px-6 py-3 text-white text-[16px] font-medium'>Know More</button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div>
                    <Image src={C2} className='w-full h-full object-cover'/>
                </div>
                <h5 className='text-[18px] font-bold text-center'>ADMISSION IN ABROAD

</h5>
<p className='text-[14px] font-medium tracking-wide text-center'>Seamless admission process for studying abroad, ensuring your pathway to international education and global opportunities.



</p>
<button className='bg-[#000000] rounded-full tracking-wide px-6 py-3 text-white text-[16px] font-medium'>Know More</button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div>
                    <Image src={C3} className='w-full h-full object-cover'/>
                </div>
                <h5 className='text-[18px] font-bold text-center'>MBBS COUNSELLING GUIDANCE


</h5>
<p className='text-[14px] font-medium tracking-wide text-center'>Professional MBBS counselling guidance to help you make informed decisions and navigate the admission process.





</p>
<button className='bg-[#000000] rounded-full tracking-wide px-6 py-3 text-white text-[16px] font-medium'>Know More</button>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Counsiiting

