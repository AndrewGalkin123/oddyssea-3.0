import { PhotoGalleryContent } from "../../../../components/PhotoGalleryPageComponents/PhotoGalleryContent/PhotoGalleryContent";

export default function PhotoGallery() {
  const images: Array<string> = ["/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/cultureComponent/dukeMonument.jpeg",];
  return (
    <main style={{ padding: "100px 0" }}>
      <PhotoGalleryContent arr={images} />
    </main>
  );
}
