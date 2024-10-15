const CheckBox = ({ label, labelStyle, name, styling, text, textStyle }) => {
  return (
    <div className={styling}>
      <input type="checkbox" name={name} className="align-baseline" />
      <div>
        <label htmlFor={name}>{label}</label>
        {text && <p className={textStyle}>{text}</p>}
      </div>
    </div>
  );
};

export default CheckBox;
