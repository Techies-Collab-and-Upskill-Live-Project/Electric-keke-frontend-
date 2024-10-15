import CheckBox from "@/components/forms/CheckBox";
import { Link } from "react-router-dom";

const ForgetTab = ({ nextProcess }) => {
  return (
    <div className="forget-tab text-sm md:text-base laptop:text-eiteen">
      <CheckBox
        styling="flex gap-x-2 items-center"
        name="remember"
        label="Remember me"
      />

      <Link
        onClick={() => {
          nextProcess();
        }}
      >
        <p className="font-semibold text-basic ">Forgot Password?</p>
      </Link>
    </div>
  );
};

export default ForgetTab;
