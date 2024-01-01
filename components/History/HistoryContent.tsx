import { Row, Divider, Typography } from "antd";
import { HistoryComponent } from "./HistoryComponent";

const items = [
  {
    href: "/",
    src: "/assets/historyComponent/opera.jpg",
    title: "",
    info: "",
  },
  {
    href: "/",
    src: "/assets/historyComponent/lighthouse.jpg",
    title: "",
    info: "",
  },
  {
    href: "/",
    src: "/assets/historyComponent/pavelCathedral.jpg",
    title: "",
    info: "",
  },
  {
    href: "/",
    src: "/assets/historyComponent/sailorWife.jpeg",
    title: "",
    info: "",
  },
];

const HistoryContent: React.FC = () => {
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        История
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div
        className="content"
        style={{
          maxWidth: "1500px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "0 15px",
          marginBottom: "20px",
        }}
      >
        {items.map((item) => (
          <HistoryComponent
            href={item.href}
            src={item.src}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </Row>
  );
};

export { HistoryContent };
