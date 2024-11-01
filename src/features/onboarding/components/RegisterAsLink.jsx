import { addItemToLs } from "@/utils/ls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconWrapper from "@/components/IconWrapper";
import Spear from "@/assets/svg/Spear";
import dispatchables from "@/utils/dispatchables";

const RegisterAsLink = ({ title, icon, role, href }) => {
  const { role: user_role } = useSelector((state) => state.formData);
  const { changeAuthFormData } = dispatchables();

  return (
    <Link to={`/onboarding/${href}`}>
      <div
        className={`register__options ${role === user_role && "chosen-option"}`}
        onMouseOver={() => {
          changeAuthFormData({ target: { name: "role", value: role } });
          addItemToLs("onboarding-process", 0);
        }}
      >
        <div className="flex items-center gap-5">
          <IconWrapper
            imageUrl={icon}
            containerStyle="overflow-hiddend rounded-full size-12 bg-basic/40 p-1"
          />

          <p>{title}</p>
        </div>

        <IconWrapper iconElement={Spear} containerStyle="rotate-180" />
      </div>
    </Link>
  );
};

export default RegisterAsLink;
