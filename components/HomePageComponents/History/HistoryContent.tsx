import { Row, Divider, Typography } from "antd";
import { HistoryComponent } from "./HistoryComponent";
import { useTranslations } from "next-intl";
import RedirectButton from "../../common/RedirectButton/RedirectButton";

const HistoryContent: React.FC = () => {
  const t = useTranslations("Common");
  const info = useTranslations("HomePageHistory");
  const items = [
    {
      href: "history/sailor-wife",
      src: "/assets/historyComponent/sailorWife.jpeg",
      title: info("sailor'sWife"),
      info: info("sailor'sWifeInfo"),
    },
    {
      href: "history/vorontsovsky-lighthouse",
      src: "/assets/historyComponent/lighthouse.jpg",
      title: info("lighthouse"),
      info: info("lighthouseInfo"),
    },
    {
      href: "history/paul-church",
      src: "/assets/historyComponent/pavelCathedral.jpg",
      title: info("lutheranChurch"),
      info: info("lutheranChurchInfo"),
    },
    {
      href: "history/theater-garden",
      src: "/assets/historyPageImages/theaterGarden.jpg",
      title: info("theaterGarden"),
      info: info("theaterGardenInfo"),
    },
  ];
  return (
    <Row style={{ flexDirection: "column" }}>
      <Typography.Title className="title" level={3}>
        {t("history")}
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div
        className="content"
        style={{
          display: "flex",

          marginBottom: "20px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <HistoryComponent
            key={item.title}
            href={item.href}
            src={item.src}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>

      <RedirectButton to="/history">{t("redirectButtonText")}</RedirectButton>
    </Row>
  );
};

export { HistoryContent };
