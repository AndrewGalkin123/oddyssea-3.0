'use client'

import { Row, Typography, Divider } from "antd";
import './AboutOdessa.css'
import { useTranslation } from 'next-i18next';

const AboutOdessaContent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <main style={{ padding: "100px 0px" }}>
      <Row>
        <Typography.Title className="title" level={3}>
          Информация про Одессу
        </Typography.Title>
        <Divider></Divider>
        <div className="content" style={{ maxWidth: "1400px" }}>
            <div className="about-odessa-block">
                <img className="odessa-flag" src="/assets/odessaFlag.png"></img>
                <br></br>
                <div className="text">
                    <p>{t('greeting')}</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt rem expedita nobis temporibus mollitia saepe, recusandae ratione error architecto animi rerum quis, unde quos accusamus excepturi vero ipsa impedit.</p>
                    <br></br>
                    
                </div>
            </div>
        </div>
      </Row>
    </main>
  );
};


export {AboutOdessaContent}