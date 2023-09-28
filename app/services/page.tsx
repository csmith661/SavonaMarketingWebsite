import { DiveInBlockLeft } from "@/components/DiveInBlockLeft";
import { DiveInBlockRight } from "@/components/DiveInBlockRight";
import { DiveInBlockLeftNoButton } from "@/components/DiveInNoButton";
import { DiveInBlockRightNoButton } from "@/components/DiveInNoButtonRight";
import { FrontPageSectionWrapper } from "@/components/FrontPageSectionWrapper";

export default function Page(){
    return(
        <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        <div className="text-3xl font-bold flex justify-center items-center pb-8"><h4>Our Services</h4></div>
        
        <DiveInBlockLeftNoButton entryTitle='Collaborative Strategy Development:' description='We don&#39;t just create marketing strategies; we forge them through collaboration! Our approach
is all about getting to know you, your goals, and your unique brand personality. We kick things
off with a deep dive into your world, where we brainstorm, analyze, and craft a tailor-made
roadmap to success. It&#39;s like a marketing strategy party, and you&#39;re the guest of honor! Let&#39;s
make your brand shine together!' imagePath="/social.jpg" />
        
        <DiveInBlockRightNoButton entryTitle='Creative Design Awesomeness:' description='Design isn&#39;t just about aesthetics; it&#39;s about sparking emotions, telling stories, and leaving a
lasting impression. Our creative design approach is an explosive burst of imagination and
innovation. We infuse every pixel, color, and font choice with purpose. From eye-catching logos
to stunning visuals, we&#39;ll make your brand pop. Get ready for a design journey that&#39;s as fun as a
rollercoaster ride! '  imagePath='/code.jpg'/>
       
      </FrontPageSectionWrapper>
    )
}