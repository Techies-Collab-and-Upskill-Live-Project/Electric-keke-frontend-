import React, { useState } from "react";
import { Section } from "@/layouts";
import Edit from "../assets/svg/Edit";
import SettingIcon from "../assets/svg/SettingIcon";
import Spear from "../assets/svg/Spear";
import GroupedModals from "@/components/GroupedModals";
import Btn from "@/components/btn/Btn";
import Choose from "@/components/Choose";
import { useNavigate } from "react-router-dom";
import {
  MyProfile,
  ProfileManagementForm,
  ProfilePhoto,
  Tree,
} from "@/features/profile";
import { useModal } from "@/hooks/useModal";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import EditUserPhoto from "@/features/profile/components/EditUserPhoto";

const Profile = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [editProfile, setEditProfile] = useState(false);
  const { user } = useGlobalAuthContext();

  const navigate = useNavigate();

  const saveData = (data, callback) => {
    callback(data);
  };

  return (
    <>
        <GroupedModals
          type="edit-profile"
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />

      <Section darkLogo={true} mobileHeaderStyle="mobile-header">
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

            {!editProfile && (
              <Choose
                containerClass="flex-center gap-2"
                btnClass="bg-transparent size-5 p-0 md:size-10"
                icon1={<Edit />}
                icon2={<SettingIcon />}
                handleChoice1={() => setEditProfile(true)}
                handleChoice2={() => navigate("/settings")}
              />
            )}
          </div>

          <div className="relative">
            <ProfilePhoto
              styling="prof-photo flex-center"
              noImageContainerStyle="prof-photo flex-center bg-gradient-to-t from-peach to-basic-500"
              textStyle="text-5xl font-bold text-neutral"
              text={user && user?.fullname[0]}
            />

            {editProfile && <EditUserPhoto />}
          </div>

          {editProfile ? (
            <ProfileManagementForm
              cancelEdit={() => setEditProfile(false)}
              saveData={saveData}
              openModal={openModal}
              setEditProfile={setEditProfile}
            />
          ) : (
            <MyProfile user={user} />
          )}

          <Tree />
        </div>
      </Section>
    </>
  );
};

export default Profile;
