"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Best = () => {
  const router = useRouter();
  const handlebtn8 = ()=>{
    router.push('/contact')
  }
  return (
    <div className={` py-20`} >
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <h3 className='font-Jost md:text-[28px] text-[24px] font-[500]'>NEET PG Admisssion 2024</h3>
          <span className='w-[150px] h-[5px] bg-[#4a1e75]'></span>
          <h4 className='font-Jost md:text-[28px] text-[24px] font-[700] text-center'>State Wise Counselling Information</h4>
          <p className='font-Jost md:text-[18px] text-[16px] font-[400] text-center'>Check latest updates on state wise counselling</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-start'>
        <div className={` w-full `}>
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-3 mt-10">
    <Link href={'https://cetonline.karnataka.gov.in/pget2023/forms/loginpage.aspx'} target='_blank' className="bg-white h-[250px] flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/422-4221338_as-boratti-argues-it-would-be-more-productive.png'} alt='' width={50} height={50} objectFit='cover'/>
     
      <p className="text-[#4a1e75] text-[16px] text-center tracking-wide font-medium">Karnataka NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://tnmedicalselection.net/"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/tamil-nadu.png'} alt='' width={50} height={50} objectFit='cover'/>
  
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">Tamil Nadu NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://upneet.gov.in/"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/3177571-200.png'} alt='' width={50} height={50} objectFit='cover'/>
     
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">UP NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://dme.mponline.gov.in/portal/services/dmemp/DMEPG/Profile/ProfileLoginHome.aspx"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/870-8709536_explore-your-circuit-madhya-pradesh-map-png.png'} alt='' width={50} height={50} objectFit='cover'/>
    
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">MP NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://dmetodisha.gov.in/PG%202023.html"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/3903612-200.png'} alt='' width={50} height={50} objectFit='cover'/>
     
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">Odisha NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://www.centacpuducherry.in/"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/map-puducherry.png'} alt='' width={50} height={50} objectFit='cover'/>
     
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">Puducherry NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://dmer.haryana.gov.in/"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/3177557-200.png'} alt='' width={50} height={50} objectFit='cover'/>
    
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">Haryana NEET PG Counselling 2024</p>
    </Link>
    <Link href={"https://cetcell.net.in/NEET-PGM-2023/login"} target='_blank' className="bg-white h-[250px]  flex flex-col justify-center items-center gap-5 rounded-[20px] p-6 shadow-lg">
      <Image src={'/maharashtra.png'} alt='' width={50} height={50} objectFit='cover'/>
     
      <p className="text-[#4a1e75] text-[16px] text-center  tracking-wide font-medium">Maharashtra NEET PG Counselling 2024</p>
    </Link>
  </div>
</div>

          
        </div>
      </div>
    </div>
  )
}

export default Best
