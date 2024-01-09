'use client'

import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import {useSelectedLayoutSegment} from 'next/navigation';


const items: TabsProps["items"] = [
  {
    key: "/history",
    label: "История",
  },
  {
    key: "/culture",
    label: "Культура",
  },
  {
    key: "/photogallery",
    label: "Фотогалерея",
  },
];



const Navigation: React.FC = () => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  
  const handleTabChange = (key: string) => {
    
    window.location.href = `/${selectedLayoutSegment}/${key}`;
    
  };
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorBorderSecondary: "none",
            colorText: "white",
            itemSelectedColor: "#72de6f",
            itemHoverColor: "#6db56b",
            inkBarColor: "#72de6f",
            itemActiveColor: "#72de6f",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <Tabs
        className="navigation"
        style={{width: '80%', margin: '0 auto'}}
        activeKey=""
        size="large"
        centered
        onChange={(key) => handleTabChange(key)}
        items={items}
      ></Tabs>
    </ConfigProvider>
  );
};

export { Navigation };
