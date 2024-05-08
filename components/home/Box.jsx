"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Box1 from '../../public/bellavita_icon1-150x150-2.png'
import Box2 from '../../public/state-wise-eligibility.png'
import Box3 from '../../public/Expert-Counselling.png'
import Box4 from '../../public/Transparent-process-01.png'
import Box5 from '../../public/Personalised-Guidence.png'
import Box6 from '../../public/Alert-and-Notification-01.png'
import Image from 'next/image'

const listData = [
  {

    title: `COLLEGE PREDICTOR`,
    des: `Get rank based college and course prediction`,
    img: Box1 
  },
  {

    title: `COUNSELLING ELIGIBILITY`,
    des: `Check your eligibility for All India/State/ Private University Counselling`,
    img:  Box2
  },
  {

    title: `EXPERT COUNSELLORS`,
    des: `Our team comprises of experts with more than a decade’s experience`,
    img:  Box3
  },
  {

    title: `TRANSPARENT PROCESS`,
    des: `No beating around the bush. Get straight and transparent analysis.`,
    img:  Box4
  },
  {

    title: `PERSONOLISED GUIDANCE`,
    des: `Each candidate is provided a personalised tailor made service`,
    img:  Box5
  },
  {

    title: `ALERTS & NOTIFICATION`,
    des: `Date, Time & Other NEET Updates & Notification on SMS & Email`,
    img:  Box6
  },
]

const Box = () => {
  const router = useRouter();

  const handlebtn1 = ()=>{
    router.push('/')
  }
  const handlebtn2 = ()=>{
    router.push('/')
  }
  const handlebtn3 = ()=>{
    router.push('/')
  }
  const handlebtn4 = ()=>{
    router.push('/')
  }
  const handlebtn5 = ()=>{
    router.push('/')
  }

  return (
    <div className=' pt-16 pb-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
         {
          listData.map((item,index)=>{
            return <div key={index} className=' flex flex-col justify-start h-[300px] items-center gap-5 border-[1px] rounded-[15px] py-[20px] px-[15px] shadow-xl'>
            <div>
              <Image src={item.img} alt='' className='w-[60px] h-[60px] object-cover'/>
            
            </div>
            <h5 className='text-[15px] text-center font-Montserrat font-[600] text-[#4a1e75]'>{item.title}</h5>
            <p className='md:text-[14px] text-[13px] text-center font-Montserrat font-[500] text-[#4a1e75]'>{item.des}</p>
                      </div>
          })
         }
        </div>
      </div>
    </div>
  )
}

export default Box
