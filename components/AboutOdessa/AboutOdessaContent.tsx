"use client";

import { Row, Typography, Divider } from "antd";
import "./AboutOdessa.css";
import { useTranslations } from "next-intl";

const AboutOdessaContent: React.FC = () => {
  const t = useTranslations("AboutOdessa");

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

              <p>{t("welcomeToOdessa")}</p>
              <br></br>
              <p>{t("odessaHistory")}</p>
              <br></br>
              <p>{t("websiteDescription")}</p>
              <br></br>
              <p>{t("artAndCulture")}</p>
              <br></br>
              <p>{t("gastronomicDelights")}</p>
              <br></br>
              <p>{t("promenadeAlongTheSeaside")}</p>
            
              <p>{t("oddysseaGuide")}</p>
              <br></br>
              <p>{t("welcomeToOdessaInspiration")}</p>
              <br></br>
            </div>
          </div>
        </div>
      </Row>
    </main>
  );
};

export { AboutOdessaContent };
