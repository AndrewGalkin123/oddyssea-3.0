import { Row, Divider, Typography } from "antd";
import { RedirectBlock } from "../../MainRedirectBlock/RedirectBlock";

const items = [
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
  {
    href: "",
    src: "/assets/cultureComponent/dukeMonument.jpeg",
    title: "Duke Monument",
  },
];

const CultureContent: React.FC = () => {
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        Культура
      </Typography.Title>
      <Divider style={{ margin: "10px 0 10px 0" }} />
      <div className="content" style={{ maxWidth: "1350px" }}>
        <div
          id="culture_photos"
          style={{
            position: "relative",
            textAlign: "center",
            letterSpacing: "16px",
            marginBottom: "20px",
            overflow: "hidden",
            height: "640px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-20px",
              top: "0",
              right: "-20px",
            }}
          >
            {items.map((item) => (
              <RedirectBlock
                key={item.src}
                href={item.href}
                src={item.src}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </Row>
  );
};

export { CultureContent };
