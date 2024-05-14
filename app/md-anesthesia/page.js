
import HeroBanner from "@/components/common/HeroBanner";
import Anesthesia from "@/components/md-anesthesia/Anesthesia";


import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <HeroBanner title={'MD ANESTHESIA'} links={'Home/Courses/MD Anesthesia Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Anesthesia/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}