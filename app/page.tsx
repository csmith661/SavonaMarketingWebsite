
import { Header } from './page.header'
import { IlluminationAnimation } from '@/components/IlluminationAnimation'
import { FrontPageSectionWrapper } from '@/components/FrontPageSectionWrapper'
import { DiveInBlockRight } from '@/components/DiveInBlockRight'
import { DiveInBlockLeft } from '@/components/DiveInBlockLeft'
import { useRouter } from 'next/router'


export default function Home() {

  return (
    <>
      <Header/>

      <div className='h-full w-full bg-primary/25 p-8'>
        <div className='flex flex-col gap-4  items-center'>
        <h3 className='font-bold'>We are not just marketers; we are your strategic partners and cheerleaders.</h3>

        <p className='text-center'>

        At Amp Lab Marketing, we are your go-to hub for marketing solutions that pack a punch. No
smoke, no mirrors—just real, measurable results that put a smile on your face and a bounce in
your brand{"'s"} step.
</p>

        </div>
      </div>


      <FrontPageSectionWrapper colorTailwind={'bg-secondary/25'}>

        <div className='text-3xl font-bold flex justify-center items-center pb-8'><h2>Why <IlluminationAnimation text={'Amp Lab'}/>?</h2></div>

        <DiveInBlockRight entryTitle='Proven Expertise:' description='Our team is made up of experienced marketing pros with a track record of
success. We have got the skills and savvy to tackle any challenge.' buttonPath='/services' buttonText='Find Out More' imagePath='/mail.jpg'/>
        
        <DiveInBlockLeft entryTitle='Full-Service Approach:' description='We handle all your marketing needs under one roof, so you can breathe
easy and watch your campaigns seamlessly come to life.' imagePath="/social.jpg" buttonPath='/mailers' buttonText='Check out Our Marketing Team' />
      
      </FrontPageSectionWrapper>


     <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        
        <DiveInBlockLeft entryTitle='Data-Driven Results:' description=' We&#39;re all about precision, not guesswork. Our strategies are rooted in
data and analytics, ensuring every move is a stride toward success.' imagePath="/code.jpg" buttonPath="/web-development" buttonText='Technology Capabilities' />
        
        <DiveInBlockRight entryTitle='Growth-Oriented:' description='Your brand&#39;s success is our top priority. We&#39;re dedicated to fueling your
growth and helping you reach your full potential.' buttonPath="/services" buttonText='Find Out More' imagePath='/metrics.jpg'/>
       
      </FrontPageSectionWrapper>

      <div className='h-full w-full bg-accent/25 p-8'>
        <div className='flex flex-col gap-4  items-center'>
        <h3 className='font-bold'>Let’s Get Creative!</h3>

        <p className='text-center'>
        Ready to cut through the marketing noise and make your brand shine? Click the &quot;Get Started&quot;
button, and let&#39;s turn your marketing dreams into a reality.
</p>

        </div>
      </div>

      </>
  )
}
