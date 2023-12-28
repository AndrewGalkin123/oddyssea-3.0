"use client";

import React from "react";
import Slider from "../../components/Slider/Slider";
import { HistoryContent } from "../../components/History/HistoryContent";

export default function Home() {
  return (
    <main>
      <Slider />
      <HistoryContent/>
    </main>
  );
}
