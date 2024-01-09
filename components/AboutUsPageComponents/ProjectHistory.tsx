"use client";
import { Row, Typography, Divider } from "antd";
import {useTranslations} from 'next-intl';

const ProjectHistory: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <Row>
      <Typography.Title className="title" level={3}>
      {t('title')}
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