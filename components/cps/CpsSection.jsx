import React from 'react'
import Ww from '../../public/2337835.jpg'
import Image from "next/image";
const CpsSection = () => {
  return (
    <div className={`bg-[url('/family-doctor-008.png')] bg-cover bg-center pt-20`}>
     <div className='container mx-auto'>
       <div className='relative lg:my-20'>
       <div className='bg-[#c9e4e8] relative h-[550px]   lg:rounded-ss-[130px] lg:rounded-ee-[130px] lg:ml-44 ml-0   lg:py-[80px] w-full lg:w-[80%]'>


</div>
<div className='flex flex-col lg:flex-row justify-center items-center absolute lg:top-[-15%] top-0'>
<div className='flex lg:w-[50%] w-full flex-col lg:justify-start justify-center items-center lg:items-start gap-3'>
<h3 className='lg:text-[80px] text-[20px] font-bold text-[#005450]'>CPS / FCPS</h3>
<p className='text-[17px] text-[#000000] tracking-wide font-medium'>Open the gateway to a thriving medical career with Career Guardian India. Let us unlock your potential today.
<div className='lg:mt-6 mt-6 mb-6 lg:mb-0 flex justify-center items-center lg:justify-start lg:items-start'>
<button className='bg-[#005450] rounded-full tracking-wide px-8 py-4 text-white text-[16px] font-medium'>Know More</button>
</div>
</p>
</div>
<div className='lg:w-[50%] flex justify-center items-center  w-full'>
<div>
<Image src={Ww} alt='' className='lg:w-[434px] w-[300px] h-[300px] lg:h-[579px] lg:rounded-ss-[130px] lg:rounded-ee-[130px] object-cover'/>
</div>
</div>

</div>
       </div>
     </div>
    </div>
  )
}

export default CpsSection
