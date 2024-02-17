
import { Menu } from "antd";
import { useTranslations } from "next-intl";
const { Item, SubMenu } = Menu;

const ContentMenu: React.FC<{ onItemClick: (key: string) => void }> = ({ onItemClick }) => {
  const t = useTranslations("CultureContentMenu")
  const handleItemClick = (item: { key: string; }) => {
    onItemClick(item.key);
  };
  
  return (
    <Menu style={{ height: "100%"}} onSelect={handleItemClick}>
      <SubMenu key="architecture" title={t("architecture")}>
        <Item key="Eclecticism">{t("eclecticism")}</Item>
        <Item key="ColorfulCenter">{t("colorfulCenter")}</Item>
        <Item key="Marine">{t("marine")}</Item>
        <Item key="UniqueArchitecture">{t("uniqueArchitecture")}</Item>
      </SubMenu>
      <SubMenu key="2" title="Номер 2 ">
        <Item key="htmlLesson1">Урок №1</Item>
        <Item key="htmlLesson2">Урок №2</Item>
        <Item key="htmlLesson3">Урок №3</Item>
        <Item key="htmlLesson4">Урок №4</Item>
      </SubMenu>
    </Menu>
  );
};

export { ContentMenu };
