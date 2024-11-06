import { Btn } from "@/components";
import { ArrowBigRight } from "lucide-react";

const ProfileOption = ({ title, handleClick }) => {
  return (
    <Btn
      text={title}
      icon={<ArrowBigRight color="black" />}
      position="right"
      styling="profile-options bg-transparent text-black"
      onClick={() => handleClick(title)}
    />
  );
};

export default ProfileOption