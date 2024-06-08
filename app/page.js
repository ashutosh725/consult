import Best from "@/components/home/Best";
import Box from "@/components/home/Box";
import Counsiiting from "@/components/home/Counsiiting";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import Offer from "@/components/home/Offer";

import Why from "@/components/home/Why";
import Latest from "@/components/news/Latest";


export default function Home() {
  return (
   <>

<HeroSection/>
<Latest/>
<FeaturedSection/>
<Box/>
<Why/>
<Counsiiting/>

<Best/>
<Offer/>
   </>
  );
}
