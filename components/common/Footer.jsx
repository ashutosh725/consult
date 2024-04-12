import Link from 'next/link'
import React from 'react'
import Logo1 from '../../public/CAREER-GUARDIAN-INDIA-LOGO.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#0d4d4c] text-white py-10'>
      <div className='container mx-auto'>
 <div className='flex flex-wrap gap-10 justify-between items-center '>
 <ul className='flex flex-col justify-center items-start gap-3'>
        <div>
          <Image src={Logo1} alt='' className='w-[180px] h-[100px] object-cover'/>
        </div>
        <p className='text-[13px]'>©4 Apr, 2024 Career Guardian India</p>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs'}>MBBS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/md-ms-in-india'}>MD/MS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/cps-fcps'}>CPS/FCPS</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/contact'}>Contact US</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#india'}>MBBS in India</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#bangladesh'}>MBBS in Bangladesh</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#nepal'}>MBBS in Nepal</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#philippines'}>MBBS in Philippines</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#kazakhsthan'}>MBBS in Kazakhstan</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#uzbekistan'}>MBBS in Uzbekistan</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#poland'}>MBBS in Poland</Link></li>
        <li><Link className='hover:text-primary hover:scale-75' href={'/mbbs#russia'}>MBBS in Russia</Link></li>
    </ul>
    <ul>
    <div className='flex flex-col gap-2'>
     <input type='text' placeholder='Name'  className='bg-white p-3 rounded-md'/>
     <input type='text' placeholder='Phone'  className='bg-white p-3 rounded-md'/>
    </div>
    <div className='mt-[13px] flex justify-end items-end'>
      <button className='bg-[#E02B20] text-[15px] rounded-full px-3 py-2  font-[600]'>Request Now</button>
    </div>
    </ul>
   
 </div>
      </div>
    </div>
  )
}

export default Footer
