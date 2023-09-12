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
            <h1 className='text-xl'>Mailers Portfolio</h1>
            <p className='text-sm text-center'>Swipe to view our recent mailer efforts!</p>
        </header>
        <section className="h-full bg-primary flex justify-center items-center">
            <Carousel imagesArray={[makaira, mmdrva, dataamp, dataamp2 ]}/>
        </section>
        <section className="bg-secondary w-full h-full p-4 flex flex-col gap-4 items-center justify-center">
            <h2>About Our Marketing Team</h2>
            <div className='text-center flex justify-content items-center flex-col gap-2'>
                <Image className="h-48 w-36" src={computer} alt="Shelly Smith"/>
                <h3 >Michelle Smith</h3>
                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus id quo rerum commodi impedit voluptatum itaque molestias magni ullam. Enim repellat hic recusandae voluptatem. Minus quia vero dolore modi?</p>
            </div>
        </section>

       
    </>
    )
}