import Image from 'next/image'
import React from 'react'
import Kam from '../../public/kmk.png'
const Study = () => {
  return (
    <div className=''>
      <div>
        <Image src={Kam} alt='' className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default Study
