"use client";
import { Row, Divider, Typography } from "antd";
import { RedirectBlock } from "../../common/MainRedirectBlock/RedirectBlock";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { setContentKey } from "@/redux/features/culture-content-key-slice";

const CultureContent: React.FC = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Common");
  const cultureT = useTranslations("CultureContentMenu");

  const items = [
    {
      key: "Eclecticism",
      src: "/assets/cultureComponent/operaHouse.jpeg",
      title: cultureT("architecture"),
    },
    {
      key: "Delicacies",
      src: "/assets/cultureComponent/cuisine.png",
      title: cultureT("delicacies"),
    },
    {
      key: "PastryShops",
      src: "/assets/cultureComponent/pastryShops.png",
      title: cultureT("pastryShops"),
    },
    {
      key: "CulturalEvents",
      src: "/assets/cultureComponent/filmFestival.png",
      title: cultureT("culturalEvents"),
    },
    {
      key: "Synagogues",
      src: "/assets/cultureComponent/synagogue.png",
      title: cultureT("synagogues"),
    },
    {
      key: "LiteratureMuseum",
      src: "/assets/cultureComponent/literatureMuseum.png",
      title: cultureT("literatureMuseum"),
    },
    {
      key: "CityWalks",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("cityWalks"),
    },
    {
      key: "JewishCuisine",
      src: "/assets/cultureComponent/jewishCuisine.png",
      title: cultureT("jewishCuisine"),
    },
  ];

  const handleClick = (key: string) => {
    dispatch(setContentKey(key));
  };
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("culture")}
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div
        className="content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",

          gap: "20px",
        }}
      >
        {items.map((item) => (
          <RedirectBlock
            key={item.key}
            href="/culture"
            src={item.src}
            title={item.title}
            onClick={() => handleClick(item.key)}
          />
        ))}
      </div>
    </Row>
  );
};

export { CultureContent };
