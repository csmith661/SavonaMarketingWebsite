'use client'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export function Carousel(props: {imagesArray: StaticImageData[]}){
    const {imagesArray} = props
    const [emblaRef, emblaApi ] = useEmblaCarousel()

    const [selectedImageIndex, setSelectedImageIndex] = useState<number|undefined>(0)

    const onSelect = useCallback((emblaApi: EmblaCarouselType)=>{
        const selected = emblaApi.selectedScrollSnap()
        setSelectedImageIndex(selected)
    },[emblaApi])

    useEffect(()=>{
        if(emblaApi) emblaApi.on('select', onSelect)
    }, [emblaApi?.selectedScrollSnap()])

    return(
    <div className='relative w-full h-full'>
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className='embla_container flex'>
                {imagesArray.map((image, index)=>(<div key={index} className='empla__slide flex-[0_0_100%]'><><Image className='h-72' src={image} alt="portfolio example"/></></div>))}
            </div>
        </div>
        <div className="selectorBar h-1 absolute w-full bottom-3 flex items-center justify-center gap-4">
            {imagesArray.map((value, index)=>(<div key={index} className={`h-full w-8 bg-${index === selectedImageIndex ? 'accent border border-gray-50':'primary'}`}> </div>))}
        </div>
    </div>
        
    )
}