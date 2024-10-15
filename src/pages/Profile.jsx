import React, { useState } from "react";
import Section from "../layouts/Section";
import Edit from "../assets/svg/Edit";
import SettingIcon from "../assets/svg/SettingIcon";
import Spear from "../assets/svg/Spear";
import GroupedModals from "@/components/GroupedModals";
import Btn from "@/components/btn/Btn";
import Choose from "@/components/Choose";
import { useNavigate } from "react-router-dom";
import { MyProfile, ProfileManagementForm, Tree } from "@/features/profile";
import { useModal } from "@/hooks/useModal";

const Profile = () => {
  const { isModalOpen, openModal, closeModal, setIsModalOpen } = useModal();
  const [editProfile, setEditProfile] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const saveData = () => {
    setSuccess(true);
    openModal();
  };

  return (
    <>
      {success && (
        <GroupedModals
          type="edit-profile"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}

      <Section darkLogo={true}>
        <div className="profile-section">
          <div className="profile-glow" />

          <div className="profile-sub-header">
            <div className="flex items-center gap-x-2">
              {editProfile && (
                <Btn
                  icon={<Spear color="black" />}
                  styling="bg-transparent"
                  onClick={() => setEditProfile(false)}
                />
              )}

              <h2 className="font-bold font-josefin text-xl md:text-[2rem]">
                Personal Information
              </h2>
            </div>

            <Choose
              containerClass="flex-center gap-2"
              btnClass="bg-transparent size-5 p-0 md:size-10"
              icon1={<Edit />}
              icon2={<SettingIcon />}
              handleChoice1={() => setEditProfile(true)}
              handleChoice2={() => navigate("/settings")}
            />
          </div>

          <div className="prof-photo">
            <img
              src="/persons/profile.jpeg"
              alt="profile"
              className="prof-photo-main"
            />
          </div>

          {editProfile ? (
            <ProfileManagementForm
              cancelEdit={() => setEditProfile(false)}
              saveData={saveData}
            />
          ) : (
            <MyProfile />
          )}

          <Tree />
        </div>
      </Section>
    </>
  );
};

export default Profile;
