
import HeroBanner from "@/components/common/HeroBanner";
import MbbsInIndia from "@/components/mbbs-in-india";




import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <HeroBanner title={'STUDY MBBS IN INDIA'} links={'Home / MBBS In India'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <MbbsInIndia/>
     
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}