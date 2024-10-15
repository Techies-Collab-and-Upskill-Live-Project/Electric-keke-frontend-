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
  iconPosition,
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

      <div className="relative">
        {icon && (
          <div className={`absolute top-1/2 -translate-y-1/2 ${iconPosition || 'left-3'}`}>{icon}</div>
        )}

        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          placeholder={placeholder}
          className={`${inputclass} ${icon && "pl-96"}`}
          required
        />

        {type === "password" && <MaskPassword />}
      </div>

      {type === "password" && showInputAlert && (
        <InputAlert
          condition={correct}
          okText="Password Okay"
          warningText="Six Characters, Should Contain 1 uppercase, 1 special character, 1 digit"
        />
      )}
    </div>
  );
};

export default FormRow;
