
import { Header } from './page.header'
import { IlluminationAnimation } from '@/components/IlluminationAnimation'
import { FrontPageSectionWrapper } from '@/components/FrontPageSectionWrapper'
import { DiveInBlockRight } from '@/components/DiveInBlockRight'
import { DiveInBlockLeft } from '@/components/DiveInBlockLeft'


export default function Home() {

  return (
    <>
      <Header/>

      <FrontPageSectionWrapper colorTailwind={'bg-secondary/25'}>

        <div className='text-3xl font-bold flex justify-center items-center pb-8'><h2><IlluminationAnimation text={'Light Up'}/> Your Results</h2></div>

        <DiveInBlockRight entryTitle='Extend Your Outreach with Viral Marketing' description='Viral Marketing is everything in the business world. From Instagram, Facebook, Threads, and more, we will help you get your message heard.' buttonText='Find Out More' imagePath='/mail.jpg'/>
        
        <DiveInBlockLeft entryTitle='Reach Your Targets with Direct Mailing Services' description='We have expertise in the challenging world of direct mailers. We will extend your message to your clients through excellent mailers.' imagePath="/social.jpg" buttonText='View Mailers Portfolio' />
      
      </FrontPageSectionWrapper>

     <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        <div className="text-3xl font-bold flex justify-center items-center pb-8"><h4><IlluminationAnimation text={"Brighten"}/> Your Internet Presence</h4></div>
        
        <DiveInBlockLeft entryTitle='Enterprise-Grade Website Services' description='Professional, attractive website design. Full-stack solutions that satisfy your needs.' imagePath="/code.jpg" buttonText='View Portfolio' />
        
        <DiveInBlockRight entryTitle='Search Engine Optimization: To Get Discovered' description='Utilize our SEO packages to unlock quick, organic views. Placement on the front page of Google is ciritcal to your mission/s objectives, and we can help. ' buttonText='Find Out More' imagePath='/metrics.jpg'/>
       
      </FrontPageSectionWrapper>

      {/* <article>Recent Posts</article> */}

      </>
  )
}
