import { motion } from "framer-motion";
import { riderPictureContainer } from "../../../constants/variants";
import Btn from "@/components/btn/Btn";
import { ProfilePhoto } from "@/components";

const RiderPicture = ({ photo, fullname, submitBooking }) => {
  return (
    <motion.div
      initial="out"
      animate="enter"
      variants={riderPictureContainer}
      className="w-full max-w-[510px] justify-between"
    >
      <ProfilePhoto
        styling="rider-picture-container  rounded-ml"
        imageUrl={photo}
        text={fullname[0]}
        noImageContainerStyle="rider-picture-container bg-basic-900 flex-center  rounded-ml"
        textStyle="text-4xl text-neutral font-bold font-josefin"
      />

      <div className="hidden mt-4 md:block">
        <Btn
          styling="w-full btn btn--lg btn--primary"
          text="Request Ride"
          onClick={submitBooking}
        />
      </div>
    </motion.div>
  );
};

export default RiderPicture;
