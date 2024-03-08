"use client"

import { PhotoGalleryFilter } from "../Filter/PhotoGalleryFilter";
import { Flex, Image } from "antd";

interface PhotoGalleryContentProps { 
    arr: Array<string>;
}

const PhotoGalleryContent:React.FC<PhotoGalleryContentProps> = ({arr}) => {
    
    return(
        <div>
                <Flex align="center" justify="center" wrap="wrap" gap="middle">
                    {
                        arr.map((item => <Image style={{objectFit: "cover"}} key={item} width="250px" height="250px" src={item}/>))
                    }
                </Flex>
            
        </div>
    )
}

export {PhotoGalleryContent}