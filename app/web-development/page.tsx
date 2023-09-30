import {Carousel} from '../../components/Carousel'
import Image from 'next/image'

import mmdrva from "../../public/websitegifs/mmd.gif"
import makaira from '../../public/websitegifs/makaira.gif'
import dataamp from '../../public/websitegifs/dataamp.gif'
import dataamp2 from '../../public/websitegifs/dataamp2.gif'

import computer from '../../public/code.jpg'
import { DiveInBlockLeft } from '@/components/DiveInBlockLeft'
import { DiveInBlockRight } from '@/components/DiveInBlockRight'
import { FrontPageSectionWrapper } from '@/components/FrontPageSectionWrapper'
import { DiveInBlockLeftNoButton } from '@/components/DiveInNoButton'
import { DiveInBlockRightNoButton } from '@/components/DiveInNoButtonRight'


export default function Page(){

    return(
    <>
        <header className='h-36 flex justify-center items-center flex-col bg-secondary'>
            <h1 className='text-xl'>Website Development Portfolio</h1>
            <p className='text-sm text-center'>Swipe to view our recent web development efforts!</p>
        </header>
        <section className="h-full bg-primary flex justify-center items-center">
            <Carousel imagesArray={[dataamp, dataamp2, makaira, mmdrva, ]}/>
        </section>

        <FrontPageSectionWrapper colorTailwind={'bg-primary/25'}>
        <div className="text-3xl font-bold flex justify-center items-center pb-8"><h4>Our Services</h4></div>
        
        <DiveInBlockLeftNoButton entryTitle='Website Development:' description='Our websites aren&#39;t just pretty faces; they&#39;re high-performance engines
that drive your online success. We build captivating, user-friendly websites that not only look
amazing but also convert visitors into loyal customers. Your brand deserves a digital home that
leaves a lasting impression, and we&#39;re here to make it happen.' imagePath="/social.jpg"  />
        
        <DiveInBlockRightNoButton entryTitle='Systems Integration Wizardry:' description='In a world of disconnected systems, we&#39;re the bridge builders!
Our experts specialize in integrating your software and systems, creating a seamless flow of
information across your organization. Efficiency skyrockets, productivity soars, and you can
finally bid farewell to those frustrating data silos.'  imagePath='/code.jpg'/>


        
       
      </FrontPageSectionWrapper>

      <div className='h-full w-full bg-secondary/25 p-8'>

      <DiveInBlockLeftNoButton entryTitle='CRM Mastery:' description='Customer relationships are the heartbeat of any business. With our CRM
solutions, we turbocharge your ability to connect, engage, and nurture those relationships. Say
goodbye to scattered data and hello to streamlined communication, automated workflows, and
in-depth insights. It&#39;s like having a personal assistant for every customer!' imagePath="/social.jpg"  />
    </div>



      <div className='h-full w-full bg-accent/25 p-8'>
        <div className='flex flex-col gap-4  items-center'>
        <h3 className='font-bold'>Ready to revolutionize your tech game?</h3>

        <p className='text-center'>
         Amp Lab Marketing is your ticket to the future. Let&#39;s
innovate, integrate, and elevate your business to new heights!
</p>

        </div>
        </div>
        <section className="bg-secondary w-full h-full p-4 flex flex-col gap-4 items-center justify-center">
            <h2>About Our Developer</h2>
            <div className='text-center flex justify-content items-center flex-col gap-2'>
                <h3 >Connor Smith</h3>
                <p className='text-xs'>Connor is a Typescript, React, and Node Web Developer who has experience developing full-stack web application at scale. He started a profitable web-development business, and spent time building business metrics applications and internal tools for a local healthcare conglomerate in South Eastern Virginia. He spends his freetime volunteering at a Local Fire Department as a Firefighter/AEMT</p>
            </div>
        </section>

       
    </>
    )
}