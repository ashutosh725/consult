import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className={`bg-[url('/home-five-curve-banner.png')] bg-cover bg-center py-20`}>
   <div className='container mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-6 place-content-center place-items-start'>
        <div className='flex  p-4 flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/1-2.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>Personalized Career Planning
</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>Tailored guidance and strategic planning to help you chart a clear path towards your medical career goals.

</p>
        </div>
        <div className='flex   p-4  flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/2-2.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>Expert Mentorship & Coaching

</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>Experienced mentors who will provide invaluable insights, advice, support foryour medical journey.



</p>
        </div>
        <div className='flex   p-4  flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/6.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>Affordable Budget


</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>At Career Guardian India, we offer affordable budget options for our comprehensive career consultancy services.





</p>
        </div>
        <div className='flex   p-4  flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/7.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>Extensive Network Connections



</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>Tap into our vast network of healthcare professionals, institutions, and industry contacts for networking.







</p>
        </div>
        <div className='flex   p-4  flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/5.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>100% Assurance




</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>With Career Guardian India, you can have 100% assurance to your medical career success. Trust us to provide unwavering support, expert guidance.









</p>
        </div>
        <div className='flex   p-4  flex-col justify-center items-center gap-3'>
         <div>
<Image src={'/4-1.png'} alt='' width={50} height={50} objectFit='cover'/>
         </div>
         <h3 className='text-[18px] font-bold text-center'>Ongoing Career Support





</h3>
         <p className='text-[14px] font-medium tracking-wide text-center'>Long-term support even after placement, including assistance with career transitions and continuous growth in your medical career.











</p>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Offer
