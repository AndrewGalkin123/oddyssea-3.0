import { Menu } from "antd";
import { useTranslations } from "next-intl";

const { Item, SubMenu } = Menu;

const ContentMenu: React.FC<{ onItemClick: (key: string) => void }> = ({
  onItemClick,
}) => {
  const t = useTranslations("CultureContentMenu");

  const menuData = [
    {
      key: "architecture",
      items: ["eclecticism", "colorfulCenter", "marine", "uniqueArchitecture"],
    },
    {
      key: "culinaryCulture",
      items: ["delicacies", "fishCuisine", "jewishCuisine", "pastryShops"],
    },
    {
      key: "diversity",
      items: [
        "multiculturalAtmosphere",
        "jewishCommunity",
        "culturalEvents",
        "languageDiversity",
      ],
    },
    {
      key: "religion",
      items: ["cathedralsAndChurches", "synagogues", "religiousHolidays"],
    },
    {
      key: "museumsAndGalleries",
      items: [
        "artMuseum",
        "westernAndEasternArtMuseum",
        "literatureMuseum",
        "artGalleries",
      ],
    },
    {
      key: "theatersAndCinemas",
      items: [
        "operaTheatre",
        "theater'MaskShow'",
        "comedianTheater",
        "cinemas",
        "summerCinemas",
      ],
    },
    {
      key: "streetArt",
      items: [
        "graffiti",
        "streetFestivals",
        "streetExhibitions",
        "streetPerformances",
        "cityWalks",
      ],
    },
  ];

  const handleItemClick = (item: { key: string }) => {
    onItemClick(item.key);
  };

  return (
    <Menu style={{ height: "100%" }} onSelect={handleItemClick}>
      {menuData.map(({ key, items }) => (
        <SubMenu key={key} title={t(key)}>
          {items.map((itemKey) => (
            <Item key={itemKey.replace(itemKey[0], itemKey[0].toUpperCase())}>
              {t(itemKey)}
            </Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export { ContentMenu };
