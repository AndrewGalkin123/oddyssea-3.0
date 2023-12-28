import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "История",
    children: "", // сюда позже добавить страничку
  },
  {
    key: "2",
    label: "Культура",
  },
  {
    key: "3",
    label: "Фотогалерея",
  },
];

const Navigation: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorBorderSecondary: 'none',
            colorText: 'white',
            itemSelectedColor: '#72de6f',
            itemHoverColor: "#6db56b",
            inkBarColor: '#72de6f',
            itemActiveColor: '#72de6f',
            algorithm: true, // Enable algorithm
          }
        }
      }}
    >
      <Tabs className="navigation" size="large" centered items={items}></Tabs>
    </ConfigProvider>
  );
};

export { Navigation };
