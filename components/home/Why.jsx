"use client"
import M1 from '../../public/health-medical.png'
import M2 from '../../public/health-center.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Why = () => {
    const router = useRouter();
    const handlebtn10 = ()=>{
      router.push('/contact')
    }
  return (
    <div className={`bg-[url('/bac-01.png')] bg-cover pb-20 pt-9`}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-start gap-8'>
            <div className='lg:w-[25%] w-full'>
                <div>
                    <Image src={M1} alt='m1' className='w-full h-full object-contain shadow-2xl rounded-lg'/>
                </div>
                <p className='text-[14px] font-Open font-medium text-justify tracking-wide text-[#666666]'>Transform Your Passion for Medicine into a Thriving Career through Tailored Consultancy, Mentorship, and Proven Strategies for Success.</p>
<div className='flex justify-center items-center my-5'>
<button onClick={handlebtn10} className='bg-[#000000] rounded-full tracking-wide px-6 py-3 text-white text-[20px] font-medium'>Know More</button>
</div>
            </div>
            <div className='lg:w-[50%] w-full'>
                <div>
                    <Image src={M2} alt='m1' className='w-full h-full object-contain shadow-2xl'/>
                </div>
                <h3 className='text-[30px] font-[700] text-black tracking-wide text-center pt-5'>Why Choose Us?</h3>
                <p className='text-[14px] font-Open font-medium text-justify tracking-wide text-[#666666]'>When it comes to choosing a medical career consulting agency, Career Guardian India stands out as a trusted partner. Our team of seasoned professionals understands the intricacies of the medical field, and we are dedicated to helping you build a successful and fulfilling career. With personalized guidance, we tailor our services to your unique goals, providing expert advice and support at every step. Our extensive network of connections opens doors to valuable opportunities. Count on us for cutting-edge industry insights, ongoing mentorship, and a commitment to your long-term success. Choose Career Guardian India and unlock the path to a thriving medical career.</p>
                <div className='flex justify-center items-center my-5'>
<button onClick={handlebtn10} className='bg-[#f1c503] rounded-full tracking-wide px-6 py-3 text-black text-[20px] shadow-lg font-medium'>Unlock now</button>
</div>
            </div>
            <div className='lg:w-[25%] w-full'>
                <div>
                <h3 className='text-[23px] text-start font-[700] text-black tracking-wide  pt-5'>{`Let's Connect With Us`}</h3>
                <form className='flex flex-col gap-3 py-3'>
                    <div>
                        <input type='text' placeholder='Name' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Email Address' className='p-4  bg-slate-200 shadow-md rounded-md outline-none w-full'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Phone' className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                    <div>
                        <textarea type='text' placeholder='Address' cols={5} className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                    <div>
                        <textarea type='text' placeholder='Message' cols={5}  className='p-4 bg-slate-200  shadow-md rounded-md outline-none w-full'/>
                    </div>
                </form>
                <div className='flex justify-center items-center my-5'>
<button onClick={handlebtn10} className='bg-black rounded-full tracking-wide px-6 py-3 text-white text-[20px] shadow-lg font-medium'>Submit</button>
        </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Why
