import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "История",
    children: '' // сюда позже добавить страничку 
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
  return <Tabs className='navigation' size='large' centered items={items}></Tabs>;
};

export { Navigation };
