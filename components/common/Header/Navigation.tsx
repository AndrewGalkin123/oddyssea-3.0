"use client";

import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import { useTranslations } from "next-intl";

const Navigation: React.FC = () => {
  const handleTabChange = (key: string) => {
    window.location.href = key;
  };
  const t = useTranslations("Common");
  const items: TabsProps["items"] = [
    {
      key: "/history",
      label: t("history"),
    },
    {
      key: "/culture",

      label: t("culture"),
    },
    {
      key: "/photogallery",
      label: t("photogallery"),
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            colorBorderSecondary: "none",
            colorText: "white",
            itemSelectedColor: "#72de6f",
            itemHoverColor: "#6db56b",
            inkBarColor: "#72de6f",
            itemActiveColor: "#72de6f",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <Tabs
        className="navigation"
        style={{ width: "80%", margin: "0 auto" }}
        activeKey=""
        size="large"
        centered
        onChange={(key) => handleTabChange(key)}
        items={items}
      ></Tabs>
    </ConfigProvider>
  );
};

export { Navigation };
