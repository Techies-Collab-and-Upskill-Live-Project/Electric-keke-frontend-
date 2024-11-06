import RiderShared from "../../layouts/RiderShared";
import { driver_authProcess } from "@/constants";
import Heading from "@/components/Heading";
import Lottie from "lottie-react";
import waiting from "@/assets/animations-data/waiting.json";
import IconWrapper from "@/components/IconWrapper";
import { useGlobalOnboardContext } from "../../context/OnboardingContext";
import {  deletItemFromLs } from "@/utils/ls";

const Processing = () => {
  const {driverImages} = useGlobalOnboardContext();
  console.log(driverImages)
  deletItemFromLs('driver-images')
  return (
    <RiderShared>
      <div className="driverauth">
        <IconWrapper
          iconElement={Lottie}
          iconElementProps={{ animationData: waiting }}
          containerStyle="driverauth__processing"
        />

        <div className="mt-10">
          <Heading
            className="text-center"
            tclass="driverauth__title"
            title={driver_authProcess[3].title}
            description={driver_authProcess[3].desc}
            dclass="driverauth__desc"
          />
        </div>
      </div>
    </RiderShared>
  );
};

export default Processing;
