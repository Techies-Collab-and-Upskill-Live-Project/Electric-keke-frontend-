import { Upload } from "lucide-react";
import Btn from "@/components/btn/Btn";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";
import { useRef, useState } from "react";
import { useGlobalOnboardContext } from "@/features/onboarding/context/OnboardingContext";
import CustomModal from "@/components/CustomModal";
import IconWrapper from "@/components/IconWrapper";
import axios from "axios";

const CLD_NAME = import.meta.env.VITE_CLD_NAME;

const UploadImageModal = ({ nextProcess }) => {
  const { isModalOpen, openModal, closeModal, addDriverImage } =
    useGlobalOnboardContext();
  const [imageFile, setImageFile] = useState(null);
  const { showAlert, loading, unloading } = dispatchables();
  const fileInputRef = useRef();

  const checkFile = (e) => {
    const file = e.target.files[0];
    if (!file) return showAlert("no file added", "info");
    setImageFile(file);
  };

  const handleUpload = async () => {
    loading();
    if (!imageFile) return showAlert("add your file first", "info");

    const imageData = new FormData();
    imageData.append("file", imageFile);
    imageData.append("upload_preset", import.meta.env.VITE_CLD_UPLOAD_PRESET);
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
      addDriverImage(url);
      closeModal();
      nextProcess();
    } catch (error) {
      unloading();
      showAlert("error uploading image", "danger");
    }
  };

  return (
    <CustomModal
      modalStyling="modal__upload"
      modalContainerStyling="flex-center"
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      showCloseBtn={false}
    >
      <div className="modal__upload-container">
        <div>
          <div className="modal__upload-dropzone">
            <div className="modal__upload-dropmain">
              <h3 className="modal__upload__title">
                Drag and drop Images to upload
              </h3>

              <div className="upload__input">
                <input
                  type="file"
                  className="size-full"
                  accept=".jpg,.png"
                  onChange={checkFile}
                  ref={fileInputRef}
                />

                <IconWrapper
                  iconElement={Upload}
                  containerStyle="upload__icon"
                />
              </div>

              <Btn
                text="Select files"
                styling="btn w-[79%] btn--outline text-sm md:text-base font-semibold"
                onClick={() => fileInputRef.current.click()}
              />
            </div>
          </div>

          <p className="upload__text">JPG, PNG file format accepted</p>
        </div>

        <Btn
          text="Upload"
          styling="upload__btn"
          onClick={handleUpload}
          disabled={!imageFile}
        />
      </div>
    </CustomModal>
  );
};

export default UploadImageModal;
