import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import translations from "../../../src/translations.json";

const TheHeader: React.FC = () => {

  return (
    <header>
      <a href="/">
        <img id="main-logo" src="/anchor.png" alt="Anchor"></img>
      </a>
      <Navigation></Navigation>
      <BurgerMenu />
    </header>
  );
};
export { TheHeader };
