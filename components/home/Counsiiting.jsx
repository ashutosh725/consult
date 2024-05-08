"use client"
import { useRouter } from "next/navigation"
import C1 from "../../public/download.png"
import Image from 'next/image'
import Link from "next/link"
const Counsiiting = () => {
  const router = useRouter();

  const handlebtn6 = ()=>{
    router.push('/contact')
  }
  return (
    <div className={` lg:py-20 py-10 `}>
      <div className=''>
     <div className="flex flex-col lg:flex-row justify-start items-start  ">
     <div className="lg:w-[50%] w-full bg-[#4a1e75]  flex flex-col justify-center items-center gap-5 p-6 lg:pl-20">
      <div>
        <Image src={C1} alt="" className="w-[150px] h-[150px] object-cover rounded-full" />
      </div>
      <h3 className="text-[#ffda00] font-Jost text-[36px]">MD MS IN INDIA</h3>
      <p className="text-[#ffda00] text-[14px] font-Poppins font-[500]">{`The MBBS graduates who wish to take their professional career to the next level and want to become a specialist doctor has to pursue MD or MS. To get admission in MD/MS in INDIA an aspirant has to qualify NEET-PG entrance test conducted by NBE every year in the month of January. To apply for NEET-PG the aspirants must have permanent or Provisional registration with MCI and has completed his/her MBBS degree from MCI recognize medical college/institute with a 1-year compulsory internship. After successfully qualifying NEET-PG entrance test the students have to go through the Central level and state level NEET-PG counselling.`}</p>
      <Link href={'/'} className="text-[#ffda00]  text-[15px] font-Poppins font-[500] underline">Learn More</Link>
     </div>
      <div className="lg:w-[50%] w-full bg-[#ffda00] flex flex-col justify-center items-center gap-5 p-6  lg:pr-20">
        <div>
          <Image src={C1} alt="" className="w-[150px] h-[150px] object-cover rounded-full" />
        </div>
        <h3 className="text-[#4a1e75] font-Jost text-[36px]">MBBS IN INDIA</h3>
        <p className="text-[#4a1e75] text-[14px] font-Poppins font-[500]">{`M.B.B.S is made from two root words: M.B (Bachelor of Medicine) and B.S (Bachelor of Surgery). It is an undergraduate degree course that deals with the study of Allopathic Medicine and Surgery. This is one of the most sought-after medical degrees all over the world since it provides financial security to the aspirant.

The course extends for five and a half years, where the last year comprises of compulsory rotating internship. There is a total of nine semesters, where each semester lasts for six months and has attendance days of one hundred and twenty days.`}</p>
<Link href={'/'} className="text-[#4a1e75] text-[15px] font-Poppins font-[500] underline">Learn More</Link>
      </div>
     
     </div>
        </div> 
    </div>
  )
}

export default Counsiiting

