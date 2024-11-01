import { useSelector } from "react-redux";
import FormRow from "@/components/forms/FormRow";
import dispatchables from "@/utils/dispatchables";
import FormSelect from "@/components/forms/FormSelect";
import { states } from "@/constants";
import FormPhone from "@/features/onboarding/components/forms-inputs/FormPhone";
import { useState } from "react";

const OnboardFormRows = ({ type, standardPassword }) => {
  const { changeAuthFormData } = dispatchables();

  const {
    fullname,
    email,
    password,
    re_password,
    username,
    phone,
    state,
    address,
  } = useSelector((state) => state.formData);

  const [code, setCode] = useState("+234");

  const handleCodeSelect = (val) => {
    setCode(val);
  };

  const handleSelect = (value) => {
    const custom_event = { target: { name: "state", value } };
    changeAuthFormData(custom_event);
  };

  return (
    <>
      {type === "register" && (
        <>
          <FormRow
            type="text"
            label="Full Name"
            labelClass="onboarding-label"
            name="fullname"
            value={fullname}
            handleChange={changeAuthFormData}
            inputclass="onboarding-inputfield"
          />
          <FormRow
            type="email"
            label="Email"
            name="email"
            labelClass="onboarding-label"
            value={email}
            handleChange={changeAuthFormData}
            inputclass="onboarding-inputfield"
          />
        </>
      )}

      {(type === "login" || type === "forget") && (
        <FormRow
          label="Email or Phone No"
          labelClass="onboarding-label"
          name="username"
          value={username}
          handleChange={changeAuthFormData}
          inputclass="onboarding-inputfield"
        />
      )}

      {(type === "register" || type === "login" || type === "new") && (
        <>
          <FormRow
            type="password"
            label="Password"
            labelClass="onboarding-label"
            name="password"
            value={password}
            handleChange={changeAuthFormData}
            inputclass="onboarding-inputfield"
            showInputAlert={type === "register" && true}
            correct={standardPassword}
          />
        </>
      )}

      {(type === "register" || type === "new") && (
        <FormRow
          type="password"
          label="Confirm Password"
          labelClass="onboarding-label"
          name="re_password"
          value={re_password}
          handleChange={changeAuthFormData}
          inputclass="onboarding-inputfield"
        />
      )}

      {type === "complete" && (
        <>
          <FormPhone
            label="Phone number"
            labelClass="onboarding-label"
            name="phone"
            // styling="onboarding-inputfield"
            selectPlaceHolder={code}
            handleSelect={handleCodeSelect}
            code={code}
            handleChange={changeAuthFormData}
            inputclass="h-full w-[calc(100%-108px)] focus:border-none outline-none"
            value={phone}
            placeholder="phone"
          />

          <FormSelect
            label="State of residence"
            labelStyle="onboarding-label"
            name="state"
            itemsList={states}
            placeholder="Select State"
            handleSelect={handleSelect}
            selectStyle="onboarding-inputfield"
          />

          <FormRow
            label="Address"
            labelClass="onboarding-label"
            name="address"
            value={address}
            handleChange={changeAuthFormData}
            inputclass="onboarding-inputfield"
          />
        </>
      )}
    </>
  );
};

export default OnboardFormRows;
