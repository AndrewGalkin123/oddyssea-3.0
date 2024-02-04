'use client'

import { RedirectBlock } from "../../../../components/common/MainRedirectBlock/RedirectBlock";
import { Row, Col, FloatButton } from "antd";


const items = [
  {
    href: `history/12`,
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  {
    href: "/history/sight/someOtherDynamicValue",
    src: "/assets/historycomponent/opera.jpg",
    title: "sda",
  },
  // Add other items with dynamic href values...
];

export default function History() {
  return (
    <main style={{padding: '100px 0px'}}>
      <Row gutter={[16, 16]} justify='center' >
        {items.map((item) => (
         <Col key={item.href}>
            <RedirectBlock
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
