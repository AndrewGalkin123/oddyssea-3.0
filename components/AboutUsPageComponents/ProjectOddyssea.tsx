"use client";
import { Row, Typography, Divider } from "antd";
import "./ProjectOddyssea.css";
import { useTranslations } from "next-intl";

const ProjectOddyssea: React.FC = () => {
  const t = useTranslations("AboutOddyssea");
  const textKeys = [
    "welcomeMessage",
    "whyChooseOddyssea",
    "virtualExperience",
    "understandYourNeeds",
    "personalizedRoutes",
    "startVirtualJourney",
    "contactUs",
  ];
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("projectOddyssea")}
      </Typography.Title>
      <Divider></Divider>
      <div className="content">
        <img className="avatar" src="/assets/панда.jpg" />
        <div>
          {textKeys.map((key) => (
            <p style={{ marginBottom: "10px" }} key={key} className="paragraph">
              {t(key)}
            </p>
          ))}
        </div>
      </div>
    </Row>
  );
};

export { ProjectOddyssea };
