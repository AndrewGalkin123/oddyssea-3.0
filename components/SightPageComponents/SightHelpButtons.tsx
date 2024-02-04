import React, { forwardRef } from 'react';

interface SightHelpButtonsProps {
  onClick: () => void;
}

const SightHelpButtons: React.FC<SightHelpButtonsProps> = ({ onClick }) => {
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

export  {SightHelpButtons};
