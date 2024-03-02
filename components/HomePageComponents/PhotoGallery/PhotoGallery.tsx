import { Row, Col, Typography, Divider } from "antd";
import "./PhotoGallery.css";
import RedirectButton from "../../common/RedirectButton/RedirectButton";
import { useTranslations } from "next-intl";

const PhotoGallery: React.FC = () => {
  const t = useTranslations("Common");
  return (
    <Row style={{flexDirection: 'column'}}>
      <Typography.Title className="title" level={3}>
      {t("photogallery")}
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div
        className="content photogallery"
        style={{ maxWidth: "1300px", overflow: "hidden" }}
      >
        <Row>
          <Col span={24}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={12}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={8}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={8}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={6}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={6}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
          <Col span={6}>
            {" "}
            <img src="/assets/photogalleryComponent/lighthouse.jpeg"></img>
          </Col>
        </Row>
       
      </div>
      <RedirectButton to="/photogallery">{t("redirectButtonText")}</RedirectButton>
    </Row>
  );
};

export { PhotoGallery };
