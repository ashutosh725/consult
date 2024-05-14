import HeroBanner from "@/components/common/HeroBanner";
import Help from "@/components/overseas/Help";
import Overseas from "@/components/overseas/Overseas";
import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <HeroBanner title={'Overseas Education'} links={'Home / Overseas Education'}/>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <Overseas/>
        <Help/>
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}