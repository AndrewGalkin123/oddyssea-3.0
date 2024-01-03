import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";

const TheHeader: React.FC = () => {
  return (
    <header>
      <img id="main-logo" src="/anchor.png" alt="Anchor"></img>
      <Navigation></Navigation>
    </header>
  );
};
export { TheHeader };
