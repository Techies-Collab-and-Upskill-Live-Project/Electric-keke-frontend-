import { EyeIcon } from "lucide-react";
import Btn from "../btn/Btn";

const MaskPassword = () => {
  const UnmaskPassword = (e) => {
    const inputAsSibling = e.currentTarget.previousElementSibling;
    const checkType = inputAsSibling.type;
    checkType === "password"
      ? (inputAsSibling.type = "text")
      : (inputAsSibling.type = "password");
  };

  return (
    <Btn
      styling="size-5 absolute top-1/2 right-5 -translate-y-1/2 bg-white p-0"
      icon={<EyeIcon color="black" />}
      onClick={UnmaskPassword}
    />
  );
};

export default MaskPassword;
