import CustomSelectItem from "../CustomSelectItem";
import SelectInput from "../SelectInput";

const FormSelect = ({
  styling,
  label,
  name,
  itemsList,
  labelStyle,
  placeholder,
  handleSelect,
  selectStyle,
}) => {
  return (
    <div className={styling}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}

      <SelectInput
        placeholder={placeholder}
        children={<CustomSelectItem items={itemsList} />}
        handleFunc={(value) => handleSelect(value)}
        className={selectStyle}
      />
    </div>
  );
};

export default FormSelect;
