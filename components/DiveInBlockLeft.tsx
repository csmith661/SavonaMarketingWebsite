import  Image  from "next/image"
import { LeftInViewAnimation } from "./LeftInViewAnimation"
import Link from "next/link"

export function  DiveInBlockLeft(props: {entryTitle: string, description: string, buttonText: string, imagePath: string, buttonPath: string}){
    const {entryTitle, description, imagePath, buttonText, buttonPath} = props
    return(<div className="flex justify-center items-center row-span-3">
          <LeftInViewAnimation position='w-3/5'>
            <div className="text-center">
              <h5 className='text-xl font-semibold'>{entryTitle}</h5>
              <p className='p-4'>{description}</p>
              <Link href={buttonPath}><button className="p-2 transition  active:scale-90 md:hover:scale-110 lg:hover:scale-110 md:active:translate-y-0.5 lg:active:translate-y-0.5  bg-accent text-white rounded-lg">{buttonText}</button></Link>
            </div>
          </LeftInViewAnimation>
          <LeftInViewAnimation position=' w-2/5'>
            <div className='flex justify-center items-center'>
               <Image className="rounded-lg border-2 border-secondary " src={imagePath} width="400" height="400" alt="photo of a computer"/>
            </div>
          </LeftInViewAnimation>
        </div>
    )
}