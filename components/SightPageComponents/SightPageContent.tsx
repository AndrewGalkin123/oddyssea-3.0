"use client";
import { MutableRefObject, useRef } from "react";
import { SightHelpButtons } from "./SightHelpButtons";
import { RedirectBlock } from "../common/MainRedirectBlock/RedirectBlock";

const SightPageContent: React.FC = () => {
  const textContentRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleScrollButtonClick = (): void => {
    if (textContentRef.current) {
      textContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <iframe
        className="location"
        src="https://www.google.com/maps/embed?pb=!4v1690799078512!6m8!1m7!1sCAoSLEFGMVFpcE1oUmJ6WHRHdUJUSVVMZU5rbklZZUh5YzVkMDNCZUVyT29hSk9u!2m2!1d46.485071!2d30.7439437!3f4.180024503728842!4f2.3371492776826983!5f0.7820865974627469"
        loading="lazy"
      ></iframe>
      <SightHelpButtons onClick={handleScrollButtonClick} />
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
        <div className="textContent" ref={textContentRef}>
          <br></br>
          <br></br>
          <h1></h1>
          <p>Lore</p>
          <br />
          <img></img>
          <p>Lore</p>
          <br />
          <img></img>
          <p>Lore</p>
          <p>Lore</p>
          <br />
          <img></img>
          <p>Lore</p>
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
