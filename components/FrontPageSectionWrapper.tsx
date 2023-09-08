import { ReactNode } from "react";

export function FrontPageSectionWrapper(props: {children: ReactNode, colorTailwind: string}){
    return(      
    <section className={`md:h-144 lg:h-144 h-full relative ${props.colorTailwind} gap-2 w-full p-2 md:p-8 lg:p-8 grid grid-rows-7 grid-cols-1`}>{props.children}
    </section>    
)
}