import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "carlos-diaz",
  api_key: "579265359333813",
  api_secret: "xAOrEOCooD8w9-lSSf6XL2toibU",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
