"use client";
import { Row, Typography, Divider } from "antd";

const ProjectHistory: React.FC = () => {
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        История проекта Oddyssea
      </Typography.Title>
      <Divider></Divider>
      <div className="content" style={{maxWidth: '1350px'}}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae magnam et dolorem neque dolorum quae hic in consequatur amet, obcaecati quam. Aliquid est consequuntur amet fugiat soluta impedit dolores reprehenderit?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae magnam et dolorem neque dolorum quae hic in consequatur amet, obcaecati quam. Aliquid est consequuntur amet fugiat soluta impedit dolores reprehenderit?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae magnam et dolorem neque dolorum quae hic in consequatur amet, obcaecati quam. Aliquid est consequuntur amet fugiat soluta impedit dolores reprehenderit?</p>
      </div>
    </Row>
  );
};

export {ProjectHistory}