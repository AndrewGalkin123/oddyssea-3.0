"use client";

import { RedirectBlock } from "../../../../components/common/MainRedirectBlock/RedirectBlock";
import { Row, Col, FloatButton } from "antd";
import { useTranslations } from "next-intl";

export default function History() {
  const t = useTranslations("Common");
  const items = [
    {
      href: `history/archaeological-museum`,
      src: "/assets/historycomponent/opera.jpg",
      title: t("odessaArchaeologicalMuseum"),
    },
    {
      href: "history/theater-garden",
      src: "/assets/historycomponent/opera.jpg",
      title: t("theaterGarden"),
    },
    {
      href: `history/amusement-park`,
      src: "/assets/historycomponent/opera.jpg",
      title: t("lunapark"),
    },
    {
      href: "history/vorontsovsky-lighthouse",
      src: "/assets/historycomponent/opera.jpg",
      title: t("vorontsovLighthouse"),
    },
    {
      href: `history/paul-church`,
      src: "/assets/historycomponent/opera.jpg",
      title: t("stPaulChurch"),
    },
    {
      href: "history/sailor-wife",
      src: "/assets/historycomponent/opera.jpg",
      title: t("sailor'sWife"),
    },
    {
      href: "history/odessa-opera",
      src: "/assets/historycomponent/opera.jpg",
      title: t("opera"),
    },
    {
      href: "history/potemkin-stairs",
      src: "/assets/historycomponent/opera.jpg",
      title: t("potemkinStairs"),
    },
    {
      href: "history/duke-monument",
      src: "/assets/historycomponent/opera.jpg",
      title: t("dukeMonument"),
    },
    {
      href: "history/vorontsov-palace",
      src: "/assets/historycomponent/opera.jpg",
      title: t("vorontsovPalace"),
    },
    {
      href: "history/pushkin-monument",
      src: "/assets/historycomponent/opera.jpg",
      title: t("pushkinMonument"),
    },
    {
      href: "history/odessa-passage",
      src: "/assets/historycomponent/opera.jpg",
      title: t("odessaPassage"),
    },
    {
      href: "history/victory-wings",
      src: "/assets/historycomponent/opera.jpg",
      title: t("victoryWings"),
    },
    {
      href: "history/victory-park",
      src: "/assets/historycomponent/opera.jpg",
      title: t("victoryPark"),
    },
    {
      href: "history/vorontsov-monument",
      src: "/assets/historycomponent/opera.jpg",
      title: t("vorontsovMonument"),
    },
    {
      href: "history/shahsky-palace",
      src: "/assets/historycomponent/opera.jpg",
      title: t("shahskyPalace"),
    },
    {
      href: "history/shevchenko-park",
      src: "/assets/historycomponent/opera.jpg",
      title: t("shevchenkoPark"),
    },
    {
      href: "history/deribasovskaya-street",
      src: "/assets/historycomponent/opera.jpg",
      title: t("deribasovskayaStreet"),
    },
    {
      href: "history/seaside-boulevard",
      src: "/assets/historycomponent/opera.jpg",
      title: t("seasideBoulevard"),
    },
    {
      href: "history/odessa-archaeological-museum",
      src: "/assets/historycomponent/opera.jpg",
      title: t("odessaArchaeologicalMuseum"),
    },
    {
      href: "history/deribasovskaya-city-park",
      src: "/assets/historycomponent/opera.jpg",
      title: t("deribasovskayaСityPark"),
    },
    {
      href: "history/lanzheron",
      src: "/assets/historycomponent/opera.jpg",
      title: t("lanzheron"),
    },
    {
      href: "history/dumska-square",
      src: "/assets/historycomponent/opera.jpg",
      title: t("dumskaSquare"),
    },
    {
      href: "history/defense-monument",
      src: "/assets/historycomponent/opera.jpg",
      title: t("defenseMonument"),
    },
    {
      href: "history/art-museum",
      src: "/assets/historycomponent/opera.jpg",
      title: t("artMuseum"),
    },
    {
      href: "history/spaso-preobrazhensky-cathedral",
      src: "/assets/historycomponent/opera.jpg",
      title: t("spasoPreobrazhenskyCathedral"),
    },
    // Add other items with dynamic href values...
  ];

  return (
    <main style={{ padding: "100px 0px" }}>
      <Row gutter={[16, 16]} justify="center">
        {items.map((item) => (
          <Col key={item.href}>
            <RedirectBlock href={item.href} src={item.src} title={item.title} />
          </Col>
        ))}
      </Row>
      <FloatButton.BackTop />
    </main>
  );
}
