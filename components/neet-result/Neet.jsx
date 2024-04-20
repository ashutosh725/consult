import React from 'react'
import Nta from '../../public/online-classroom-02.png'
import Image from "next/image";
import Link from 'next/link';
const Neet = () => {
  return (
    <div className={`bg-[url('/kg.jpg')]  bg-cover bg-center `}>
        <div className='bg-[rgba(245,247,246,0.74)]  py-20 '>
        <div className='container mx-auto'>
<div className='flex flex-col justify-start items-start gap-5'>
    <h3 className='lg:text-[60px] text-[30px] font-extrabold tracking-wide'>
    NEET Result 2023 Out,<br/> NTA NEET UG Result<br/> and Score Card <br/> Link…
    </h3>
    <div>
        <Image src={Nta} alt='nta' className='w-[255px] h-full object-cover'/>
    </div>
    <Link href={'/neet-result-2023'}  className='bg-black  tracking-wide px-6 py-3 text-white text-[20px] shadow-lg font-medium'>Check Now</Link>
</div>
      </div>
        </div>
 
    </div>
  )
}

export default Neet
