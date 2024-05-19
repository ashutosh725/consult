
import HeroBanner from "@/components/common/HeroBanner";
import Destination from "@/components/mdms/Destination";

import MdMsIn from "@/components/mdms/Index";




import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <HeroBanner title={'Study MD MS In India'} links={'Home / MD - MS In India'}/>
        <Destination/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <MdMsIn/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}