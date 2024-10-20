import { motion } from "framer-motion";
import Heading from "@/components/Heading";
import { contribution } from "../constants";

const Contribution = () => {
  return (
    <section className="contribution-section">
      <div className="contribution">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ margin: "0px 0px -300px 0px" }}
          className="contribution-phone"
        >
          <img
            src="/hand-phone.svg"
            alt="hand and phone"
            className="size-full object-contain object-center"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          className="contribution-pg"
        >
          <Heading
            title={contribution.title}
            tclass="font-josefin text-[2rem] font-bold"
            description={contribution.desc}
            dclass="text-neutral-500 text-base tablet:text-xl laptop:text-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contribution;
