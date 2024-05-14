


import HeroBanner from "@/components/common/HeroBanner";
import Gynaecology from "@/components/gynaecology/Gynaecology";

import Personalized from "@/components/overseas/Personalized";



export default function Page(){
    return(
        <>
        <HeroBanner title={'MS OBSTETRICS & GYNAECOLOGY'} links={'Home / Courses/MS OBSTETRICS & GYNAECOLOGY Course'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Gynaecology/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}