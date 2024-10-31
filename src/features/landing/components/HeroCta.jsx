import { useSelector } from "react-redux";
import dispatchables from "@/utils/dispatchables";
import { memo } from "react";
import { ChooseModal } from "@/features/booking";
import { Btn, Choose } from "@/components";
import { activateChooseBtn } from "@/components/Choose";
import { useGlobalOnboardContext } from "@/features/onboarding/context/OnboardingContext";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const activeBtn = (condition) =>
  activateChooseBtn(condition, "border-basic text-basic", "text-neutral");

const HeroCta = ({ type }) => {
  const { support } = useSelector((state) => state.global);
  const { chooseRole } = useGlobalOnboardContext();
  // const user = useCurrentUser();

  const { whatSupport } = dispatchables();

  const displayCta = () => {
    switch (type) {
      case "main":
        // return user?.role === "User"  ? (
         return <>
            <ChooseModal type="ride" />
            <ChooseModal type="delivery" />
          </>
        // ) : null;
      case "earn":
        // return user?.role === "User" || null ? (
          return <Btn
            text="Register"
            href="/onboarding/rider"
            styling="btn--hero btn--primary"
            linkBtnWidth="w-[171px]"
            onClick={() => chooseRole("Rider")}
          />
        // ) : null;
      case "support":
        return (
          <Choose
            containerClass="w-full flex-center mt-10"
            choice1txt="Faq"
            choice2txt="Contact Us"
            btnClass="border-b font-bold text-base w-[180px] p-4 rounded-none bg-transparent"
            addedClass1={activeBtn(support === "faq")}
            addedClass2={activeBtn(support === "contact")}
            handleChoice1={() => whatSupport("faq")}
            handleChoice2={() => whatSupport("contact")}
          />
        );
      default:
        break;
    }
  };

  return <div className="gap-2 mt-6 flex-center">{displayCta()}</div>;
};

export default memo(HeroCta);
