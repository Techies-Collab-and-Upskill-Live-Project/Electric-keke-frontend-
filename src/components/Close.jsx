import React from "react";
import Btn from "./btn/Btn";
import { XIcon } from "lucide-react";

const Close = ({ handleClose, size = "default", styling }) => {
  const btnSize = {
    sm: "",
    md: "",
    default: "size-8",
  };

  return (
    <Btn
      icon={<XIcon color="black" />}
      styling={`${btnSize[size]} ${styling} rounded-full bg-neutral-100 p-0`}
      onClick={handleClose}
    />
  );
};

export default Close;
