"use client";
import { Row, Typography, Divider } from "antd";
import { useTranslations } from "next-intl";

const ProjectHistory: React.FC = () => {
  const t = useTranslations("AboutOddyssea");
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("projectHistory")}
      </Typography.Title>
      <Divider></Divider>
      <div className="content" style={{ maxWidth: "1350px" }}>
        <p>{t("inspiredByOdessa")}</p><br></br>
        <p>{t("researchAndConsultation")}</p>
        <p>{t("joinUsOnOddyssea")}</p>
      </div>
    </Row>
  );
};

export { ProjectHistory };
