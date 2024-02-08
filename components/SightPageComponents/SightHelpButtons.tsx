import React, { forwardRef } from 'react';
import { useTranslations } from "next-intl";

interface SightHelpButtonsProps {
  onClick: () => void;
}

const SightHelpButtons: React.FC<SightHelpButtonsProps> = ({ onClick }) => {
  const t = useTranslations("Common");
  return (
    <div>
      <button className="scroll-button" onClick={onClick}>
        {t("readTextButton")}
      </button>
      <a href="/contacts">
        <button className="redirect-button">{t("shareEmotionsButton")}</button>
      </a>
    </div>
  );
};

export  {SightHelpButtons};
