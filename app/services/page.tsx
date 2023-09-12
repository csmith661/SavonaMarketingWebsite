import { DiveInBlockLeft } from "@/components/DiveInBlockLeft";
import { DiveInBlockRight } from "@/components/DiveInBlockRight";
import { FrontPageSectionWrapper } from "@/components/FrontPageSectionWrapper";

export default function Page(){
    return(
        <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        <div className="text-3xl font-bold flex justify-center items-center pb-8"><h4>Our Services</h4></div>
        
        <DiveInBlockLeft entryTitle='Enterprise-Grade Website Services' description='Professional, attractive website design. Full-stack solutions that satisfy your needs.' imagePath="/code.jpg" buttonPath="/web-development" buttonText='View Portfolio' />
        
        <DiveInBlockRight entryTitle='Search Engine Optimization: To Get Discovered' description='Utilize our SEO packages to unlock quick, organic views. Placement on the front page of Google is ciritcal to your mission/s objectives, and we can help. ' buttonPath="/services" buttonText='Find Out More' imagePath='/metrics.jpg'/>
       
      </FrontPageSectionWrapper>
    )
}