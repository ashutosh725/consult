import Image from 'next/image'
import React from 'react'

const Best = () => {
  return (
    <div className={` py-20`} >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-start'>
        <div className={`bg-[url('/Polygon.png')] bg-cover w-full lg:w-[50%]`}>
  <div className="grid grid-cols-2 md:grid-cols-2 md:gap-10 gap-3">
    <div className="bg-white flex flex-col justify-center items-center gap-3 rounded-lg p-6 shadow-md">
      <Image src={'/career.png'} width={50} height={50} objectFit='cover'/>
      <h2 className="text-[30px] font-bold">6+</h2>
      <p className="text-gray-600 text-[16px] tracking-wide font-medium">Career Counsellors</p>
    </div>
    <div className="bg-white flex flex-col justify-center items-center gap-3 rounded-lg p-6 shadow-md">
      <Image src={'/year-of-experience.png'} width={50} height={50} objectFit='cover'/>
      <h2 className="text-[30px] font-bold">8+</h2>
      <p className="text-gray-600 text-[16px] tracking-wide font-medium">Years Of Experience</p>
    </div>
    <div className="bg-white flex flex-col justify-center items-center gap-3 rounded-lg p-6 shadow-md">
      <Image src={'/enrolments.png'} width={50} height={50} objectFit='cover'/>
      <h2 className="text-[30px] font-bold">250+</h2>
      <p className="text-gray-600 text-[16px] tracking-wide font-medium">Enrolments</p>
    </div>
    <div className="bg-white flex flex-col justify-center items-center gap-3 rounded-lg p-6 shadow-md">
      <Image src={'/testimonials.png'} width={50} height={50} objectFit='cover'/>
      <h2 className="text-[30px] font-bold">600+</h2>
      <p className="text-gray-600 text-[16px] tracking-wide font-medium"> Testimonials</p>
    </div>
  </div>
</div>

          <div className='lg:w-[50%] w-full flex flex-col '>
            <h5 className='text-[26px] font-bold'># Best MBBS Education Consultants</h5>
            <p className='text-[14px] font-medium pt-3'>Trusted and experienced MBBS education consultants providing expert guidance, personalized assistance, and comprehensive support for a successful medical career. We help you make the best choices for your future.</p>
            <ul className='flex flex-col gap-3 pt-6'>
              <li className='flex justify-start items-center gap-4'><Image src={'/Icon-awesome-graduation-cap.png'} width={40} height={40} objectFit='cover'/> <p className='text-[14px] font-medium'>Most trusted abroad consultancy firm in India.
</p></li>
<li className='flex justify-start items-center gap-4'><Image src={'/Icon-awesome-graduation-cap.png'} width={40} height={40} objectFit='cover'/> <p className='text-[14px] font-medium'>With over 8 years of experience we provide the best educational solutions.

</p></li>
              <li className='flex justify-start items-center gap-4'><Image src={'/Icon-awesome-graduation-cap.png'} width={40} height={40} objectFit='cover'/> <p className='text-[14px] font-medium'>We offer an affordable MBBS education and stay.
</p></li>
              <li className='flex justify-start items-center gap-4'><Image src={'/Icon-awesome-graduation-cap.png'} width={40} height={40} objectFit='cover'/> <p className='text-[14px] font-medium'>We provide A-Z Support for your MBBS Journey.
</p></li>
              <li className='flex justify-start items-center gap-4'><Image src={'/Icon-awesome-graduation-cap.png'} width={40} height={40} objectFit='cover'/> <p className='text-[14px] font-medium'>Our active associates will guide you thoroughly to study MBBS abroad.
</p></li>
            </ul>
<div className='flex justify-center items-center'>
<button className='bg-[#000000] shadow-lg rounded-full tracking-wide px-6 py-3 text-white text-[16px] font-medium mt-10'>Know More</button>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best
