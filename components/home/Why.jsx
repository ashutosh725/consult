
import M1 from '../../public/health-medical.png'
import M2 from '../../public/health-center.png'
import Box1 from '../../public/m1-removebg-preview.png'
import Box2 from '../../public/m2-removebg-preview.png'
import Box3 from '../../public/m3-removebg-preview.png'
import Box4 from '../../public/m4-removebg-preview.png'
import Box5 from '../../public/m5-removebg-preview.png'
import Box6 from '../../public/m6-removebg-preview.png'
import Box7 from '../../public/m7-removebg-preview.png'
import Box8 from '../../public/m8-removebg-preview.png'
import Box9 from '../../public/m9-removebg-preview.png'
import Box10 from '../../public/m10-removebg-preview.png'
import Image from 'next/image'
import Link from 'next/link'

const Why = () => {

  return (
    <div className={`py-20 bg-[#f8f8fc]`}>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <p className='md:text-[18px] text-[16px] w-full text-center font-Poppins font-[500] text-[#68778c]'># Browse Categories</p>
          <h2 className='text-[#2a2131] md:text-[36px] text-[24px] text-center font-Jost font-[500]'>Browse Popular Medical PG Courses</h2>
          <span className='w-[150px] h-[5px] bg-[#ffda00]'></span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4 mt-16'>
        <div className='relative group bg-[#5a1e91] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-t-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#ffda00]'>
    <div>
        <Image src={Box1} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD ANESTHESIA</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-anesthesia'} className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#ffda00] text-[#5a1e91] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group bg-[#ffda00] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-b-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#5a1e91]'>
    <div>
        <Image src={Box2} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD DERMATOLOGY</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-dermatology'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#5a1e91] text-[#fff] rounded-[5px]'>Details</Link >
    </div>
</div>
<div className='relative group bg-[#5a1e91] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-t-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#ffda00]'>
    <div>
        <Image src={Box3} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD RADIOLOGY</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-radiodiagnosis-md-radiology'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#ffda00] text-[#5a1e91] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group bg-[#ffda00] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-b-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#5a1e91]'>
    <div>
        <Image src={Box4} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD GENERAL MEDICINE</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-general-medicine'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#5a1e91] text-[#fff] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group bg-[#5a1e91] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-t-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#ffda00]'>
    <div>
        <Image src={Box5} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD PAEDIATRICS</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-paediatrics'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#ffda00] text-[#5a1e91] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group  bg-[#5a1e91] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-b-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#5a1e91]'>
    <div>
        <Image src={Box6} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MS Orthopaedics</h4>
    <div className='flex justify-center items-center'>
        <Link  href={'/ms-orthopedics'} className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#5a1e91] text-[#fff] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group  bg-[#ffda00] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-t-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#ffda00]'>
    <div>
        <Image src={Box7} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MS Obstetrics & Gynaecology</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/ms-obstetrics-gynaecology'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#ffda00] text-[#5a1e91] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group  bg-[#5a1e91] pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-b-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#5a1e91]'>
    <div>
        <Image src={Box8} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MS Ophthalmology</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/ms-ophthalmology'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#5a1e91] text-[#fff] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group bg-[#ffda00]  pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-t-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#ffda00]'>
    <div>
        <Image src={Box9} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MD Pulmonary / Respiratory medicine</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/md-tuberculosis-respiratory-diseases-pulmonary-medicine'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#ffda00] text-[#5a1e91] rounded-[5px]'>Details</Link >
    </div>
</div>

<div className='relative group bg-[#5a1e91]  pt-[50px] pb-[30px] pl-[50px] pr-[50px] border-[1px] border-[#f5f5f5] rounded-b-[20px] border-solid flex flex-col justify-center gap-5 transition-all duration-500 ease-in-out  hover:bg-[#5a1e91]'>
    <div>
        <Image src={Box10} alt='' className='object-contain w-full h-[70px]'/>
    </div>
    <h4 className='text-[16px] font-Poppins font-[500] text-white text-center'>MS General Surgery</h4>
    <div className='flex justify-center items-center'>
        <Link href={'/ms-general-surgery'}  className='py-[14px] px-[30px] text-[17px] font-Poppins font-[500] bg-[#5a1e91] text-[#fff] rounded-[5px]'>Details</Link >
    </div>
</div>
        </div>
        <div className='flex justify-center items-center mt-12'>
        <Link  href={'/contact'} className='text-[18px] font-Jost tracking-wide bg-[#5a1e91] rounded-ss-[20px] rounded-br-[20px] font-bold   py-[20px] px-[40px]  text-white hover:bg-[#ffda00] shadow-xl'>Contact Us</Link >
      </div>
      </div>
    </div>
  )
}

export default Why
