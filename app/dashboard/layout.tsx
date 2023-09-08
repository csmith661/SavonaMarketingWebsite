import {ReactNode} from "react";

export default function DashboardLayout(props: {children: ReactNode}){
    return <body>{props.children}</body>
}