import { PhotoGalleryContent } from "../../../../components/PhotoGalleryPageComponents/PhotoGalleryContent/PhotoGalleryContent";

export default function PhotoGallery() {
  const images: Array<string> = ["/assets/cultureComponent/dukeMonument.jpeg",
  "/assets/photoGalleryComponent/lighthouse.jpeg",
  "/assets/photoGalleryComponent/PushkinMonument.jpeg",
  "/assets/photoGalleryComponent/seaViewWithDuke.jpeg",
  "/assets/photoGalleryComponent/spasoPreobrazhensky.jpeg",
  "/assets/photoGalleryComponent/2fee960a-7c9c-4b00-a9a8-9d35325e80f2.jpeg",
  "/assets/photoGalleryComponent/46d60401-36fe-49e1-bc26-053456a27237.jpeg",
  "/assets/photoGalleryComponent/a173df52-1d1c-4145-84ec-c2594cd5e531.jpeg",
  "/assets/photoGalleryComponent/church.jpg",
  "/assets/photoGalleryComponent/greenHotel.jpg",
  "/assets/photoGalleryComponent/dumskaSquare.jpg",
  "/assets/photoGalleryComponent/dumskaSquareillustration.jpg",
  "/assets/photoGalleryComponent/opera1.jpg",
  "/assets/photoGalleryComponent/odessaStreet4.jpg",
  "/assets/photoGalleryComponent/f6f304c1-bfcd-4bcb-a61a-6bc6cd01b230.jpeg",
  "/assets/photoGalleryComponent/dukeMonument.jpg",
  "/assets/photoGalleryComponent/opera2.jpg",
  "/assets/photoGalleryComponent/shahskyPalace.jpg",
  "/assets/photoGalleryComponent/victoryPark.jpg",
  "/assets/photoGalleryComponent/PaulChurchOldPhoto.jpg",
  "/assets/photoGalleryComponent/passageRoof.jpg",
  "/assets/photoGalleryComponent/odessaHouse1.jpg",
  "/assets/photoGalleryComponent/opera3.jpg",
  "/assets/photoGalleryComponent/shahskyPalace1.jpg",
  "/assets/photoGalleryComponent/odessaStreet1.jpg",
  "/assets/photoGalleryComponent/odessaHouse2.jpg",
  "/assets/photoGalleryComponent/seasideBoulevard.jpg",
  "/assets/photoGalleryComponent/marineStationOldPhoto.jpg",
  "/assets/photoGalleryComponent/odessaYard.jpg",
  "/assets/photoGalleryComponent/odessaYard1.jpg",
  "/assets/photoGalleryComponent/odessaHouse.jpg",
  "/assets/photoGalleryComponent/odessaStreet3.jpg",
  "/assets/photoGalleryComponent/church1.jpg",
  "/assets/photoGalleryComponent/odessaHouse3.jpg",
  "/assets/photoGalleryComponent/odessaSculpture.jpg",
  "/assets/photoGalleryComponent/odessaStreet2.jpg",
];
  return (
    <main style={{ padding: "100px 0" }}>
      <PhotoGalleryContent arr={images} />
    </main>
  );
}
