import Link from "next/link";
import React from "react";
import { Navigation } from "./Navigation";
import './Header.css'

const TheHeader: React.FC = () => {
  return (
    <header>
      <Link href="/"><img src="./anchor.svg"></img></Link>
      <Navigation></Navigation>
    </header>
  );
};
export { TheHeader };
