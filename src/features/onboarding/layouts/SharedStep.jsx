import CustomBg from "../components/CustomBg";
import { ArrowLeftCircle, XIcon } from "lucide-react";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";

const SharedStep = ({
  text,
  headClass,
  headTitle,
  headDesc,
  children,
  prevProcess,
}) => {
  return (
    <section className="onboarding__shared-step">
      <div className="board__onboarding">
        <Btn
          icon={<XIcon color="black" />}
          onClick={prevProcess}
          styling="cancel-btn p-0"
        />
        <CustomBg text={text} />
      </div>

      <div className="onboarding__page--right relative">
        <Btn
          icon={<ArrowLeftCircle color="black" size={30} />}
          styling="md:hidden bg-transparent p-0 absolute top-4 md:top-11 left-5"
          onClick={prevProcess}
        />

        <div className="w-full py-11">
          <div className="onboarding-head">
            <LogoPlain
              styling="w-[122px] h-[81.33px] mx-auto"
              logoStyling="image"
            />
            <Heading
              className={headClass}
              title={headTitle}
              description={headDesc}
              tclass="onboarding-head__title"
              dclass="onboarding-desc"
            />
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default SharedStep;
