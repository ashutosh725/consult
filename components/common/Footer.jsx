import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0d4d4c] text-white py-10'>
      <div className='container mx-auto'>
 <div className='flex justify-between items-center '>
 <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link href={'/'}>MBBS</Link></li>
        <li><Link href={'/'}>MD/MS</Link></li>
        <li><Link href={'/'}>CPS/FCPS</Link></li>
        <li><Link href={'/'}>Contact US</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link href={'/'}>MBBS</Link></li>
        <li><Link href={'/'}>MD/MS</Link></li>
        <li><Link href={'/'}>CPS/FCPS</Link></li>
        <li><Link href={'/'}>Contact US</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link href={'/'}>MBBS in India</Link></li>
        <li><Link href={'/'}>MBBS in Bangladesh</Link></li>
        <li><Link href={'/'}>MBBS in Nepal</Link></li>
        <li><Link href={'/'}>MBBS in Philippines</Link></li>
    </ul>
    <ul className='flex flex-col justify-center items-start gap-3'>
        <li><Link href={'/'}>MBBS in Kazakhstan</Link></li>
        <li><Link href={'/'}>MBBS in Uzbekistan</Link></li>
        <li><Link href={'/'}>MBBS in Poland</Link></li>
        <li><Link href={'/'}>MBBS in Russia</Link></li>
    </ul>
    <div className='flex flex-col gap-3'>
     <input type='text' placeholder='Name'  className='bg-white p-4 rounded-md'/>
     <input type='text' placeholder='Phone'  className='bg-white p-4 rounded-md'/>
    </div>
 </div>
      </div>
    </div>
  )
}

export default Footer
