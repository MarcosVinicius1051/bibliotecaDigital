import cloudinary from "../config/cloudinary.js";

import { extractPublicId } from "cloudinary-build-url";


export default async function deleteCloudinaryImage(url) {
  const publicId = extractPublicId(url);

  await cloudinary.uploader
    .destroy(publicId)
    .then(() => {
      console.log("imagem cloudinary destruida");
    })
    .catch((err) => {
      console.log(
        "algo deu errado a tentar deletar a imagem do cloudinary: " + err
      );
    });
}
