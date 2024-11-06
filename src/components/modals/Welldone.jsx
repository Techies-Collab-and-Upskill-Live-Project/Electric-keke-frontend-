import React from "react";
import Heading from "../Heading";
import Btn from "../btn/Btn";
import Lottie from "lottie-react";
import done from "@/assets/animations-data/done.json";
import IconWrapper from "../IconWrapper";

const Welldone = ({ closeModal }) => {
  return (
    <>
      <div className="pt-12 pb-8 px-9">
        <IconWrapper
          iconElement={Lottie}
          iconElementProps={{ animationData: done, loop: false }}
          containerStyle="size-20 mx-auto"
        />

        <Heading
          title="Welldone!"
          tclass="text-[28px] font-bold text-secondary-110"
          className="text-center"
          description="You have succesfully updated your profile"
          dclass="text-sm text-neutral-130"
        />
      </div>

      <div className="h-[136px] flex-center pt-8 px-9 pb-12">
        <Btn
          text="Back"
          styling="btn btn--lg btn--primary w-full mobile:max-w-[358px] laptop:max-w-[528px]"
          onClick={closeModal}
        />
      </div>
    </>
  );
};

export default Welldone;
