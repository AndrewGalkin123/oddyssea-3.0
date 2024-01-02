"use client";

import React from "react";
import Slider from "../../components/Slider/Slider";
import { HistoryContent } from "../../components/HomePageComponents/History/HistoryContent";
import { CultureContent } from "../../components/HomePageComponents/Culture/CultureContent";
import { PhotoGallery } from "../../components/HomePageComponents/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <main>
      <Slider />
      <HistoryContent/>
      <CultureContent/>
      <PhotoGallery/>
    </main>
  );
}
