"use client";
import { Row, Typography, Divider } from "antd";
import "./ProjectOddyssea.css";
import { useTranslations } from "next-intl";

const ProjectOddyssea: React.FC = () => {
  const t = useTranslations("AboutOddyssea");
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("projectOddyssea")}
      </Typography.Title>
      <Divider></Divider>
      <div className="content" style={{ maxWidth: "1350px" }}>
        <img className="avatar" src="/assets/панда.jpg" />
        <div>
          <p>{t("welcomeMessage")}</p>
          <br />
          <br />
          <p>{t("whyChooseOddyssea")}</p>
          <p>{t("virtualExperience")}</p>
          <br />
          <p>{t("understandYourNeeds")}</p>
          <p>{t("personalizedRoutes")}</p>
          <br />
          <p>{t("startVirtualJourney")}</p>
          <p>{t("contactUs")}</p>
        </div>
      </div>
    </Row>
  );
};

export { ProjectOddyssea };
