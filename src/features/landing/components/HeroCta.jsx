import { useDispatch, useSelector } from "react-redux";
import { chooseSupport } from "@/store/slices/global-slice";
// import { updateBookingData } from "../../store/slices/bookride-slice";
import dispatchables from "@/utils/dispatchables";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { memo } from "react";
import Btn from "@/components/btn/Btn";
import { ChooseModal } from "@/features/booking";
import Choose from "@/components/Choose";

const HeroCta = ({ type }) => {
  const user = useCurrentUser();
  const dispatch = useDispatch();
  // redux dispatch and globals
  const { chooseRole } = dispatchables();
  const { support } = useSelector((state) => state.global);

  // what kind of support
  const whatSupport = (key) => {
    dispatch(chooseSupport(key));
  };

  return (
    <div className="flex-center gap-2 mt-6">
      {type === "main" || type === "earn" ? (
        <>
          {type === "main" && <ChooseModal type="ride" />}

          {type === "earn" && (
            <Btn
              text="Register"
              href="/onboarding/registration"
              styling="btn--hero btn--primary"
              linkBtnWidth="w-[171px]"
              onClick={() => {
                // showuld set the registering as in the ls as rider
                chooseRole("Rider");
              }}
            />
          )}

          {type === "main" && <ChooseModal type="delivery" />}
        </>
      ) : (
        <Choose
          containerClass="w-full flex-center mt-10"
          choice1txt="Faq"
          choice2txt="Contact Us"
          btnClass="border-b font-bold text-base w-[180px] p-4 rounded-none bg-transparent"
          addedClass1={
            support === "faq" ? "border-basic text-basic" : "text-neutral"
          }
          addedClass2={
            support === "contact" ? "border-basic text-basic" : "text-neutral"
          }
          handleChoice1={() => whatSupport("faq")}
          handleChoice2={() => whatSupport("contact")}
        />
      )}
    </div>
  );
};

export default memo(HeroCta);
