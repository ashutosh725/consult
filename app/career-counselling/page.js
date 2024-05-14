import College from "@/components/career/College";
import Concentrate from "@/components/career/Concentrate";


import Personalized from "@/components/overseas/Personalized";

export default function Page(){
    return(
        <>
        <div className="bg-slate-100 flex flex-col lg:flex-row justify-start items-start">
        <div className="lg:w-[70%] w-full">
        <College/>
        <Concentrate/>
        </div>
        <div className="lg:w-[30%] lg:sticky   lg:top-20 w-full">
       <Personalized/>
        </div>
        </div>
        </>
    )
}