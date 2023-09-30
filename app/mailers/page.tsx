import {Carousel} from '../../components/Carousel'
import Image from 'next/image'

import item from "../../public/marketingphotos/365b7934-bef8-4ab0-9a25-41abe21e734a_rw_1200.png"
import item3 from "../../public/marketingphotos/Screen Shot 2023-09-12 at 2.59.28 PM.png"
import item4 from "../../public/marketingphotos/Screen Shot 2023-09-12 at 3.07.51 PM.png"


export default function Page(){

    return(
    <>
        <header className='h-36 flex justify-center items-center flex-col bg-secondary'>
            <h1 className='text-xl'>Mailers Portfolio</h1>
            <p className='text-sm text-center'>Swipe to view our recent mailer efforts!</p>
        </header>
        <section className="h-[100vh] bg-primary flex justify-center items-center">
            <Carousel imagesArray={[item3, item4,  ]}/>
        </section>
        <section className="bg-secondary w-full h-full p-4 flex flex-col gap-4 items-center justify-center">
            <h2>About Our Marketing Team</h2>
            <div className='text-center flex justify-content items-center flex-col gap-2'>
                <h3 >Michelle Smith</h3>
                <p className='text-xs'>Michelle brings years of marketing experience to the table. Her areas of emphasis in previous positions have been direct mailing marketing, social media marketing, and marketing consulting for many companies.</p>
            </div>
        </section>

       
    </>
    )
}