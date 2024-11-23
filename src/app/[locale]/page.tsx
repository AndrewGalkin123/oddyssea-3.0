"use client";

import React, { useState } from "react";

import { HistoryContent } from "../../../components/HomePageComponents/History/HistoryContent";
import { CultureContent } from "../../../components/HomePageComponents/Culture/CultureContent";
import { PhotoGallery } from "../../../components/HomePageComponents/PhotoGallery/PhotoGallery";
import OdessaMap from "../../../components/HomePageComponents/OdessaMap/OdessaMap";

export default function Home() {
  return (
    <main>
      <HistoryContent />
      <CultureContent />
      <OdessaMap />
      <PhotoGallery />
    </main>
  );
}
