import IconWrapper from "../IconWrapper";
import InputAlert from "./InputAlert";
import MaskPassword from "./MaskPassword";

const FormRow = ({
  name,
  label,
  labelClass,
  type = "text",
  value,
  handleChange,
  styling,
  icon,
  iconPosition = "left-3",
  inputclass,
  placeholder,
  showInputAlert,
  correct,
}) => {
  return (
    <div className={styling}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}

      <div className="relative w-full">
        {icon && (
          <IconWrapper
            iconElement={icon}
            containerStyle={`absolute top-1/2 -translate-y-1/2 ${iconPosition}`}
          />
        )}

        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          className={`${inputclass} ${icon && "pl-10"}`}
          required
        />

        {type === "password" && <MaskPassword />}
      </div>

      {type === "password" && showInputAlert && (
        <InputAlert
          condition={correct}
          okText="Password meets all requirements."
          warningText="Password: 6+ chars, 1 uppercase, 1 special character, 1 digit"
        />
      )}
    </div>
  );
};

export default FormRow;
