import Premium from "@/components/Subs";

export default function Page(){
    return(
        <>
        <div className="bg-[#007aff] py-10">
<div className="container mx-auto">
    <div className="flex flex-col justify-center items-center gap-5">
<h3 className="text-[23px] text-white font-bold font-Poppins">Plan</h3>
<p className="text-[15px] text-white">{`Home // Subsciption Plan`}</p>
    </div>
</div>
        </div>
        <Premium/>
        </>
    )
}