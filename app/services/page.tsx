import { DiveInBlockLeft } from "@/components/DiveInBlockLeft";
import { DiveInBlockRight } from "@/components/DiveInBlockRight";
import { FrontPageSectionWrapper } from "@/components/FrontPageSectionWrapper";

export default function Page(){
    return(
        <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        <div className="text-3xl font-bold flex justify-center items-center pb-8"><h4>Our Services</h4></div>
        
        <DiveInBlockLeft entryTitle='Marketing' description='Marketing designed to empower your business. We offer direct mailing expertise, socials, and other marketing consulting' imagePath="/social.jpg" buttonPath="/mailers" buttonText='View Portfolio' />
        
        <DiveInBlockRight entryTitle='Web Development' description='Professional, attractive website design. Full-stack solutions that satisfy your needs. ' buttonPath="/web-development" buttonText='View Portfolio' imagePath='/code.jpg'/>
       
      </FrontPageSectionWrapper>
    )
}