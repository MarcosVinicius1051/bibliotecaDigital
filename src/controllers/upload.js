import cloudinary from "../config/cloudinary";

(async function () {
  const results = await cloudinary.uploader.upload("./image/chamado de chutulu.png"); //aqui vai estar o sistema o qual ira enviar a imagem para o banco de dados 
  console.log(results);
  const url = cloudinary.url(results.public_id, {
    transformation: [
      {
        quality: "auto",
        fetch_format: "auto",
      },
    ],
  });
});

/* ATENÇÃO */

/* Vai ser necessario puxar do json criado no console.log(results) o link da imagem,
 e colocar ela no mongodb */
