import {Carousel} from '../../components/Carousel'
import Image from 'next/image'

import mmdrva from "../../public/websitegifs/mmd.gif"
import makaira from '../../public/websitegifs/makaira.gif'
import dataamp from '../../public/websitegifs/dataamp.gif'
import dataamp2 from '../../public/websitegifs/dataamp2.gif'

import computer from '../../public/code.jpg'


export default function Page(){

    return(
    <>
        <header className='h-36 flex justify-center items-center flex-col bg-secondary'>
            <h1 className='text-xl'>Website Development Portfolio</h1>
            <p className='text-sm text-center'>Swipe to view our recent web development efforts!</p>
        </header>
        <section className="h-full bg-primary flex justify-center items-center">
            <Carousel imagesArray={[makaira, mmdrva, dataamp, dataamp2 ]}/>
        </section>
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