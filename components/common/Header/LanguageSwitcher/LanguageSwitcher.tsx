"use client";

import React, { useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("ru");
  let content = "";
  if (currentLanguage === "ru") {
    content = "UK";
  } else if (currentLanguage === "uk") {
    content = "EN";
  } else {
    content = "RU";
  }

  const handleTranslate = () => {
    switch (currentLanguage) {
      case "ru":
        window.location.href = "/uk";
        setCurrentLanguage("uk");
        break;
      case "uk":
        window.location.href = "/en";
        setCurrentLanguage("en");
        break;
      case "en":
        window.location.href = "/ru";
        setCurrentLanguage("ru");
        break;
      default:
        setCurrentLanguage("ru");
        break;
    }
  };

  return (
    <div>
      <button className="translator-button" onClick={handleTranslate}>
        {content}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

