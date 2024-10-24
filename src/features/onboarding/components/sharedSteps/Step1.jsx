import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnboardFormRows from "../OnboardFormRows";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import { useSelector } from "react-redux";
import { addItemToLs } from "@/utils/ls";
import Btn from "@/components/btn/Btn";
import dispatchables from "@/utils/dispatchables";
import Google from "../../assets/svg/Google";
import SharedStep from "../../layouts/SharedStep";
import { onboarding_descs } from "../../constants";

const Step1 = ({ nextProcess, prevProcess }) => {
  const { showAlert } = dispatchables();
  const [standardPassword, setStandard] = useState(false);
  const { fullname, email, password, re_password } = useSelector(
    (state) => state.formData
  );

  const isDisabled = useAreInputsFilled(
    fullname && email && password && re_password
  );

  useEffect(() => {
    const password_regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{6,}$/;
    const isCorrect = password_regex.test(password);
    isCorrect ? setStandard(true) : setStandard(false);
  }, [password]);

  const handleSubmit = () => {
    if (!standardPassword) {
      showAlert("password does not meet requirement", "danger");
      return;
    }

    if (password !== re_password) {
      showAlert("passwords does not match", "danger");
      return;
    }
    nextProcess();
  };

  const goToLogin = () => addItemToLs("onboarding-process", 0);

  return (
    <SharedStep
      text={onboarding_descs.register}
      prevProcess={prevProcess}
      headTitle="Register Your Account"
    >
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-7">
          <OnboardFormRows
            type="register"
            standardPassword={standardPassword}
          />
        </div>

        <p className="switch-login my-[50px]">
          Already have an account?{" "}
          <Link
            to="/onboarding/login"
            onClick={goToLogin}
            className="text-basic font-inter"
          >
            Login!
          </Link>
        </p>

        <div className="w-full max-w-[343px] mx-auto">
          <Btn
            text="Continue"
            styling="btn btn--primary btn--lg w-full rounded-full font-medium"
            disabled={isDisabled}
            onClick={handleSubmit}
          />

          <div className="mt-5">
            <p className="font-bold text-center">or</p>
            <Btn
              text="Register with Google"
              styling="btn btn--lg w-full rounded-full bg-white shadow-md text-black font-bold gap-x-9"
              icon={<Google />}
            />
          </div>
        </div>
      </form>
    </SharedStep>
  );
};

export default Step1;
