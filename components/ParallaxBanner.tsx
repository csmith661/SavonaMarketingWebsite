import Image, { StaticImageData } from 'next/image'
import {ParallaxBanner} from 'react-scroll-parallax'
import { IlluminationAnimation } from './IlluminationAnimation'

export function ParallaxBannerComponent(){
    const companyName = "Amp Lab Marketing"


    return(
        <ParallaxBanner layers={[{image: '/lightbulb-background.jpg', speed: -10}, {image: '/lightbulb-foreground.png', speed: 30, translateX: [40, 0], translateY: [10, 0]} ]} className="h-144 md:h-160 lg:h-160 aspect-[2/1]">
            
            <div className='absolute inset-0 font-bold font-mono flex items-center justify-center flex-col'>
                <h1 className="relative text-black text-3xl lg:text-7xl">{companyName}</h1>
                 <p className='lg:text-2xl pt-2'>Your Brand{"'s"} <IlluminationAnimation text={"Brightest"}/> Future Starts Here!</p>
            </div>
        </ParallaxBanner>
    )

} 