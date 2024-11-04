import React from "react";
import { icons } from "@/assets";
import { Overlay } from "@/components";

const EditUserPhoto = () => {
  return (
    <div className="!absolute !m-0 inset-0 top-0 left-0 overflow-hidden prof-photo">
      <input type="file" className="size-full" />
      <Overlay
        className="absolute inset-0 rounded-full pointer-events-none bg-gradient bg-gradient-to-bl from-peach/50 to-basic/60 flex-center backdrop-blur-md"
        logo={false}
      >
        <icons.EditGallery />
      </Overlay>
    </div>
  );
};

export default EditUserPhoto;
