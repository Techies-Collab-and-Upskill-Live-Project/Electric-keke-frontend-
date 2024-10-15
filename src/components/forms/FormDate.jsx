import DatePicker from "../DatePicker";

const FormDate = ({
  label,
  labelStyle,
  styling,
  name,
  handleDate,
  dateStyle,
}) => {
  return (
    <div className={styling}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}

      <DatePicker handleDate={handleDate} styling={dateStyle} />
    </div>
  );
};

export default FormDate;
