import Avatars from "@/features/booking/components/Avatars";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { useNavigate } from "react-router-dom";
import Choose from "@/components/Choose";

const ChooseMain = ({ type, goToInputRideDetails, closeModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div className="h-20">
        <Avatars type={type} />
      </motion.div>

      <Heading
        className="text-center min-h-[110px] px-6 pt-6"
        title={
          type === "ride" ? "Ready to Go?" : "Instant or Sheduled- You Decide!"
        }
        tclass="title__default title--book"
        description={`Choose how you want to ${
          type === "ride" ? "ride" : "send"
        } with EcoRide`}
        dclass="desc__default mt-1 desc--book"
      />

      <Choose
        containerClass="h-[7.5rem] flex-center gap-x-7"
        choice1txt="Instant Ride"
        choice2txt="Schedule Ride"
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
