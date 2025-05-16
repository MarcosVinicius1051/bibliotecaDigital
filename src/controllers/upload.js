import cloudinary from "../config/cloudinary.js";

export default async function cloudinaryFun(input) {

  try {
    const results = await cloudinary.uploader.upload(input, {
      folder: "biblioteca-virtual",
      resource_type: "auto", // Detecta automaticamente o tipo de arquivo
    });

    const url = cloudinary.url(results, {
      transformation: [
        {
          quality: "auto",
          fetch_format: "auto",
        }
      ]
    });

    return results.url;
    
  } catch (error) {
    console.error("Erro no upload para Cloudinary:", error);
    throw error;
  }
}
