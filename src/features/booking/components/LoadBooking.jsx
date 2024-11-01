import Btn from "@/components/btn/Btn";
import Loader from "@/components/loaders/Loader";
import Heading from "@/components/Heading";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const time_out = setTimeout(() => {
      navigate("/tracking/passenger");
    }, 10000);

    return () => clearTimeout(time_out);
  });

  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
      className="bg-white w-full py-20 z-50 h-[calc(100vh-20vh)]"
    >
      <div>
        <div className="size-20 mx-auto">
          <Loader type="spin2" />
        </div>

        <Heading
          className="text-center w-full max-w-[840px] mx-auto"
          title="Waiting for Rider to Accept Ride"
          description="If your ride request hasn't been accepted promptly, feel free to cancel and try again."
          dclass="text-base md:text-2xl lg:text-[1.75rem] text-neutral-500 mt-6"
          tclass="text-2xl md:text-[2rem] lg:text-[40px] font-bold"
        />

        <div className="w-full max-w-[540px] mx-auto mt-10">
          <Btn
            text="Cancel Request"
            styling="w-full btn btn--lg btn--primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadBooking;
