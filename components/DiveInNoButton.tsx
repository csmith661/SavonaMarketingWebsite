import  Image  from "next/image"
import { LeftInViewAnimation } from "./LeftInViewAnimation"

export function  DiveInBlockLeftNoButton(props: {entryTitle: string, description: string,imagePath: string, }){
    const {entryTitle, description, imagePath,} = props
    return(<div className="flex justify-center items-center row-span-3">
          <LeftInViewAnimation position='w-3/5'>
            <div className="text-center">
              <h5 className='text-xl font-semibold'>{entryTitle}</h5>
              <p className='p-4'>{description}</p>
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