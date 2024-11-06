import { useModal } from "@/hooks/useModal";
import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const { isModalOpen, openModal, closeModal, setIsModalOpen } = useModal();
  const [driverImages, setDriverImages] = useState(
    getItemFromLs("driver-images") || []
  );

  const addDriverImage = (imageUrl) => setDriverImages(prev => [...prev, imageUrl])

  return (
    <OnboardingContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setIsModalOpen,
        driverImages,
        addDriverImage,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useGlobalOnboardContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("no onboarding context");
  }
  return context;
};
