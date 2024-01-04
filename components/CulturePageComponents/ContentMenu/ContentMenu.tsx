"use client";

import { Menu } from "antd";

const { Item, SubMenu } = Menu;

const ContentMenu: React.FC = () => {
  return (
    <Menu style={{ height: "100%"}} >
      <SubMenu key={"1"} title="Номер 1">
        <Item key="htmlLesson1">Урок №1</Item>
        <Item key="htmlLesson2">Урок №2</Item>
        <Item key="htmlLesson3">Урок №3</Item>
        <Item key="htmlLesson4">Урок №4</Item>
      </SubMenu>
      <SubMenu key={"2"} title="Номер 2 ">
        <Item key="htmlLesson1">Урок №1</Item>
        <Item key="htmlLesson2">Урок №2</Item>
        <Item key="htmlLesson3">Урок №3</Item>
        <Item key="htmlLesson4">Урок №4</Item>
      </SubMenu>
    </Menu>
  );
};

export { ContentMenu };
