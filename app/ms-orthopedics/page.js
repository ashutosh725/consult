


import HeroBanner from "@/components/common/HeroBanner";
import Orthopedics from "@/components/orthopedics/Orthopedics";
import Personalized from "@/components/overseas/Personalized";



export default function Page(){
    return(
        <>
        <HeroBanner title={'MS ORTHOPEDICS'} links={'Home / Courses/MS ORTHOPEDICS'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Orthopedics/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}