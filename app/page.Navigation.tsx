"use client"
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {usePathname} from 'next/navigation'
import {Button, Drawer} from 'antd'
import {CloseOutlined, MenuOutlined} from '@ant-design/icons'


export default function NavigationBar(){
    const path = usePathname()
    const window = useWindowSize()

    const [open, setOpen] = useState(false)

    const showDrawer = useCallback(() => {
        setOpen(true);
      }, []);
    
      const onClose = useCallback(() => {
        setOpen(false);
      }, []);

    const tabs = useMemo(()=>{return [{title: "Home", path: "/"}, {title: "Services", path: "/services"}, {title: "Web Development", path: "/web-development"}, {title: "Mailers", path: "/mailers"},]},[])

    if(!window.width) return
    if(window.width > 640){
            return (
                <ul className="nav flex h-16 w-full text-small items-center px-2 md:gap-3 md:px-8 bg-primary/50">
                    {tabs.map((tab, index)=>(
                    <li key={index} className="nav-item">
                    <Link className={`transition ${path === tab.path ? 'text-white underline decoration white' : ''}`} aria-current="page" href={tab.path}>{tab.title}</Link>{index === tabs.length-1 ? "" : ' | '}
                    </li>))
                    }
                </ul>
            )
} 
    if(window.width < 640){
            return (
                <div className="bg-primary/50 h-16 flex items-center px-4">
                    <Button className="fixed top-4 left-4 z-20" icon={open ? <CloseOutlined rev={undefined} /> : <MenuOutlined rev={undefined} /> } onClick={showDrawer}>

                    </Button>
                    <Drawer placement="right" onClose={onClose} open={open}>
                        <ul className="nav flex flex-col gap-4  text-xl h-48 w-full text-small items-center px-2">
                            {tabs.map((tab, index)=>(
                            <li key={index} className="nav-item">
                            <Link onClick={()=>{setOpen(false)}} className={`transition ${path === tab.path ? 'text-black underline decoration white' : ''}`} aria-current="page" href={tab.path}>{tab.title}</Link>
                            </li>))
                            }
                        </ul>
                    </Drawer>
                </div>
            )
    } 
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{width: number|undefined, height: number|undefined}>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
         
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount
      return windowSize;
    }