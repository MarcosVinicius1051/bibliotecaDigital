import {v2 as cloudinary} from "cloudinary";
import "dotenv/config";

//Config

cloudinary.config({
    cloud_name: "biblioteca-livros",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})