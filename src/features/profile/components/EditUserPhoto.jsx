import React, { memo } from "react";
import { icons } from "@/assets";
import { Overlay } from "@/components";
import { UploadImage } from "@/utils/image-upload";
import dispatchables from "@/utils/dispatchables";

const EditUserPhoto = ({ handleChange }) => {
  const { showAlert, loading, unloading } = dispatchables();

  const checkImage = async (e) => {
    console.log("let check");
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    try {
      const imageUrl = await UploadImage(
        loading,
        unloading,
        imageFile,
        showAlert
      );

      handleChange({ target: { name: "avatar_url", value: imageUrl } });
    } catch (error) {
      showAlert("error uploading image", "danger");
    }
  };

  return (
    <div className="!absolute !m-0 inset-0 top-0 left-0 overflow-hidden prof-photo">
      <input type="file" className="size-full" onChange={checkImage} />

      <Overlay
        className="absolute inset-0 rounded-full pointer-events-none bg-gradient bg-gradient-to-bl from-peach/50 to-basic/60 flex-center backdrop-blur-md"
        logo={false}
      >
        <icons.EditGallery />
      </Overlay>
    </div>
  );
};

export default memo(EditUserPhoto);
