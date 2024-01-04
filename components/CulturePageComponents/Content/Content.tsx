'use client'
import { Typography } from "antd";

interface ContentProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  src: string;
}

const Content: React.FC<ContentProps> = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  src,
}) => {
  return (
    <>
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{firstParagraph}</Typography.Paragraph>
      <img src={src}></img>
      <Typography.Paragraph>{secondParagraph}</Typography.Paragraph>
      <Typography.Paragraph>{thirdParagraph}</Typography.Paragraph>
    </>
  );
};

export { Content };
