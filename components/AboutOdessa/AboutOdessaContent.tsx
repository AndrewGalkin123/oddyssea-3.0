"use client";

import { Row, Typography, Divider } from "antd";
import "./AboutOdessa.css";
import { useTranslations } from "next-intl";

const AboutOdessaContent: React.FC = () => {
  const t = useTranslations("AboutOdessa");
  const textKeys = [
    "welcomeToOdessa",
    "odessaHistory",
    "websiteDescription",
    "artAndCulture",
    "gastronomicDelights",
    "promenadeAlongTheSeaside",
    "oddysseaGuide",
    "welcomeToOdessaInspiration",
  ];
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Typography.Title className="title" level={3}>
          {t("title")}
        </Typography.Title>
        <Divider></Divider>
        <div className="content" style={{ maxWidth: "1400px" }}>
          <div className="about-odessa-block">
            <img className="odessa-flag" src="/assets/odessaFlag.png"></img>
            <br></br>
            <div className="text">
              {textKeys.map((key) => (
                <p
                  style={{ marginBottom: "10px" }}
                  key={key}
                  className="paragraph"
                >
                  {t(key)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Row>
    </main>
  );
};

export { AboutOdessaContent };
