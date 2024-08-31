import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormRow from "./FormRow";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { otp_choice } from "../constants";
import { useGlobalContext } from "../context";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { cn } from "../lib/utils";

const ReusableForm = ({ type = "register" }) => {
  const { dispatch } = useGlobalContext();
  const switchOnboardingType = (switchType) => {
    dispatch({ type: "changeBg", payload: { onboardingType: switchType } });
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkPass: "",
    phone: "",
    state: "",
    address: "",
    otp: "phone",
    otpValue: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formTitle = {
    register: "Register Your Account!",
    complete: "Complete Your Profile!",
    otp: "OTP!",
    otp2: "Complete Your Profile!",
    congrats: "Continue to Log in",
    login: "Log in to your Account",
    forget: "Forgot Password",
    new: "Enter New Password",
    passUpdate: "Enter Code",
  };

  return (
    <>
      {type === "congrats" ? (
        <div className="mt-32">
          <Logo
            logoClassName="size-16"
            titleClassName="text-pgreen text-[1.5rem]"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-10"
            description={
              type === "otp2" && "please enter the one time password sent (OTP)"
            }
          />

          <div className="w-[25.5rem] h-[16rem] border shadow-md rounded-md mx-auto mt-24 flex-center">
            <div className="rounded-full bg-pgreen3 size-20 flex-center">
              <img src="/tick.svg" alt="tick" />
            </div>
          </div>

          <div className="mt-14 max-w-[343px] mx-auto">
            <Button className="bg-pgreen mb-5 rounded-full w-full">
              Proceed
            </Button>
            <div className="text-sm flex-center gap-1">
              <img src="/small-lock.svg" alt="lock" />
              Your info is safely secure
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={cn({
            "mt-20": type === "otp",
            "mt-24": type === "complete",
            "mt-32":
              type === "otp2" ||
              type === "forget" ||
              type === "new" ||
              type === "passUpdate",
          })}
        >
          <Logo
            logoClassName="size-16"
            titleClassName="text-pgreen text-[1.5rem]"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-10"
            description={
              type === "otp2"
                ? "please enter the one time password sent (OTP)"
                : type === "forget"
                ? "Enter registered phone number or email to receive a reset code"
                : null
            }
          />

          {type === "otp" ? (
            <div className="flex flex-col gap-5 mt-[3rem] mb-20">
              <p>Where should we send your OTP?</p>
              {otp_choice.map((item) => {
                return (
                  <Link
                    key={item.title}
                    to="/onboarding/otp-2"
                    onClick={() => switchOnboardingType("otp2")}
                  >
                    <div className="px-4 py-2 flex items-center border-2">
                      <div>
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <p className="ml-3">{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : type === "otp2" || type === "passUpdate" ? (
            <div className="mt-[3rem] mb-20 w-[396px] mx-auto">
              <div className="flex-center border">
                <InputOTP
                  maxLength={5}
                  value={formData.otpValue}
                  className="border-4 border-orange-800"
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, otpValue: value }))
                  }
                >
                  <InputOTPGroup className="justify-between w-[396px]">
                    <InputOTPSlot
                      index={0}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={1}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={2}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={3}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={4}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  Didn't receive an OTP?{" "}
                  <span className="text-blue-600">Resend</span>
                </p>
                <p className="">00:30</p>
              </div>
            </div>
          ) : type === "login" ? (
            <div className="mt-[3rem] mb-20 flex flex-col space-y-5">
              <FormRow
                type="text"
                label="Email or Phone number"
                name="name"
                value={formData.name}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Password"
                value={formData.password}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
              />
            </div>
          ) : type === "forget" ? (
            <div className="mt-[3rem] mb-20">
              <FormRow
                type="text"
                label="Email or phone number"
                name="name"
                value={formData.name}
                handleChange={handleChange}
              />
            </div>
          ) : type === "new" ? (
            <div className="mt-[3rem] mb-20 flex flex-col space-y-5">
              <FormRow
                type="password"
                label="New Password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
              />
            </div>
          ) : (
            <div className="mt-[3rem] mb-20 flex flex-col space-y-5">
              <FormRow
                type="text"
                label="Full Name"
                name="name"
                value={formData.name}
                handleChange={handleChange}
              />
              <FormRow
                type={type === "register" ? "email" : "text"}
                label={type === "register" ? "Email" : "State of residence"}
                name={type === "register" ? "email" : "state"}
                value={type === "register" ? formData.email : formData.state}
                handleChange={handleChange}
              />
              <FormRow
                type={type === "register" ? "password" : "text"}
                label={type === "register" ? "Create Password" : "Address"}
                name={type === "register" ? "password" : "address"}
                value={
                  type === "register" ? formData.password : formData.address
                }
                handleChange={handleChange}
              />
              {type === "register" && (
                <FormRow
                  type="password"
                  label="Confirm Password"
                  name="checkPass"
                  value={formData.checkPass}
                  handleChange={handleChange}
                />
              )}
            </div>
          )}

          {type === "login" && (
            <div className="flex items-center justify-between w-[80%] mx-auto mb-10">
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link
                to="/account/forgot-password"
                onClick={() => switchOnboardingType("forget")}
              >
                <p className="font-semibold">Forgot Password?</p>
              </Link>
            </div>
          )}

          {type === "otp" ? null : (
            <div className="max-w-[343px] mx-auto">
              <Button
                className="rounded-full block w-full bg-pgreen"
                onClick={() => {
                  if (type === "register") {
                    switchOnboardingType("complete");
                    return navigate("/onboarding/complete-profile");
                  }
                  if (type === "complete") {
                    switchOnboardingType("otp");
                    return navigate("/onboarding/choose-otp");
                  }
                  if (type === "otp2") {
                    switchOnboardingType("congrats");
                    return navigate("/onboarding/congrats");
                  }
                  if (type === "forget") {
                    switchOnboardingType("new");
                    return navigate("/update/pass");
                  }
                  if (type === "new") {
                    switchOnboardingType("passUpdate");
                    return navigate("/update/passcode");
                  }
                }}
              >
                {type === "login"
                  ? "Login"
                  : type === "forget"
                  ? "Send Code"
                  : "Continue"}
              </Button>

              {type === "login" && (
                <p className="text-center mt-10 text-eiteen">
                  Dont have an account?{" "}
                  <Link
                    to="/onboarding/register"
                    onClick={() => switchOnboardingType("register")}
                  >
                    Sign Up!
                  </Link>
                </p>
              )}

              {type === "register" || type === "login" ? (
                <div className="text-center mt-10">
                  {type === "register" && (
                    <p className="font-bold text-center text-base mb-1">or</p>
                  )}
                  <Button
                    className="rounded-full w-full flex items-center gap-10 shadow-lg font-bold"
                    variant="ghost"
                  >
                    <span>
                      <img src="/google.svg" alt="google" />
                    </span>
                    {type === "register" ? "Register" : "Continue"} with Google
                  </Button>
                </div>
              ) : type === "forget" || type === "new" ? null : (
                <div
                  className={cn("text-sm flex-center gap-1 mt-20", {
                    "mt-5": type === "otp2",
                  })}
                >
                  <img src="/small-lock.svg" alt="lock" />
                  Your info is safely secure
                </div>
              )}
            </div>
          )}
        </form>
      )}
    </>
  );
};

export default ReusableForm;