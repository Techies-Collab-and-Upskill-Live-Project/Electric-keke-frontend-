import { useModal } from "@/hooks/useModal";
import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const { isModalOpen, openModal, closeModal, setIsModalOpen } = useModal();
  const [registeringAs, setRegisteringAs] = useState("User");
  const chooseRole = (role) => setRegisteringAs(role);

  return (
    <OnboardingContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setIsModalOpen,
        registeringAs,
        chooseRole,
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
