import { Typography } from "antd";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface ContentProps {
  src: string;
  contentKey: string;
}

const Content: React.FC<ContentProps> = ({
  src,
  contentKey 
}) => {

  const t = useTranslations(contentKey);
  return (
    
    <div className="content" style={{maxWidth: "1400px"}}>
      <Typography.Title level={1}>{t("title")}</Typography.Title>
      <Typography.Paragraph>{t("paragraph#1")}</Typography.Paragraph>
      {/* <img src={src}></img> */}
      <Typography.Paragraph>{t("paragraph#2")}</Typography.Paragraph>
      <Typography.Paragraph>{t("paragraph#3")}</Typography.Paragraph>
      <Typography.Paragraph>{t("paragraph#4")}</Typography.Paragraph>
      <Typography.Paragraph>{t("paragraph#5")}</Typography.Paragraph>
    </div>
  );
};

export { Content };
