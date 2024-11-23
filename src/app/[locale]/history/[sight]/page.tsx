"use client";
import { RedirectBlock } from "../../../../../components/common/MainRedirectBlock/RedirectBlock";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import historyContentData from "../../../../../content/historyContent.json";

type HistoryContent = Record<
  string,
  {
    frame: string;
    firstImage?: string;
    secondImage?: string;
    thirdImage?: string;
    fourthImage?: string;
  }
>;

const historyContent: HistoryContent = historyContentData;

export default function SightPage() {
  const path = usePathname().split("/");
  const sight = path[path.length - 1];
  const t = useTranslations(sight);
  const commonT = useTranslations("Common");

  const content =
    sight in historyContent
      ? historyContent[sight as keyof typeof historyContent]
      : null;

  if (!content) {
    return <div>{commonT("notFound")}</div>; // Сообщение об ошибке
  }

  return (
    <main style={{ padding: "60px 0px" }}>
      <div>
        <iframe
          className="location"
          src={`https://www.google.com/maps/embed?pb=${content.frame}`}
          loading="lazy"
        ></iframe>

        <div
          className="content"
          style={{
            fontSize: "20px",
            color: "#515151",
            marginBottom: "20px",
            marginTop: "50px",
            display: "flex",
          }}
        >
          <div className="textContent">
            <h1>{t("title")}</h1>
            <p>{t("paragraph#1")}</p>
            {content.firstImage && (
              <img className="article-images" src={content.firstImage} />
            )}
            <p>{t("paragraph#2")}</p>
            {content.secondImage && (
              <img className="article-images" src={content.secondImage} />
            )}
            <p>{t("paragraph#3")}</p>
            {content.thirdImage && (
              <img className="article-images" src={content.thirdImage} />
            )}
            <p>{t("paragraph#4")}</p>
            {content.fourthImage && (
              <img className="article-images" src={content.fourthImage} />
            )}
          </div>

          <div className="otherContent">
            <p className="title">{commonT("otherContentTitle")}</p>
            <div className="photo-item-container">
              {/* <RedirectBlock /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
