"use client";
import { Col, Divider, Row, Typography } from "antd";
import UsefulLinkBlock from "../UsefulLinkBlock/UsefulLinkBlock";

const UsefulLinkContent = () => {
  return (
  
    
      <Row gutter={[16, 16]} style={{ width: "90%", margin: "0 auto" }}>
        <Col span={24}><Typography.Title level={2}>Useful Links</Typography.Title></Col>
        <Divider style={{margin: "0"}}/>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>

        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>

        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>

        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
        <Col span={8}>
          <UsefulLinkBlock />
        </Col>
      </Row>
  
  );
};

export default UsefulLinkContent;
