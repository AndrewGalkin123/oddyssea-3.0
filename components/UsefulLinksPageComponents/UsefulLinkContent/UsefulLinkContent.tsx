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
      title: t("artMuseum"),
      paragraph: t("artMuseumDescription"),
      href: "http://ofam.od.ua"
    },
    {
      title: t("coffeeShops"),
      paragraph: t("coffeeShopsDescription"),
      href: "https://www.coffeemarket.dp.ua/article/top-5-kofeen-v-odesse-gde-vkusno-i-nedorogo-popit-kofe/"
    },
    {
      title: t("excursions"),
      paragraph: t("excursionsDescription"),
      href: "https://edo.od.ua/katalog-ekskursii/?gad_source=1&gclid=CjwKCAjwkuqvBhAQEiwA65XxQHW02Z_TccJmqFtRSGZWfLPekT5nZekYUd2mF3JH4EokKElIVHRaXRoCgA4QAvD_BwE"
    },
    {
      title: t("restaurants"),
      paragraph: t("restaurantsDescription"),
      href: "https://www.tripadvisor.ru/Restaurants-g295368-Odesa_Odesa_Oblast.html"
    },
    {
      title: t("wikipedia"),
      paragraph: t("wikipediaDescription"),
      href: "https://uk.wikipedia.org/wiki/Одеса"
    },
    {
      title: t("cinematicVideo"),
      paragraph: t("cinematicVideoDescription"),
      href: "https://www.youtube.com/watch?v=cjs-Y4tycrw"
    },
    {
      title: t("songs"),
      paragraph: t("songsDescription"),
      href: "https://www.youtube.com/watch?v=7iOEF0DodEc"
    },
    {
      title: t("port"),
      paragraph: t("portDescription"),
      href: "https://odessitclub.org/old/index.php/chitalnyi-zal/630-odesskij-port-ot-antichnosti-do-nashikh-dnej"
    },
    {
      title: t("stadium"),
      paragraph: t("stadiumDescription"),
      href: "https://www.stadium.odessa.ua"
    },
    {
      title: t("zoo"),
      paragraph: t("zooDescription"),
      href: "https://www.zoo.ua"
    },
    
  ];
  return (
    <Row gutter={[16, 16]} style={{ width: "90%", margin: "0 auto" }}>
      <Col span={24}>
        <Typography.Title level={2}>Useful Links</Typography.Title>
      </Col>
      <Divider style={{ margin: "0" }} />
      {items.map(item => (
        <Col key={item.title} span={8}>
          <UsefulLinkBlock title={item.title} paragraph={item.paragraph} href={item.href}/>
        </Col>
      ))}
    </Row>
  );
};

export default UsefulLinkContent;
