"use client";
import { Row, Typography, Divider } from "antd";
import { useTranslations } from "next-intl";

const ProjectHistory: React.FC = () => {
  const textKeys = [
    "inspiredByOdessa",
    "researchAndConsultation",
    "joinUsOnOddyssea",
  ];
  const t = useTranslations("AboutOddyssea");
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("projectHistory")}
      </Typography.Title>
      <Divider></Divider>
      <div className="content" style={{ maxWidth: "1350px" }}>
        {textKeys.map((key) => (
          <p style={{ marginBottom: "10px" }} key={key} className="paragraph">
            {t(key)}
          </p>
        ))}
      </div>
    </Row>
  );
};

export { ProjectHistory };
