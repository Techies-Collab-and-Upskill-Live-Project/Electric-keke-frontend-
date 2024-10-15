import React from "react";
import FormWithFlag from "./FormWithFlag";

const FormPhone = ({
  styling,
  label,
  labelClass,
  name,
  handleChange,
  placeholder,
  selectPlaceHolder,
  inputclass,
  handleSelect,
  code,
  value,
}) => {
  return (
    <div className={styling}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}

      <div className="onboarding-inputfield onboarding-inputfield--phone">
        <FormWithFlag
          placeholder={selectPlaceHolder}
          handleSelect={handleSelect}
          code={code}
        />

        <input
          type="text"
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          className={inputclass}
          required
        />
      </div>
    </div>
  );
};

export default FormPhone;
