"use client"
import Link from "next/link";
import { useMemo, useState } from "react";
import {usePathname} from 'next/navigation'

export default function NavigationBar(){
    const path = usePathname()

    const tabs = useMemo(()=>{return [{title: "Home", path: "/"}, {title: "Services", path: "/services"}, {title: "Web Development", path: "/web-development"}, {title: "Mailers", path: "/mailers"},]},[])

    
    return (
        <ul className="nav flex h-16 w-full items-center gap-3 px-8 bg-primary/50">
            {tabs.map((tab, index)=>(
            <li key={index} className="nav-item">
              <Link className={`transition ${path === tab.path ? 'text-white underline decoration white' : ''}`} aria-current="page" href={tab.path}>{tab.title}</Link>{index === tabs.length-1 ? "" : ' | '}
            </li>))
}
        </ul>
    )
}