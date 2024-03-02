"use client"

import { SizeRegulator } from "../SizeRegulator/SizeRegulator";
import { Flex, Image } from "antd";

interface PhotoGalleryContentProps { 
    arr: Array<string>;
}

const PhotoGalleryContent:React.FC<PhotoGalleryContentProps> = ({arr}) => {
    return(
        <div>
                <Flex align="center" justify="center" wrap="wrap" gap="middle">
                    {
                        arr.map((item => <Image key={item} width="250px" height="250px" src={item}/>))
                    }
                </Flex>
            
        </div>
    )
}

export {PhotoGalleryContent}