"use client"
import { Row, Divider, Typography } from "antd";
import { RedirectBlock } from "../../common/MainRedirectBlock/RedirectBlock";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { setContentKey } from "@/redux/features/culture-content-key-slice";
import { useEffect } from "react";

const CultureContent: React.FC = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Common");
  const cultureT = useTranslations("CultureContentMenu");
  const contentKey = useSelector((state: { content: { contentKey: string } }) => state.content.contentKey);
  useEffect(() => {
    // Здесь вы можете выполнить любые действия, которые должны быть выполнены при изменении contentKey
    console.log('Content key was updated:', contentKey);
  }, [contentKey]); // Передаем contentKey как зависимость, чтобы useEffect срабатывал при его изменении

 
  const items = [
    {
      key: "Eclecticism",
      src: "/assets/cultureComponent/dumskaSquare.jpg",
      title: cultureT("architecture"),
    },
    {
      key: "Delicacies",
      src: "/assets/cultureComponent/92_main-v1583937428.jpg",
      title: cultureT("delicacies"),
    },
    {
      key: "PastryShops",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("pastryShops"),
    },
    {
      key: "CulturalEvents",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("culturalEvents"),
    },
    {
      key: "Synagogues",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("synagogues"),
    },
    {
      key: "LiteratureMuseum",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("literatureMuseum"),
    },
    {
      key: "CityWalks",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title: cultureT("cityWalks"),
    },
    {
      key: "JewishCuisine",
      src: "/assets/cultureComponent/dukeMonument.jpeg",
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
      <div className="content" style={{ maxWidth: "1350px" }}>
        <div
          id="culture_photos"
          style={{
            position: "relative",
            textAlign: "center",
            letterSpacing: "16px",
            marginBottom: "20px",
            overflow: "hidden",
            height: "640px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-20px",
              top: "0",
              right: "-20px",
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
        </div>
      </div>
    </Row>
  );
};

export { CultureContent };
