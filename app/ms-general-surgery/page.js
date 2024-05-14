

import HeroBanner from "@/components/common/HeroBanner";
import Personalized from "@/components/overseas/Personalized";

import Surgery from "@/components/surgery/Surgery";

export default function Page(){
    return(
        <>
        <HeroBanner title={'MS General Surgery'} links={'Home / Courses/MS General Surgery Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Surgery/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}