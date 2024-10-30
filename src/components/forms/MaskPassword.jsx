import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import Btn from "../btn/Btn";

const MaskPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    const inputAsSibling = e.currentTarget.previousElementSibling;
    const newType = inputAsSibling.type === "password" ? "text" : "password";
    inputAsSibling.type = newType;
    setIsPasswordVisible(newType === "text");
  };

  return (
    <Btn
      styling="size-5 absolute top-1/2 right-5 -translate-y-1/2 bg-white p-0"
      icon={isPasswordVisible ? <EyeOffIcon color="black" /> : <EyeIcon color="black" />}
      onClick={togglePasswordVisibility}
    />
  );
};

export default MaskPassword;
