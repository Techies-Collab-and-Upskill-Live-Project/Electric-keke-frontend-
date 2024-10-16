const CheckBox = ({
  label,
  labelStyle,
  name,
  styling,
  text,
  textStyle,
  value,
  handleChange
}) => {
  return (
    <div className={styling}>
      <input
        type="checkbox"
        name={name}
        className="align-baseline"
        checked={value}
        onChange={handleChange}
      />
      <div>
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
        {text && <p className={textStyle}>{text}</p>}
      </div>
    </div>
  );
};

export default CheckBox;
