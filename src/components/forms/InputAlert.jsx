const InputAlert = ({ condition, okText, warningText }) => {
  return (
    <p
      className={`text-[0.55rem] ${
        condition ? "text-basic" : "text-error-100"
      }`}
    >
      {condition ? okText : warningText}
    </p>
  );
};

export default InputAlert;
