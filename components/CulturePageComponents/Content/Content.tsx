'use client'
import { Typography } from "antd";

interface ContentProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  fourthParagraph: string;
  fifthParagraph: string;
  src: string;
}

const Content: React.FC<ContentProps> = ({
  title,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  fifthParagraph,
  src,
}) => {
  return (
    <div className="content" style={{maxWidth: "1400px"}}>
      <Typography.Title level={1}>{title}</Typography.Title>
      <Typography.Paragraph>{firstParagraph}</Typography.Paragraph>
      {/* <img src={src}></img> */}
      <Typography.Paragraph>{secondParagraph}</Typography.Paragraph>
      <Typography.Paragraph>{thirdParagraph}</Typography.Paragraph>
      <Typography.Paragraph>{fourthParagraph}</Typography.Paragraph>
      <Typography.Paragraph>{fifthParagraph}</Typography.Paragraph>
    </div>
  );
};

export { Content };
