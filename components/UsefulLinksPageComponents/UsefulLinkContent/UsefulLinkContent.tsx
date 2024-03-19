"use client";
import { Col, Divider, Row, Typography } from "antd";
import UsefulLinkBlock from "../UsefulLinkBlock/UsefulLinkBlock";
import { useTranslations } from "next-intl";

const UsefulLinkContent = () => {
  const t = useTranslations("UsefulLinksPage")
  const items = [
    {
      title: t("dolphinarium"),
      paragraph: t("dolphinariumDescription"),
      href: "http://www.nemo.od.ua/service/all-inclusive-v-nemo/?utm_source=google&utm_medium=cpc&utm_campaign=poisk&gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCARIxzhsKfEDoqjHh4I--jx18b74uQZQxw0pjmV4hrznE270uo7SHYhoCTMAQAvD_BwE"
    },
    {
      title: t("odessaOfficial"),
      paragraph: t("odessaOfficialDescription"),
      href: "https://omr.gov.ua/ru/"
    },
    {
      title: t("opera"),
      paragraph: t("operaDescription"),
      href: "https://concert.ua/uk/venue/operahouse-odesa?gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCAQdtEo0nhXZyh1yTiJ63k-UTZx0ZmTdf2C8FDq7Il2eyvvVwYlsiqhoCdgIQAvD_BwE"
    },
    {
      title: t("lunapark"),
      paragraph: t("lunaparkDescription"),
      href: "http://lunapark.odessa.ua"
    },
    {
      title: t("archaeologicalMuseum"),
      paragraph: t("archaeologicalMuseumDescription"),
      href: "http://www.archaeology.odessa.ua"
    },
    {
      title: "",
      paragraph: "",
    },
    {
      title: "dsa",
      paragraph: "",
    },
    {
      title: "",
      paragraph: "",
    },
    {
      title: "dsa",
      paragraph: "",
    },
    {
      title: "",
      paragraph: "",
    },
    {
      title: "dsa",
      paragraph: "",
    },
    {
      title: "",
      paragraph: "",
    },
    {
      title: "dsa",
      paragraph: "",
    },
    {
      title: "",
      paragraph: "",
    },
    {
      title: "dsa",
      paragraph: "",
    },
    {
      title: "",
      paragraph: "",
    },
  ];
  return (
    <Row gutter={[16, 16]} style={{ width: "90%", margin: "0 auto" }}>
      <Col span={24}>
        <Typography.Title level={2}>Useful Links</Typography.Title>
      </Col>
      <Divider style={{ margin: "0" }} />
      {items.map(item => (
        <Col span={8}>
          <UsefulLinkBlock title={item.title} paragraph={item.paragraph} href={item.href}/>
        </Col>
      ))}
    </Row>
  );
};

export default UsefulLinkContent;
