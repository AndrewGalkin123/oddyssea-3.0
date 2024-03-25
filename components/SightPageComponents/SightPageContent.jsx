"use client";
import { useTranslations } from "next-intl";
import historyContent from "../../public/content/historyContent.json";

const SightPageContent = ({ sight }) => {
  const t = useTranslations(sight);

  return (
    <div>
      <iframe
        className="location"
        src={`https://www.google.com/maps/embed?pb=${historyContent[sight].frame}`}
        loading="lazy"
      ></iframe>

      <div
        className="content"
        style={{
          maxWidth: "1300px",
          fontSize: "20px",
          color: "#515151",
          marginBottom: "20px",
          marginTop: "50px",
          display: "flex",
        }}
      >
        <div className="textContent">
          <br></br>
          <br></br>
          <h1>{t("title")}</h1>
          <br />
          <p>{t("paragraph#1")}</p>
          <br></br>
          <img
            className="article-images"
            src={historyContent[sight].firstImage}
          ></img>
          <br></br>

          <p>{t("paragraph#2")}</p>
          <p>{t("paragraph#3")}</p>
          <br />
          <img
            className="article-images"
            src={historyContent[sight].secondImage}
          ></img>
          <p>{t("paragraph#4")}</p>
          <p>{t("paragraph#5")}</p>
          <br />
          <img
            className="article-images"
            src={historyContent[sight].thirdImage}
          ></img>
          <p>{t("paragraph#6")}</p>
          <br></br>
          <img
            className="article-images"
            src={historyContent[sight].fourthImage}
          ></img>
          <p>{t("paragraph#7")}</p>
          
        </div>
       
        <div className="otherContent">
          <p></p>
          <div className="photo-item-container">{/* <RedirectBlock/> */}</div>
        </div>
      </div>
    </div>
  );
};

export { SightPageContent };
