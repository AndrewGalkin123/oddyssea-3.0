"use client"
import { Row, Col } from "antd";
import { ContentMenu } from "../../../../components/CulturePageComponents/ContentMenu/ContentMenu";
import { Content } from "../../../../components/CulturePageComponents/Content/Content";
import { useDispatch, useSelector } from 'react-redux';
import { setContentKey } from "../../../redux/features/culture-content-key-slice"
import React, { useEffect } from 'react';

export default function Culture() {
  const dispatch = useDispatch();
  const contentKey = useSelector((state: { content: { contentKey: string } }) => state.content.contentKey);

  const handleMenuItemClick = (key: string) => {
    dispatch(setContentKey(key));
  };
  useEffect(() => {
    // Здесь вы можете выполнить любые действия, которые должны быть выполнены при изменении contentKey
    console.log('Content key was updated:', contentKey);
  }, [contentKey]); // Передаем contentKey как зависимость, чтобы useEffect срабатывал при его изменении

 
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Col md={5}>
          <ContentMenu onItemClick={handleMenuItemClick}></ContentMenu>
        </Col>
        <Col md={19}>
          <Content
            contentKey={contentKey}
            src="/assets/historyComponent/opera.jpg"
           
          />
        </Col>
      </Row>

    </main>
  );
}
