import Budget from "@/components/neet-result/Budget";
import Neet from "@/components/neet-result/Neet";
import Result from "@/components/neet-result/Result";
import Study from "@/components/neet-result/Study";
import Faq from "@/components/neet-result/Faq";


export default function Page(){
    return(
        <>
        <Neet/>
        <Faq/>
        <Study/>
        <Result/>
        <Budget/>
        </>
    )
}
   
