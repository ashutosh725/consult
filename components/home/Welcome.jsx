"use client"
import Image from 'next/image'
import W1 from '../../public/STUDY-IN-ABROAD.png'
import Fslider from './Fslider'
import { useRouter } from 'next/navigation'

const Welcome = () => {
  const router = useRouter();
  const handlebtn9 = ()=>{
    router.push('/contact')
  }
  return (
    <div id="about-us" className={`bg-[url('/bac.png')] bg-cover py-20`}>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row justify-center items-start gap-10'>
        <div className='lg:w-[50%] w-full'>
<div>
    <Image src={W1} alt='w1' className='w-full h-full object-cover'/>
</div>
        </div>
        <div className='lg:w-[50%] w-full'>
        <h3 className='text-[30px] font-[700] text-black tracking-wide text-center pt-5'>Welcome to Career Guardian India Pvt Ltd</h3>
                <p className='text-[14px] font-Open font-medium text-justify tracking-wide text-[#666666]'>When it comes to choosing a medical career consulting agency, Career Guardian India stands out as a trusted partner. Our team of seasoned professionals understands the intricacies of the medical field, and we are dedicated to helping you build a successful and fulfilling career. With personalized guidance, we tailor our services to your unique goals, providing expert advice and support at every step. Our extensive network of connections opens doors to valuable opportunities. Count on us for cutting-edge industry insights, ongoing mentorship, and a commitment to your long-term success. Choose Career Guardian India and unlock the path to a thriving medical career.</p>
                <div className='flex justify-center items-center my-5'>
<button onClick={handlebtn9} className='bg-black rounded-full tracking-wide px-6 py-3 text-white text-[20px] shadow-lg font-medium'>Know More</button>
        </div>
    </div>
   </div>
   <Fslider/>
    </div>
    </div>
  )
}

export default Welcome
