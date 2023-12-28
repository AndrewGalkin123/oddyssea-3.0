import Link from "next/link";
import React from "react";
import { Navigation } from "./Navigation";
import "./Header.css";

const TheHeader: React.FC = () => {
  return (
      <header>
        <Link href="/">
          <img id="main-logo" src="/anchor.png" alt="Anchor"></img>
        </Link>
        <Navigation></Navigation>
      </header>

  );
};
export { TheHeader };
