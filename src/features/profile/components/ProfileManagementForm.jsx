import React, { useState } from "react";
import FormRow from "../../../components/forms/FormRow";
import { states } from "../../../constants";
import Choose from "../../../components/Choose";
import FormSelect from "@/components/forms/FormSelect";
import FormDate from "@/components/forms/FormDate";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ProfileManagementForm = ({ cancelEdit, saveData }) => {
  const user = useCurrentUser();

  const [profileFormData, setProfileFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: user?.email,
    phone: user?.phone_number,
    DOB: "",
    lga: "",
    address: user?.address,
    password: "",
  });

  return (
    <form className="mt-14" onSubmit={(e) => e.preventDefault()}>
      <div className="prof-form-body">
        <FormRow
          name="firstname"
          label="First Name"
          value={profileFormData.firstname}
          styling="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="middlename"
          label="Middle Name"
          value={profileFormData.middlename}
          styling="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="lastname"
          label="Last Name"
          value={profileFormData.lastname}
          styling="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="email"
          label="Email Address"
          type="email"
          value={profileFormData.email}
          styling="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="phone"
          label="Phone Number"
          value={profileFormData.phone}
          styling="font-inter"
          inputclass="profile-management-input"
        />

        <FormDate
          styling="font-inter"
          name="DOB"
          label="Date of Birth"
          dateStyle="profile-management-input"
        />

        <FormSelect
          itemsList={states}
          label="State"
          styling="font-inter"
          selectStyle="profile-management-input"
          handleSelect={(value) => console.log(value)}
        />

        <FormRow
          name="lga"
          label="L.G.A"
          styling="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="address"
          label="Address"
          value={profileFormData.address}
          styling="font-inter"
          inputclass="profile-management-input"
        />

        <Choose
          containerClass="flex items-end gap-4 mt-[51px]"
          choice1txt="Save"
          choice2txt="Cancel"
          btnClass="btn btn--lg w-1/2 max-w-[181px]"
          addedClass1="btn--primary"
          addedClass2="btn--secondary"
          handleChoice1={saveData}
          handleChoice2={cancelEdit}
        />
      </div>
    </form>
  );
};

export default ProfileManagementForm;
