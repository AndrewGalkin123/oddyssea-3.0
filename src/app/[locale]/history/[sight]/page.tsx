'use client'
import { SightPageContent } from "../../../../../components/SightPageComponents/SightPageContent";
import { usePathname } from 'next/navigation';

export default function SightPage(){
    const path = usePathname()
    console.log(path)
    return(
        <main style={{padding: '60px 0px'}}>
            <SightPageContent/>
        </main>
    )
}