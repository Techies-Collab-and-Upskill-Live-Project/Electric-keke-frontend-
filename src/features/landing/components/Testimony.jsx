import { motion } from "framer-motion";

const Testimony = ({
  index,
  currentTestimony,
  name,
  testimony,
  location,
  initial,
  animate,
  initialParagraph,
  animateParagraph,
  initialDetails,
  animateDetails,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      className={`testimony ${index !== currentTestimony && "absolute -z-50"}`}
    >
      <motion.div
        initial={initialParagraph}
        whileInView={animateParagraph}
        transition={{delay: 0.5, duration: 1}}
        className="flex-1"
      >
        <p className="testimony-paragraph">{testimony}</p>
      </motion.div>

      <motion.div
        initial={initialDetails}
        whileInView={animateDetails}
        className="mt-6 text-center md:text-left"
      >
        <p className="testimony-data">{name}</p>
        <p className="testimony-data">{location}</p>
      </motion.div>
    </motion.div>
  );
};

export default Testimony;
