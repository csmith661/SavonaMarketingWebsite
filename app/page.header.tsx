"use client"

import { ParallaxBannerComponent } from "@/components/ParallaxBanner"
import { ParallaxProvider } from "react-scroll-parallax"


export function Header(){
    return (
    <ParallaxProvider>
        <header className="h-full w-full">
            <ParallaxBannerComponent/>
        </header>
    </ParallaxProvider>
    )
}