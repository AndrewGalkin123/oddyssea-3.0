"use client"
import React from 'react';
import { Row, Col } from "antd";
import { ContentMenu } from "../../../../components/CulturePageComponents/ContentMenu/ContentMenu";
import { Content } from "../../../../components/CulturePageComponents/Content/Content";
import { useDispatch, useSelector } from 'react-redux';
import { setContentKey } from "../../../redux/features/culture-content-key-slice"
import cultureContent from "../../../../public/content/cultureContent.json";

export default function Culture() {
  const dispatch = useDispatch();
  const contentKey = useSelector((state: { content: { contentKey: string } }) => state.content.contentKey);
  

  const handleMenuItemClick = (key: string) => {
    dispatch(setContentKey(key));
  };

 
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Col md={5}>
          <ContentMenu onItemClick={handleMenuItemClick}></ContentMenu>
        </Col>
        <Col md={19}>
          <Content
            contentKey={contentKey}
            src={cultureContent[contentKey].src}
           
          />
        </Col>
      </Row>

    </main>
  );
}
