"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const LanguageSwitcher: React.FC = () => {
  const languages = ["uk", "en", "ru"];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);

  const getNextLanguageIndex = () => {
    let newIndex = currentLanguageIndex + 1;

    // Handle the case where newIndex goes beyond the length of languages array
    if (newIndex >= languages.length) {
      newIndex = 0;
    }

    return newIndex;
  };

  const handleTranslate = () => {
    const newIndex = getNextLanguageIndex();
    setCurrentLanguageIndex(newIndex);
  };

  return (
    <div>
      <button className="translator-button" onClick={handleTranslate}>
        <Link href={`/${languages[currentLanguageIndex]}`}>
          {languages[currentLanguageIndex].toUpperCase()}
        </Link>
      </button>
    </div>
  );
};

export default LanguageSwitcher;




