"use client";
import { Collapse, Divider, Typography } from "antd";

interface FAQProps {
  items: Array<object>;
  title: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title }) => {
  return (
    <>
      <Typography.Title className="title" level={3}>
        {title}
      </Typography.Title>
      <Divider></Divider>
      <Collapse size="large" items={items} />
    </>
  );
};

export { FAQ };
