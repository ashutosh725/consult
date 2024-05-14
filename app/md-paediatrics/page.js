


import HeroBanner from "@/components/common/HeroBanner";
import Personalized from "@/components/overseas/Personalized";
import Paediatrics from "@/components/paediatrics/Paediatrics";


export default function Page(){
    return(
        <>
        <HeroBanner title={'MD PAEDIATRICS'} links={'Home/Courses/MD Paediatrics Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Paediatrics/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}