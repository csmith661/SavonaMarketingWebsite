import { RightInViewAnimation } from "./RightInViewAnimation";
import  Image  from "next/image"

//changes

export function  DiveInBlockRight(props: {entryTitle: string, description: string, buttonText: string, imagePath: string}){
    const {entryTitle, description, imagePath, buttonText} = props
    return(<div className="flex justify-center items-center row-span-3">
          <RightInViewAnimation position=' w-2/5'>
            <div className='flex justify-center items-center'>
               <Image className="rounded-lg border-2 border-secondary " src={imagePath} width="400" height="400" alt="photo of a computer"/>
            </div>
          </RightInViewAnimation>
          <RightInViewAnimation position='w-3/5'>
            <div className="text-center">
              <h5 className='text-xl font-semibold'>{entryTitle}</h5>
              <p className='p-4'>{description}</p>
              <button className="p-2 transition select-none active:scale-90 md:hover:scale-110 lg:hover:scale-110 md:active:translate-y-0.5 lg:active:translate-y-0.5  bg-primary text-white rounded-lg">{buttonText}</button>
            </div>
          </RightInViewAnimation>
        </div>
    )
}