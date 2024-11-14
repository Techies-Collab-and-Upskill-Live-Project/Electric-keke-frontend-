const RadioBox = ({
  label,
  labelStyle,
  name,
  styling,
  text,
  textStyle,
  value,
  handleChange,
  id
}) => {
  return (
    <div className={styling}>
      <input
        type="radio"
        name={name}
        className="align-baseline"
        // checked={value}
        onChange={handleChange}
        id={id}
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

export default RadioBox;
