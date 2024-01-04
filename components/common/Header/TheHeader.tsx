import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

const TheHeader: React.FC = () => {
  return (
    <header>
      <img id="main-logo" src="/anchor.png" alt="Anchor"></img>
      <Navigation></Navigation>
      <BurgerMenu />
    </header>
  );
};
export { TheHeader };
