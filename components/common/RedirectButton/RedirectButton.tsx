
import React from "react";
import "./RedirectButton.css";

interface RedirectButtonProps {
  children: string;
  to: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ children, to }) => {
  return (
    <a className="redirect-button" href={to}>
      {children}
    </a>
  );
};

export default RedirectButton;
