import React, { forwardRef } from 'react';

interface HistoryHelpButtonsProps {
  onClick: () => void;
}

const HistoryHelpButtons: React.FC<HistoryHelpButtonsProps> = ({ onClick }) => {
  return (
    <div>
      <button className="scroll-button" onClick={onClick}>
        Читать текст
      </button>
      <a href="/contacts">
        <button className="redirect-button">Share emotions</button>
      </a>
    </div>
  );
};

export  {HistoryHelpButtons};
