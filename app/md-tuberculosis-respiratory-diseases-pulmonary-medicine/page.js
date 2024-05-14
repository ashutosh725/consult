

import HeroBanner from "@/components/common/HeroBanner";
import Personalized from "@/components/overseas/Personalized";

import Tuberculosis from "@/components/tuberculosis/Tuberculosis";

export default function Page(){
    return(
        <>
        <HeroBanner title={'MD TB & CHEST / MD In Pulmonary Medicine'} links={'Home / Courses/MD TB & CHEST / MD In Pulmonary Medicine Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Tuberculosis/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}