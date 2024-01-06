'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button className="translator-button" onClick={changeLanguage}>
     
    </button>
  );
};

export default LanguageSwitcher ;
