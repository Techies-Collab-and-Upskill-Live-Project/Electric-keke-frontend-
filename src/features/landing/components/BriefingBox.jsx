import { motion } from "framer-motion";
import EarnRequirements from "./earn/EarnRequirements";
import Heading from "@/components/Heading";
import Btn from "@/components/btn/Btn";

const BriefingBox = ({
  briefClass,
  introTitle,
  title,
  description,
  imageUrl,
  imageContainerStyle,
  imageStyle = "image",
  showBtn,
  type,
}) => {
  return (
    <div className="relative items-center w-full tablet:flex isolate gap-x-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.5 }}
        id="brief"
        className={briefClass}
      >
        {type === "earn" ? (
          <EarnRequirements />
        ) : (
          <>
            <Heading
              className="w-full"
              introTitle={introTitle && introTitle}
              introClass="text-basic"
              title={title}
              tclass="page-brief__title title-dark"
              description={description}
              dclass="page-brief__desc"
            />

            {showBtn && (
              <div className="mt-8">
                <Btn
                  linkBtnWidth="w-[171px] inline-block"
                  href="/about"
                  text="Learn More"
                  styling="btn--hero btn--primary"
                />
              </div>
            )}
          </>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.5 }}
        // id="about-imageUrl"
        className={imageContainerStyle}
      >
        <img src={imageUrl} alt="about keke" className={imageStyle} />
      </motion.div>
    </div>
  );
};

export default BriefingBox;
