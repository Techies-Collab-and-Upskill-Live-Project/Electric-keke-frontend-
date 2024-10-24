import { addItemToLs } from "@/utils/ls";
import { Link } from "react-router-dom";

const RegisterAsLink = ({
  title,
  icon,
  role,
  href,
  registeringAs,
  setRegisteringAs,
}) => {
  return (
    <Link to={`/onboarding/${href}`}>
      <div
        className={`register__options ${
          role === registeringAs && "chosen-option"
        }`}
        onMouseOver={() => {
          setRegisteringAs(role);
          addItemToLs("onboarding-process", 0);
        }}
      >
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden size-12 bg-basic/40">
            <img src={icon} alt={title} className="image" />
          </div>

          <p>{title}</p>
        </div>

        <div>
          <img src="/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </Link>
  );
};

export default RegisterAsLink;
