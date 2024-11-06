import axios from "axios";

const UPLOAD_PRESET = import.meta.env.VITE_CLD_UPLOAD_PRESET;
const CLD_NAME = import.meta.env.VITE_CLD_NAME;

export const UploadImage = async (loading, unloading, imageFile, showAlert) => {
  loading();

  if (!imageFile) return showAlert("add your file first", "info");

  const imageData = new FormData();
  imageData.append("file", imageFile);
  imageData.append("upload_preset", UPLOAD_PRESET);
  imageData.append("cloud_name", CLD_NAME);

  try {
    const {
      data: { url },
    } = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLD_NAME}/image/upload`,
      imageData
    );
    unloading();
    showAlert("uploaded image", "info");
    return url;
  } catch (error) {
    unloading();
    showAlert("error uploading image", "danger");
  }
};
