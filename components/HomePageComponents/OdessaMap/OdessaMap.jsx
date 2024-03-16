import { Row, Divider, Typography } from "antd";
import { useTranslations } from "next-intl";

const OdessaMap = () => {
  const t = useTranslations("Common")
  return (
    <Row>
      <Typography.Title className="title" level={3} >
        {t("odessaMap")}
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div
        className="content"
        style={{ maxWidth: "1290px", textAlign: "center" }}
      >
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=14h5r74Wg4V75i8AC2_SOBeYQ_3mBcEE&ehbc=2E312F"
          width="100%"
          height="600"
          title="Google Map"
        ></iframe>
      </div>
    </Row>
  );
};

export default OdessaMap ;
