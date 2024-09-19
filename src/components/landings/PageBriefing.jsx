import {
  about_descriptions,
  about_titles,
  earn_requirements,
  services,
} from "../../constants";
import Btn from "../shared/Btn";
import { motion } from "framer-motion";
import Flexibility from "./Flexibility";
import Heading from "../shared/Heading";

const PageBriefing = ({ type = "main" }) => {
  return (
    <section id="about" className="page-brief-container">
      <div
        className={`min-h-[696px] ${type === "main" && "flex-center"} ${
          type === "about" && "flex-center"
        }`}
      >
        {type === "earn" && <Flexibility />}

        <div className="min-h-[526px] md:flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true, amount: 0.5 }}
            id="brief"
            className="about-brief"
          >
            {type === "main" && (
              <>
                <Heading
                  className="w-full"
                  introTitle="About Us"
                  introClass="text-eco-green"
                  title={about_titles.one}
                  tclass="text-eco-neutral font-josefin"
                  description={about_descriptions.one}
                  dclass="mt-5 mb-10 text-base md:text-eiteen"
                  type="about"
                />
                <div>
                  <Btn text="Learn More" />
                </div>
              </>
            )}

            {type === "about" && (
              <>
                <Heading
                  className="w-full"
                  title={about_titles.one}
                  tclass="text-eco-neutral font-josefin"
                  description={about_descriptions.three}
                  dclass="mt-5 mb-10 text-base md:text-eiteen"
                  type="about"
                />
              </>
            )}

            {type === "earn" && (
              <>
                <h2 className="text-[2rem] font-bold text-center md:text-left font-josefin">
                  Requirements
                </h2>
                <ul className="list-disc pl-4 mt-7">
                  {earn_requirements.map((item, index) => (
                    <li
                      key={index}
                      className="text-base md:text-2xl text-eco-neutral-prime font-montserrat"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          {type === "about" ? (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true, amount: 0.5 }}
              id="about-image"
              className="w-[542px] h-[454px] border"
            >
              <img
                src="/briefings/about_brief_video.svg"
                alt=""
                className="size-full border-4"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true, amount: 0.5 }}
              id="about-image"
              className="about-image"
            >
              <img
                src={type === "main" ? "/about.png" : "/earn_about_bg.png"}
                alt="about keke"
                className="size-full object-cover object-center"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBriefing;