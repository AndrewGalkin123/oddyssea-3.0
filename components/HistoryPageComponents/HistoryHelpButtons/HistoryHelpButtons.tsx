import React, { MutableRefObject } from 'react';

interface HistoryHelpButtonsProps{
  ref: MutableRefObject<null>;
}

const HistoryHelpButtons: React.FC<HistoryHelpButtonsProps> = ({ ref }) => {
  const handleScrollButtonClick = () => {

      ref.current.scrollIntoView({ behavior: "smooth" });
    
  };
  return (
    <div >
      <button className="scroll-button" onClick={handleScrollButtonClick}>Читать текст</button>
      <a href="/contacts">
        <button className="redirect-button">Share emotions</button>
      </a>
    </div>
  );
};

export { HistoryHelpButtons };
