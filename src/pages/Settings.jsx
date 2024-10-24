import GroupedModals from "@/components/GroupedModals";
import React, { useState } from "react";
import { Section } from "@/layouts";
import { useModal } from "@/hooks/useModal";
import SettingHeader from "@/features/profile/components/SettingHeader";
import SettingNav from "@/features/profile/components/SettingNav";

const Settings = () => {
  const [typeOfModal, setTypeOfModal] = useState("delete");
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <GroupedModals
        type={typeOfModal}
        openModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      <Section withDesktopHeader={false} mobileHeaderStyle="mobile-header">
        <div className="setting">
          <SettingHeader />
          <div className="setting-container">
            <SettingNav openModal={openModal} setTypeOfModal={setTypeOfModal} />

            <div className="safe">
              <img src="/safe.png" alt="safe" className="size-full" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Settings;
