import FormRow from "@/components/forms/FormRow";
import React from "react";

const ProfileFormRows = ({
  fullname,
  email,
  old_password,
  new_password,
  re_new_password,
  title,
  handleChange,
}) => {
  return (
    <div className="profile-opt-box">
      <FormRow
        type={title === "Personal Information" ? "text" : "password"}
        name={title === "Personal Information" ? "fullname" : "old_password"}
        placeholder={title === "Personal Information" ? "name" : "old password"}
        value={title === "Personal Information" ? fullname : old_password}
        inputclass="profile-modal-inputs"
        handleChange={handleChange}
      />

      <FormRow
        type={title === "Personal Information" ? "email" : "password"}
        name={title === "Personal Information" ? "email" : "new_password"}
        placeholder={
          title === "Personal Information" ? "Email" : "New password"
        }
        value={title === "Personal Information" ? email : new_password}
        inputclass="profile-modal-inputs"
        handleChange={handleChange}
      />

      {title === "Change Password" && (
        <FormRow
          type="password"
          name="re_new_password"
          placeholder="Confirm Password"
          inputclass="profile-modal-inputs"
          value={re_new_password}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default ProfileFormRows;
