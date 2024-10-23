import Avatars from "@/features/booking/components/Avatars";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { useNavigate } from "react-router-dom";
import Choose from "@/components/Choose";
import { choose_main } from "@/constants";

const ChooseMain = ({ type, goToInputRideDetails, closeModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div className="h-20">
        <Avatars type={type} />
      </motion.div>

      <Heading
        className="text-center min-h-[110px] px-6 pt-6"
        title={choose_main[type].title}
        tclass="title__default title--book"
        description={choose_main[type].desc}
        dclass="desc__default mt-1 desc--book"
      />

      <Choose
        containerClass="h-[7.5rem] flex-center gap-x-7"
        choice1txt={choose_main[type].btnText1}
        choice2txt={choose_main[type].btnText2}
        btnClass="btn--hero"
        addedClass1="btn--primary w-[36%]"
        addedClass2="btn--secondary w-[48%]"
        handleChoice1={goToInputRideDetails}
        handleChoice2={async () => {
          await closeModal();
          navigate("/schedule-ride");
        }}
      />
    </>
  );
};

export default ChooseMain;
