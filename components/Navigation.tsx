"use client"
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavigationBar(){
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>("/")

    const tabs = useMemo(()=>{return [{title: "Home", path: "/"}, {title: "Web Development", path: "/web-development"}]},[])


    return (
        <ul className="nav flex h-16 w-full items-center gap-3 px-8 bg-primary/50">
            {tabs.map((tab, index)=>(
            <li key={index} className="nav-item">
              <Link className={`transition ${selectedMenuItem === tab.path ? 'text-white underline decoration white' : ''}`} onClick={()=> setSelectedMenuItem(tab.path)} aria-current="page" href={tab.path}>{tab.title}</Link>
            </li>))
}
        </ul>
    )
}