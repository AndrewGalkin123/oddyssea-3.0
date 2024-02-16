"use client";
import { Row, Col } from "antd";
import { ContentMenu } from "../../../../components/CulturePageComponents/ContentMenu/ContentMenu";
import { Content } from "../../../../components/CulturePageComponents/Content/Content";
import { useTranslations } from "next-intl";

export default function Culture() {
  const handleMenuItemClick = (key: string) => {
    return key;
  };
  const t = useTranslations(handleMenuItemClick);
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Col md={3}>
          <ContentMenu onItemClick={handleMenuItemClick}></ContentMenu>
        </Col>
        <Col md={21}>
          <Content
            title="Опера"
            firstParagraph="Одесская Опера"
            secondParagraph="123123"
            thirdParagraph="213123"
            fourthParagraph="1212"
            fifthParagraph="d1"
            src="/assets/historyComponent/opera.jpg"
          />
        </Col>
      </Row>
    </main>
  );
}
