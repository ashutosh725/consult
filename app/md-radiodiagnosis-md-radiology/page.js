

import HeroBanner from "@/components/common/HeroBanner";
import Personalized from "@/components/overseas/Personalized";
import Radiodiagnosis from "@/components/radiodiagnosis/Radiodiagnosis";

export default function Page(){
    return(
        <>
        <HeroBanner title={'MD RADIOLOGY / MD RADIODIAGNOSIS'} links={'Home / Courses/MD RADIOLOGY Or MD RADIODIAGNOSIS'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Radiodiagnosis/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}