import { Upload } from "lucide-react";
import Btn from "@/components/btn/Btn";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";
import { useState } from "react";
import { useGlobalOnboardContext } from "@/features/onboarding/context/OnboardingContext";
import CustomModal from "@/components/CustomModal";

const UploadImageModal = ({ nextProcess }) => {
  const { isModalOpen, openModal, closeModal } = useGlobalOnboardContext();
  const { showAlert } = dispatchables();

  const handleUpload = ({}) => {
    const process = getItemFromLs("onboarding-process");

    if (process === 2) {
      showAlert("selfie");
    } else if (process === 3) {
      showAlert("front license");
    } else {
      showAlert("back license");
    }
    closeModal();
    nextProcess();
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
                <input type="file" className="size-full" accept=".jpg,.png" />

                <div className="upload__icon">
                  <Upload />
                </div>
              </div>

              <Btn
                text="Select files"
                styling="btn w-[79%] btn--outline text-sm md:text-base font-semibold"
              />
            </div>
          </div>
          
          <p className="upload__text">JPG, PNG file format accepted</p>
        </div>

        <Btn
          text="Upload"
          styling="btn btn--primary btn--lg mx-auto w-full max-w-[353px] mt-8"
          onClick={handleUpload}
        />
      </div>
    </CustomModal>
  );
};

export default UploadImageModal;
