
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
      <SubMenu key="CulinaryCulture" title={t("culinaryCulture")}>
        <Item key="Delicacies">{t("delicacies")}</Item>
        <Item key="FishCuisine">{t("fishCuisine")}</Item>
        <Item key="JewishCuisine">{t("jewishCuisine")}</Item>
        <Item key="PastryShops">{t("pastryShops")}</Item>
      </SubMenu>
      <SubMenu key="Diversity" title={t("diversity")}>
        <Item key="MulticulturalAtmosphere">{t("multiculturalAtmosphere")}</Item>
        <Item key="JewishCommunity">{t("jewishCommunity")}</Item>
        <Item key="CulturalEvents">{t("culturalEvents")}</Item>
        <Item key="LanguageDiversity">{t("languageDiversity")}</Item>
      </SubMenu>
      <SubMenu key="Religion" title={t("religion")}>
        <Item key="CathedralsAndChurches">{t("cathedralsAndChurches")}</Item>
        <Item key="Synagogues">{t("synagogues")}</Item>
        <Item key="ReligiousHolidays">{t("culturalEvents")}</Item>
      </SubMenu>
      <SubMenu key="MuseumsAndGalleries" title={t("museumsAndGalleries")}>
        <Item key="ArtMuseum">{t("artMuseum")}</Item>
        <Item key="WesternAndEasternArtMuseum">{t("westernAndEasternArtMuseum")}</Item>
        <Item key="LiteratureMuseum">{t("literatureMuseum")}</Item>
        <Item key="ArtGalleries">{t("artGalleries")}</Item>
      </SubMenu>
    </Menu>
  );
};

export { ContentMenu };
