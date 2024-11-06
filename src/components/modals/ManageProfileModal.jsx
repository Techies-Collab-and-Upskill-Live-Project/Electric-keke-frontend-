import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import RegularList from "../_design-patterns/RegularList";
import Btn from "../btn/Btn";
import dispatchables from "@/utils/dispatchables";
import { useAreInputsFilled } from "@/features/onboarding/hooks/useAreInputsFilled";
import { MANAGE_CONDITIONS } from "@/features/profile/utils/manage-conditions";
import ProfileFormRows from "@/features/profile/components/ProfileFormRows";
import { profile_management_titles } from "@/features/profile/constants";
import ProfileOption from "@/features/profile/components/ProfileOption";
import { ChangePassword } from "@/features/profile/services/change-password";
import { UpdateProfile } from "@/features/profile/services/update-profile";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const ManageProfileModal = () => {
  const [title, setTitle] = useState("Profile Management");
  const { showAlert } = dispatchables();
  const { resetUser, user } = useGlobalAuthContext();

  const [profileData, setProfileData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    old_password: "",
    new_password: "",
    re_new_password: "",
  });

  const handleProfileDataChange = (e) => {
    const { name: key, value } = e.target;
    setProfileData((prev) => ({ ...prev, [key]: value }));
  };

  const disabled = useAreInputsFilled(MANAGE_CONDITIONS(profileData)[title]);

  const updateProfile = () => {
    const { email, fullname } = profileData;
    UpdateProfile({ fullname, email }, showAlert, resetUser);
  };

  const changePassword = () => {
    const { old_password, new_password, re_new_password } = profileData;

    if (new_password !== re_new_password) {
      showAlert("confirm passwords", "info");
      return;
    }

    ChangePassword({ old_password, new_password, re_new_password }, showAlert);
  };

  return (
    <>
      <Heading
        className="text-center"
        title={title}
        tclass="font-bold text-2xl md:text-[2rem]"
        dclass="text-sm"
      />

      {title === "Profile Management" ? (
        <div className="profile-opt-box">
          <RegularList
            list={profile_management_titles}
            component={ProfileOption}
            handleClick={(title) => setTitle(title)}
            keyExtractor={profile_management_titles.map((item) => item.title)}
          />
        </div>
      ) : (
        <ProfileFormRows
          fullname={profileData.fullname}
          title={title}
          email={profileData.email}
          new_password={profileData?.new_password}
          old_password={profileData?.old_password}
          re_new_password={profileData?.re_new_password}
          handleChange={handleProfileDataChange}
        />
      )}

      {title === "Profile Management" ? (
        <div className="h-[88px] hidden md:block"></div>
      ) : (
        <div className="mt-4 md:mt-8">
          <Btn
            text="Confirm"
            styling="btn btn--hero btn--primary w-full max-w-[343px] mx-auto"
            onClick={() =>
              title === "Personal Information"
                ? updateProfile()
                : changePassword()
            }
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
};

export default ManageProfileModal;
