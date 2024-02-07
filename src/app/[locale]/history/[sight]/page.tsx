'use client'
import { SightPageContent } from "../../../../../components/SightPageComponents/SightPageContent";
import { usePathname } from 'next/navigation';

export default function SightPage(){
    const path = usePathname().split("/")
    
    
    
    return(
        <main style={{padding: '60px 0px'}}>
            <SightPageContent sight={path[path.length-1]}/>
        </main>
    )
}