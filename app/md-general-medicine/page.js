

import HeroBanner from "@/components/common/HeroBanner";
import General from "@/components/general/General";
import Personalized from "@/components/overseas/Personalized";


export default function Page(){
    return(
        <>
        <HeroBanner title={'MD GENERAL MEDICINE'} links={'Home / Courses/MD GENERAL MEDICINE Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <General/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}