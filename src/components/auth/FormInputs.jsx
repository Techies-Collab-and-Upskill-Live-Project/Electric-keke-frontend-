import React from "react";
import FormRow from "../shared/FormRow";
import { otp_choice } from "../../constants";
import { useNavigate } from "react-router-dom";
import dispatchables from "../../utils/dispatchables";

const FormInputs = ({ type, formData }) => {
  const { chooseOtpMethod, showAlert, changeAuthFormData } = dispatchables();

  const navigate = useNavigate();

  return (
    <div className="r-form-body">
      {type === "otpMethod" && (
        <div className="r-form-body">
          <p>Where should we send your OTP?</p>
          {otp_choice.map((item) => {
            return (
              <div
                key={item.title}
                className="px-4 py-2 flex items-center border-2"
                onMouseOver={() => {
                  console.log(item.title);
                  chooseOtpMethod(item.title.toLowerCase());
                }}
                onClick={async () => {
                  // console.log(formData);
                  try {
                    await registerUser(formData);
                    showAlert("Otp Sent for verification");
                    navigate("/authentication/verification");
                  } catch (error) {
                    showAlert(error.message);
                    // showAlert("Something dae wrong")
                    // this is here for development purpos
                    // navigate("/authentication/verification");
                  }
                }}
              >
                <div>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className="ml-3">{item.title}</p>
              </div>
            );
          })}
        </div>
      )}

      {type === "register" && (
        <FormRow
          type="text"
          label="Full Name"
          name="fullname"
          value={formData.fullname}
          handleChange={changeAuthFormData}
          auth
        />
      )}
      {type === "register" && (
        <FormRow
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          handleChange={changeAuthFormData}
          auth
        />
      )}
      {type === "complete" && (
        <>
          <FormRow
            type="text"
            label="Phone"
            name="phone"
            value={formData.phone}
            handleChange={changeAuthFormData}
            auth
          />
          <FormRow
            type="text"
            label="State"
            name="state"
            value={formData.state}
            handleChange={changeAuthFormData}
            auth
          />
          <FormRow
            type="text"
            label="Address"
            name="address"
            value={formData.address}
            handleChange={changeAuthFormData}
            auth
          />
        </>
      )}
      {type === "login" && (
        <FormRow
          key={type}
          label="Email or Phone No"
          name="username"
          value={formData.username}
          handleChange={changeAuthFormData}
          auth
        />
      )}
      {type === "forget" && (
        <FormRow
          key={type}
          label="Email or Phone No"
          name="username"
          value={formData.username}
          handleChange={changeAuthFormData}
          auth
        />
      )}

      {(type === "register" || type === "login" || type === "new") && (
        <>
          <FormRow
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            handleChange={changeAuthFormData}
            auth
          />
          <FormRow
            type="password"
            label="Confirm Password"
            name="checkPass"
            value={formData.checkPass}
            handleChange={changeAuthFormData}
            auth
          />
        </>
      )}
    </div>
  );
};

export default FormInputs;