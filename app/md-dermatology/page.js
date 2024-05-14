
import HeroBanner from "@/components/common/HeroBanner";
import Anesthesia from "@/components/md-anesthesia/Anesthesia";
import Dermatology from "@/components/md-dermatology/Dermatology";


import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <HeroBanner title={'MD Dermatology'} links={'Home/Courses/MD Dermatology Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Dermatology/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}