export function IlluminationAnimation(props: {text: string}){
    return (<span className="ease-in-out duration-300 hover:text-yellow-200 hover:text-3xl hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{props.text}</span>)
}