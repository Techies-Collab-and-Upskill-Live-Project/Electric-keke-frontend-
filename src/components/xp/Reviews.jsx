import { motion } from "framer-motion";
import {
  reviewContainer,
} from "../../constants/variants";
import reviews from "../../mock-data/reviews";
import SingleReview from "./SingleReview";
import Overlay from "../Overlay";
import RegularList from "../_design-patterns/RegularList";

const Reviews = () => {
  return (
    <div className="relative">
      <motion.h2 className="font-bold text-2xl md:text-[2rem]">Review</motion.h2>
      <Overlay logo={false} className="rider-review-overlay" />
      <motion.div
        initial="out"
        animate="enter"
        variants={reviewContainer}
        className="rider-review-container"
      >
        <RegularList list={[]} component={SingleReview} renderListEmpty={() => <div>No Reviews for this rider</div>} />
      </motion.div>
    </div>
  );
};

export default Reviews;
