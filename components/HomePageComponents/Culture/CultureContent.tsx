import { Row, Divider, Typography } from "antd";
import { RedirectBlock } from "../../common/MainRedirectBlock/RedirectBlock";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from 'react-redux';
import { setContentKey } from "@/redux/features/culture-content-key-slice";


const CultureContent: React.FC = () => {
  const dispatch = useDispatch();
  const t = useTranslations("Common");
  const cultureT = useTranslations("CultureContentMenu")
  const items = [
    {
      key: "Eclecticism",
      src: "/assets/cultureComponent/dumskaSquare.jpg",
      title: cultureT("architecture"),
    },
    {
      key: "Delicacies",
      src: "/assets/cultureComponent/92_main-v1583937428.jpg",
      title:  cultureT("delicacies"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("pastryShops"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("culturalEvents"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("synagogues"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("literatureMuseum"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("cityWalks"),
    },
    {
      src: "/assets/cultureComponent/dukeMonument.jpeg",
      title:  cultureT("jewishCuisine"),
    },
  ];
  
  return (
    <Row>
      <Typography.Title className="title" level={3}>
        {t("culture")}
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
                key={item.key}
                href="/culture"
                src={item.src}
                title={item.title}
                onClick={
                  dispatch(setContentKey(item.key))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Row>
  );
};

export { CultureContent };
