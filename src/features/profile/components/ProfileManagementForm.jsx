import React, { useState } from "react";
import FormRow from "../../../components/forms/FormRow";
import { states } from "../../../constants";
import Choose from "../../../components/Choose";
import FormSelect from "@/components/forms/FormSelect";
import FormDate from "@/components/forms/FormDate";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import { UpdateProfile } from "../services/update-profile";
import dispatchables from "@/utils/dispatchables";

const ProfileManagementForm = ({ cancelEdit, saveData, openModal,setEditProfile }) => {
  const { user, resetUser } = useGlobalAuthContext();
  const { showAlert } = dispatchables();

  const [profileFormData, setProfileFormData] = useState({
    fullname: user?.fullname,
    // middlename: "",
    // lastname: "",
    email: user?.email,
    phone: user?.phone_number,
    DOB: "",
    lga: "",
    address: user?.address,
    state: user?.state_of_residence,
  });

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    setProfileFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveData = () => {
    saveData(profileFormData, async (data) => {
      try {
        await UpdateProfile(data, showAlert, resetUser);
        openModal();
        setEditProfile(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <form className="mt-14" onSubmit={(e) => e.preventDefault()}>
      <div className="prof-form-body">
        <FormRow
          name="fullname"
          label="Full Name"
          value={profileFormData.fullname}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        />
        {/* <FormRow
          name="middlename"
          label="Middle Name"
          value={profileFormData.middlename}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        />
        <FormRow
          name="lastname"
          label="Last Name"
          value={profileFormData.lastname}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        /> */}

        <FormRow
          name="email"
          label="Email Address"
          type="email"
          value={profileFormData.email}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        />

        <FormRow
          name="phone"
          label="Phone Number"
          value={profileFormData.phone}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        />

        {/* <FormDate
          styling="font-inter"
          name="DOB"
          label="Date of Birth"
          dateStyle="profile-management-input"
        /> */}

        <FormRow
          name="address"
          label="Address"
          value={profileFormData.address}
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        />

        {/* <FormRow
          name="lga"
          label="L.G.A"
          styling="font-inter"
          handleChange={handleChange}
          inputclass="profile-management-input"
        /> */}

        <FormSelect
          itemsList={states}
          label="State"
          styling="font-inter"
          selectStyle="profile-management-input"
          placeholder={profileFormData.state}
          handleSelect={(value) =>
            setProfileFormData((prev) => ({ ...prev, state: value }))
          }
        />
      </div>

      <div className="prof-form-body">
        <Choose
          containerClass="flex items-end gap-4 mt-[51px]"
          choice1txt="Save"
          choice2txt="Cancel"
          btnClass="btn btn--lg w-1/2"
          addedClass1="btn--primary"
          addedClass2="btn--secondary"
          handleChoice1={handleSaveData}
          handleChoice2={cancelEdit}
        />
      </div>
    </form>
  );
};

export default ProfileManagementForm;
