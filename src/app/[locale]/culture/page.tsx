"use client";
import { Row, Col } from "antd";
import { ContentMenu } from "../../../../components/CulturePageComponents/ContentMenu/ContentMenu";
import { Content } from "../../../../components/CulturePageComponents/Content/Content";
import { useState } from "react";


export default function Culture() {
  const [contentKey , setContentKey] = useState("Eclecticism")
  const  handleMenuItemClick = (key: string) => {
   
    setContentKey(key)
    
  };
 
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Col md={3}>
          <ContentMenu onItemClick={handleMenuItemClick}></ContentMenu>
        </Col>
        <Col md={21}>
          <Content
            contentKey={contentKey}
            src="/assets/historyComponent/opera.jpg"
           
          />
        </Col>
      </Row>
    </main>
  );
}
