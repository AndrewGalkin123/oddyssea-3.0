import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher"

const TheHeader: React.FC = () => {

  return (
    <header>
      <a href="/">
        <img id="main-logo" src="/anchor.png" alt="Anchor"></img>
      </a>
      <Navigation></Navigation>
      <LanguageSwitcher/>
      <BurgerMenu />
    </header>
  );
};
export { TheHeader };
