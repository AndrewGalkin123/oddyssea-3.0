'use client'

import { RedirectBlock } from "../../../../components/common/MainRedirectBlock/RedirectBlock";
import { Row, Col, FloatButton } from "antd";


const items = [
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },

  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },


  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },

  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  

];

export default function History() {
  return (
    <main style={{padding: '100px 0px'}}>
      <Row gutter={[16, 16]} justify='center' >
        {items.map((item) => (
          <Col>
            <RedirectBlock
              key={item.href}
              href={item.href}
              src={item.src}
              title={item.title}
            />
          </Col>
        ))}
      </Row>
      <FloatButton.BackTop />
    </main>
  );
}
