"use client"
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

export function RightInViewAnimation(props: { children: ReactNode, position: string}){

    const {ref, inView} = useInView({
        threshold: 0.1,
    })

    // const [animationText, setAnimationText] = useState('')


    return(
        <div ref={ref} className={`${props.position} transition ease-in-out delay-300 ${inView ? `opacity-1 -translate-x-4`: 'opacity-0'}`}>
            {props.children}
        </div>
    )

}
