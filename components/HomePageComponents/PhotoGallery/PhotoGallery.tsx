import { Row, Col, Typography, Divider, Image } from "antd";
import "./PhotoGallery.css";
import RedirectButton from "../../common/RedirectButton/RedirectButton";
import { useTranslations } from "next-intl";

const PhotoGallery: React.FC = () => {
  const t = useTranslations("Common");
  return (
    <Row style={{ flexDirection: "column" }}>
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
            <img src="/assets/photogalleryComponent/passageRoof.jpg"></img>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={12}>
            <img src="/assets/photogalleryComponent/a173df52-1d1c-4145-84ec-c2594cd5e531.jpeg"></img>
          </Col>
          <Col span={12}>
            <img src="/assets/photogalleryComponent/greenHotel.jpg"></img>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={8}>
            <img src="/assets/photogalleryComponent/dukeMonument.jpg"></img>
          </Col>
          <Col span={8}>
            <img src="/assets/photogalleryComponent/odessaSculpture.jpg"></img>
          </Col>
          <Col span={8}>
            <img src="/assets/photogalleryComponent/church1.jpg"></img>
          </Col>
        </Row>
      </div>
      <RedirectButton to="/photogallery">
        {t("redirectButtonText")}
      </RedirectButton>
    </Row>
  );
};

export { PhotoGallery };
