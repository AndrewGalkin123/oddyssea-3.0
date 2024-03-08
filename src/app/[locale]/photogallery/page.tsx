
import { PhotoGalleryContent } from "../../../../components/PhotoGalleryPageComponents/PhotoGalleryContent/PhotoGalleryContent";

const fs = require("fs");
const folderPath =
  "public/assets/photogalleryComponent";
const images: Array<string> = [];
fs.readdir(folderPath, (err: any, files: string[]) => {
  if (err) {
    console.error("Ошибка при чтении папки:", err);
    return;
  }

  // Проходимся по каждому файлу в папке
  files.forEach((file) => {
    // Проверяем, является ли файл изображением (можно добавить другие форматы по желанию)
    if (
      file.endsWith(".jpg") ||
      file.endsWith(".png") ||
      file.endsWith(".jpeg")
    ) {
      // Добавляем название файла в массив
      images.push("/assets/photogalleryComponent/" + file);
    }
  });

  // Выводим массив с названиями фотографий
  console.log(images);
});


export default function PhotoGallery() {


  return (
    <main style={{ padding: "100px 0" }}>
      <PhotoGalleryContent arr={images} />
    </main>
  );
}
