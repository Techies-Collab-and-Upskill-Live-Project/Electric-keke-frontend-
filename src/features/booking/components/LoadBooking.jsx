import Btn from "@/components/btn/Btn";
import Loader from "@/components/loaders/Loader";
import Heading from "@/components/Heading";
import { motion } from "framer-motion";
import { useLoadBooking } from "../hooks/useLoadBooking";
import { UpdateBooking } from "@/services/UpdateBooking";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";

const LoadBooking = ({ setWaiting }) => {
  useLoadBooking(setWaiting);
  const { showAlert } = dispatchables();

  const CancelRideBooking = async () => {
    const booking_id = getItemFromLs("book_id");
    console.log(booking_id);
    try {
      const response = await UpdateBooking(booking_id, "cancelled");
      showAlert(response);
      setWaiting(false);
    } catch (error) {
      const { detail } = error.data ?? "default";
      showAlert(detail, "info");
    }
  };

  return (
    <motion.div
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
      className="bg-white w-full py-20 z-50 h-[calc(100vh-20vh)]"
    >
      <div>
        <div className="mx-auto size-20">
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
            onClick={CancelRideBooking}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadBooking;
