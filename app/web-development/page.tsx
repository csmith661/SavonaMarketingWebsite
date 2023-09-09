import {Carousel} from '../../components/Carousel'

import mmdrva from "../../public/mmd.gif"
import computer from '../../public/computer.jpg'
import metrics from "../../public/metrics.jpg"
import makaira from '../../public/makaira.gif'

export default function Page(){

    return(
    <>
        <header className='h-36 flex justify-center items-center flex-col bg-secondary'>
            <h1 className='text-xl'>Website Development Portfolio</h1>
            <p className='text-sm text-center'>Swipe to view our recent web development efforts!</p>
        </header>
        <section className="h-72 bg-primary flex justify-center items-center">
            <Carousel imagesArray={[makaira, mmdrva, computer, metrics ]}/>
        </section>
        <section className="bg-secondary w-full h-72">
        </section>
    </>
    )
}