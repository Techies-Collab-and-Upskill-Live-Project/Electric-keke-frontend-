import { motion } from "framer-motion";

import React from "react";
import { getAvatars } from "../constants";

const Avatars = ({ type }) => {
  return (
    <motion.div
      variants={{
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.035,
            staggerChildren: 0.25,
          },
        },
        hide: { opacity: 0 },
      }}
      className="h-14 w-[7.5rem] relative mx-auto mt-[1.5rem] isolate"
    >
      {getAvatars[type].map((item, index) => {
        return (
          <motion.div
            variants={{
              show: {
                opacity: 1,
                y: 0,
              },
              hide: { opacity: 0, y: 200 },
            }}
            key={index}
            className={`absolute border rounded-full overflow-hidden ${item.styling}`}
          >
            <img src={item.src} alt="avatars" className="image" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Avatars;
