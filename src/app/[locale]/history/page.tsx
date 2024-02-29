"use client";

import { RedirectBlock } from "../../../../components/common/MainRedirectBlock/RedirectBlock";
import { Row, Col, FloatButton } from "antd";
import { useTranslations } from "next-intl";

export default function History() {
  const t = useTranslations("Common");
  const items = [
    {
      href: `history/archaeological-museum`,
      src: "/assets/historyPageImages/archaeological-museum-logo.jpeg",
      title: t("odessaArchaeologicalMuseum"),
    },
    {
      href: "history/theater-garden",
      src: "/assets/historyPageImages/theaterGarden.jpg",
      title: t("theaterGarden"),
    },
    {
      href: `history/amusement-park`,
      src: "/assets/historyPageImages/lunapark.jpg",
      title: t("lunapark"),
    },
    {
      href: "history/vorontsovsky-lighthouse",
      src: "/assets/historyPageImages/lighthouse.jpg",
      title: t("vorontsovLighthouse"),
    },
    {
      href: `history/paul-church`,
      src: "/assets/historyPageImages/pavelChurch1.jpeg",
      title: t("stPaulChurch"),
    },
    {
      href: "history/sailor-wife",
      src: "/assets/historyPageImages/sailorWife.jpg",
      title: t("sailor'sWife"),
    },
    {
      href: "history/odessa-opera",
      src: "/assets/historyPageImages/operaHouse.jpeg",
      title: t("opera"),
    },
    {
      href: "history/potemkin-stairs",
      src: "/assets/historyPageImages/potemkinStairs.jpg",
      title: t("potemkinStairs"),
    },
    {
      href: "history/duke-monument",
      src: "/assets/historyPageImages/duke.jpeg",
      title: t("dukeMonument"),
    },
    {
      href: "history/vorontsov-palace",
      src: "/assets/historyPageImages/vorontsov-palace.jpeg",
      title: t("vorontsovPalace"),
    },
    {
      href: "history/pushkin-monument",
      src: "/assets/historyPageImages/pushkin-monument.jpeg",
      title: t("pushkinMonument"),
    },
    {
      href: "history/odessa-passage",
      src: "/assets/historyPageImages/passage.jpeg",
      title: t("odessaPassage"),
    },
    {
      href: "history/victory-wings",
      src: "/assets/historyPageImages/victoryWings.png",
      title: t("victoryWings"),
    },
    {
      href: "history/victory-park",
      src: "/assets/historyPageImages/victory-park-2.jpeg",
      title: t("victoryPark"),
    },
    {
      href: "history/vorontsov-monument",
      src: "/assets/historyPageImages/vorontsovMonument4.jpeg",
      title: t("vorontsovMonument"),
    },
    {
      href: "history/shahsky-palace",
      src: "/assets/historyPageImages/shahskyPalace.jpeg",
      title: t("shahskyPalace"),
    },
    {
      href: "history/shevchenko-park",
      src: "/assets/historyPageImages/shevchenko-park.jpeg",
      title: t("shevchenkoPark"),
    },
    {
      href: "history/deribasovskaya-street",
      src: "/assets/historyPageImages/derebasovskaStreet3.jpeg",
      title: t("deribasovskayaStreet"),
    },
    {
      href: "history/seaside-boulevard",
      src: "/assets/historyPageImages/seaside-boulevard3.jpeg",
      title: t("seasideBoulevard"),
    },
    {
      href: "history/deribasovskaya-city-park",
      src: "/assets/historyPageImages/cityPark.jpeg",
      title: t("deribasovskayaСityPark"),
    },
    {
      href: "history/lanzheron",
      src: "/assets/historyPageImages/lanzheron2.jpeg",
      title: t("lanzheron"),
    },
    {
      href: "history/dumska-square",
      src: "/assets/historyPageImages/dumskaSquare.jpeg",
      title: t("dumskaSquare"),
    },
    {
      href: "history/defense-monument",
      src: "/assets/historyPageImages/defenseMonument.jpeg",
      title: t("defenseMonument"),
    },
    {
      href: "history/art-museum",
      src: "/assets/historyPageImages/art-museum.jpeg",
      title: t("artMuseum"),
    },
    {
      href: "history/spaso-preobrazhensky-cathedral",
      src: "/assets/historyPageImages/spaso-preobrazhensky-cathedral.jpeg",
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
