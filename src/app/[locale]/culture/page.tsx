import { Row, Col } from "antd";
import { ContentMenu } from "../../../../components/CulturePageComponents/ContentMenu/ContentMenu";
import { Content } from "../../../../components/CulturePageComponents/Content/Content";


export default function Culture() {
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Col md={3}>
          <ContentMenu></ContentMenu>
        </Col>
        <Col md={21}>
          <Content title="Опера" firstParagraph="Одесская Опера" secondParagraph="123123" thirdParagraph="213123" src="/assets/historyComponent/opera.jpg"/>
        </Col>
      </Row>
    </main>
  );
}
